"use client";

import { useState, useEffect } from "react";
import { auth, db, storage } from "../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { doc, setDoc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import Link from "next/link";


export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({ displayName: "", bio: "", photoURL: "" });
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
        await fetchProfile(user.uid);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
    
  }, []);

  const fetchProfile = async (uid) => {
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setProfile(docSnap.data());
      setFormData(docSnap.data());
    } else {
      setProfile(null);
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSave = async () => {
    if (!user) return;
    const docRef = doc(db, "users", user.uid);
    await setDoc(docRef, {
      ...formData,
      email: user.email,
    });
    await fetchProfile(user.uid);
    setEditMode(false);
  };

  const handleUpdate = async () => {
    if (!user) return;
    const docRef = doc(db, "users", user.uid);
    await updateDoc(docRef, formData);
    await fetchProfile(user.uid);
    setEditMode(false);
  };

  const handleDelete = async () => {
    if (!user) return;
    const docRef = doc(db, "users", user.uid);
    await deleteDoc(docRef);
    setProfile(null);
    setFormData({ displayName: "", bio: "", photoURL: "" });
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);

    const storageRef = ref(storage, `profile_pictures/${user.uid}`);
    await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(storageRef);

    setFormData(prev => ({
      ...prev,
      photoURL: downloadURL,
    }));

    setUploading(false);
  };

  if (!user) return <div style={styles.center}>กรุณา Login ก่อนนะคะ 🌸</div>;

  return (
    <div style={styles.container}>

    {/*  NavBar */}
    <nav className={styles.navbar}>
      <div className={styles.navLogo}></div>
      <ul className={styles.navLinks}>
        <li><Link href="/">Home</Link></li>
      </ul>
    </nav>

    
      <h1 style={styles.title}>My Profile </h1>

      {!profile || editMode ? (
        <div style={styles.form}>
          <div style={styles.avatarWrapper}>
            {formData.photoURL && (
              <img src={formData.photoURL} alt="Profile" style={styles.avatar} />
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              style={styles.uploadInput}
            />
          </div>

          <input
            type="text"
            name="displayName"
            placeholder="Display Name"
            value={formData.displayName}
            onChange={handleChange}
            style={styles.input}
          />
          <textarea
            name="bio"
            placeholder="Bio"
            value={formData.bio}
            onChange={handleChange}
            style={styles.textarea}
          />

          {profile ? (
            <button onClick={handleUpdate} style={styles.button}>
              {uploading ? "กำลังอัปโหลด..." : "Update Profile"}
            </button>
          ) : (
            <button onClick={handleSave} style={styles.button}>
              {uploading ? "กำลังอัปโหลด..." : "Create Profile"}
            </button>
          )}
        </div>
      ) : (
        <div style={styles.profileCard}>
          
          {profile.photoURL && (
            <img src={profile.photoURL} alt="Profile" style={styles.avatarBig} />
          )}
          <h2>{profile.displayName}</h2>
          <p>Email: {user.email}</p>
          <p>Bio: {profile.bio}</p>

          <div style={styles.buttonGroup}>
            <button onClick={() => setEditMode(true)} style={styles.button}>Edit Profile</button>
            <button onClick={handleDelete} style={{ ...styles.button, backgroundColor: "red" }}>
              Delete Profile
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  center: {
    textAlign: "center",
    padding: "2rem",
    fontSize: "18px",
  },
  container: {
    maxWidth: "600px",
    margin: "0 auto",
    padding: "2rem",
    textAlign: "center",
    backgroundColor: "#e6f0ff", // ฟ้าอ่อนๆ
    borderRadius: "20px",
    boxShadow: "0 8px 24px rgba(30, 144, 255, 0.2)", // เงาเบาๆ
    fontFamily: "'Poppins', sans-serif",
    color: "#000000",
  },
  title: {
    color: "#1e90ff", // ฟ้าเข้ม
    marginBottom: "1.5rem",
    fontSize: "2rem",
    fontWeight: "600",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "12px",
    border: "1px solid #ccc",
    backgroundColor: "#ffffff",
    color: "#000000",
  },
  textarea: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "12px",
    border: "1px solid #ccc",
    backgroundColor: "#ffffff",
    minHeight: "80px",
    color: "#000000",
  },
  button: {
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#1e90ff",
    color: "white",
    border: "none",
    borderRadius: "12px",
    cursor: "pointer",
    transition: "0.3s",
  },
  buttonHover: {
    backgroundColor: "#63b3ed", // Hover สีฟ้าอ่อนขึ้น
  },
  avatarWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "0.5rem",
  },
  uploadInput: {
    marginTop: "5px",
  },
  avatar: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "2px solid #1e90ff",
  },
  avatarBig: {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "1rem",
    border: "3px solid #1e90ff",
  },
  profileCard: {
    marginTop: "2rem",
    padding: "1.5rem",
    backgroundColor: "#ffffff",
    borderRadius: "20px",
    boxShadow: "0 4px 12px rgba(30, 144, 255, 0.2)",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    marginTop: "1rem",
  },
  
    navbar: {
      width: "100%",
      padding: "15px 30px",
      backgroundColor: "#e6f0ff", // ฟ้าอ่อนๆ
      color: "#1e90ff",           // ฟ้าเข้ม
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      fontFamily: "'Poppins', sans-serif",
      fontWeight: "500",
      fontSize: "18px",
      boxShadow: "0px 2px 8px rgba(0,0,0,0.05)",
      position: "sticky",
      top: 0,
      zIndex: 999,
    },
    navLogo: {
      fontSize: "22px",
      fontWeight: "bold",
      color: "#1e90ff",
    },
    navLinks: {
      listStyle: "none",
      display: "flex",
      gap: "20px",
      margin: 0,
      padding: 0,
    },
    navLinkItem: {
      textDecoration: "none",
      color: "#1e90ff",
      fontSize: "16px",
      transition: "color 0.3s",
    },
  };

