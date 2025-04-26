"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link';
import Newjeans from '/components/Newjeans';
import { SpotifyEmbed, Supernaturl, DITTO, GOD, OMG, Super, Sweet } from "@/components/Spotify";
import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase.js';
import Login from '../components/Login';
import ChatBox from "@/components/Chatbox";


export default function Home() {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };

  const handleLoginSuccess = () => {
    setShowLogin(false);
  };

  const handleLogout = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  // ฟังก์ชันสำหรับส่งข้อความไปเก็บ
  const handleSendMessage = async (message) => {
    await fetch("/api/save-message", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });
  };

  // ฟังก์ชันสำหรับโหลดข้อความเก่า
  const fetchMessages = async () => {
    const res = await fetch("/api/load-messages");
    const data = await res.json();
    return data.messages || [];
  };

  return (
    <div
      className={styles.page}
      style={{
        backgroundImage: "url('/picnjz/nnp.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundPositionY: 'top',
        minHeight: '100vh',
      }}
    >
      {/* NavBar */}
      <nav className={styles.navbar}>
        <div className={styles.navLogo}></div>
        <ul className={styles.navLinks}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/bio">Bio</Link></li>
          <li><Link href="/members">Members</Link></li>
          <p>just a FAN blog, have a nice day -Zen & Jublek</p>
          <div className={styles.authButtons}>
            {user ? (
              <>
                <span className={styles.welcomeText}>สวัสดี, {user.displayName || user.email}</span>
                <button onClick={handleLogout} className={styles.authButton}>ออกจากระบบ</button>
                <Link href="/profile">
                  <button className={styles.authButton}>โปรไฟล์</button>
                </Link>
              </>
            ) : (
              <button onClick={toggleLogin} className={styles.authButton}>LOGIN</button>
            )}
          </div>
        </ul>
      </nav>

      {/* แสดง Login Modal */}
      {showLogin && !user && (
        <div className={styles.loginModal}>
          <div className={styles.modalContent}>
            <span className={styles.closeButton} onClick={toggleLogin}>&times;</span>
            <Login onLoginSuccess={handleLoginSuccess} />
          </div>
        </div>
      )}

      {/* อักษรลอย */}
      <main className={styles.main}>
        <Newjeans />

        {/* ข้างบน */}
        <div className={styles.row}>
          <Image className={styles.image} src="/picnjz/actention.jpg" width={400} height={400} alt="image1"
            style={{ boxShadow: '0 4px 50px rgba(0, 0, 0, 0.3)', borderRadius: '12px' }} />
          <Image className={styles.image} src="/picnjz/OMG.jpg" width={400} height={400} alt="image2"
            style={{ boxShadow: '0 4px 50px rgba(0, 0, 0, 0.3)', borderRadius: '12px' }} />
          <Image className={styles.image} src="/picnjz/GetUp.webp" width={400} height={400} alt="image3"
            style={{ boxShadow: '0 4px 50px rgba(0, 0, 0, 0.3)', borderRadius: '12px' }} />
        </div>

        {/* เพลง */}
        <div style={{ display: 'flex', flexDirection: 'row', gap: '140px', alignItems: 'flex-start' }}>
          <SpotifyEmbed />
          <OMG />
          <DITTO />
        </div>

        {/* ข้างล่าง */}
        <div className={styles.row}>
          <Image className={styles.image} src="/picnjz/sweet.jpg" width={400} height={400} alt="image4"
            style={{ boxShadow: '0 4px 50px rgba(0, 0, 0, 0.3)', borderRadius: '12px' }} />
          <Image className={styles.image} src="/picnjz/GOD.jpg" width={400} height={400} alt="image5"
            style={{ boxShadow: '0 4px 50px rgba(0, 0, 0, 0.3)', borderRadius: '12px' }} />
          <Image className={styles.image} src="/picnjz/super.jpg" width={400} height={400} alt="image6"
            style={{ boxShadow: '0 4px 50px rgba(0, 0, 0, 0.3)', borderRadius: '12px' }} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'row', gap: '140px', alignItems: 'flex-start' }}>
          <Sweet />
          <GOD />
          <Super />
        </div>
      </main>

     {/* Chatbox แปะมุมล่าง */}
     {user && (
  <ChatBox username={user.displayName || "Guest"} photoURL={user.photoURL || null} />
)}


    </div>
  );
}
