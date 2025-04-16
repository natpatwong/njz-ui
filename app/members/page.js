'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./members.module.css";
import Link from "next/link";

export default function MembersPage() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const res = await fetch("/api/infomembers", { cache: "no-store" });
        const data = await res.json();
        setMembers(data);
      } catch (error) {
        console.error("Failed to fetch members:", error);
      }
    };

    fetchMembers();
  }, []);

  return (
    <div className={styles.container}>
      
      {/* NavBar */}
      <nav className={styles.navbar}>
        <ul className={styles.navLinks}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/members">Members</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>

      {/* Members List */}
      {members.map((member) => (
        <section
          key={member.id}
          className={`${styles.section} ${getColorClass(member.color)}`}
        >
          <div className={styles.member}>
            <Image
              src={member.img}
              alt={member.name}
              width={300}
              height={300}
            />
            <h2>{member.name}</h2>
            <p>{member.role}</p>
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
