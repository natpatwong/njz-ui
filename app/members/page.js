'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./members.module.css";
import Link from "next/link";

export default function MembersPage() {
  const [members, setMembers] = useState([]);
  const [selectedMemberId, setSelectedMemberId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const res = await fetch("/api/infomembers", { cache: "no-store" });
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setMembers(data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch members:", error);
        setError(error);
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  const handleMemberClick = (id) => {
    setSelectedMemberId(id);
  };

  const handleCloseInfo = () => {
    setSelectedMemberId(null);
  };

  const selectedMember = members.find((member) => member.id === selectedMemberId);

  if (loading) {
    return <p>Loading members...</p>;
  }

  if (error) {
    return <p>Error fetching members: {error.message}</p>;
  }

  return (
    <div className={styles.container}>
      {/*  NavBar */}
      <nav className={styles.navbar}>
        <div className={styles.navLogo}></div>
        <ul className={styles.navLinks}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/bio">Bio</Link></li>
          <li><Link href="/members">Members</Link></li>
        </ul>
      </nav>
    

      {/* Members List */}
      {members.map((member) => (
        <section
          key={member.id}
          className={`${styles.section} ${getColorClass(member.color)} ${
            selectedMemberId === member.id ? styles.selected : ''
          }`}
          onClick={() => handleMemberClick(member.id)}
        >
          <div className={styles.member}>
            <div className={styles.imageContainer}>
              <Image
                src={member.img}
                alt={member.name}
                width={400}
                height={300}
                style={{ objectFit: 'cover' }}
              />
              {/* ตัวที่กดแล้วรายละเอียดเด้งขึ้นมา */}
              {selectedMemberId === member.id && selectedMember && (
                <div className={styles.memberInfoOverlay} style={{margin: '10px'}}> {/*ระยะห่างจากขอบข้างบน*/}
                  <p className={styles.memberNameOverlay}style={{color: 'black'}}>{selectedMember.role}</p>   
                  <p className={styles.memberRoleOverlay}style={{color:'black'}}>{selectedMember.decribtion}</p>
                  <p className={styles.memberRoleOverlay}style={{color:'black'}}>{selectedMember.Birthday}</p>
                  <p className={styles.memberRoleOverlay}style={{color:'black'}}>{selectedMember.Height}</p>


                </div>
              )}
            </div>
            <h2>{member.name}</h2>
          </div>
        </section>
      ))}
    </div>
  );
}

function getColorClass(color) {
  switch (color) {
    case "#f71ec8":
      return styles.pink;
    case "#2377D5":
      return styles.blue;
    case "#FFE81B":
      return styles.yellow;
    case "#B375F3":
      return styles.lavender;
    case "#00C12D":
      return styles.green;
    default:
      return "";
  }
}