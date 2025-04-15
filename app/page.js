import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link';
import Newjeans from '/components/Newjeans';
import {SpotifyEmbed, Supernaturl} from "/components/Spotify";

export default function Home() {
  return (
    <div className={styles.page}>
      
      {/*  NavBar */}
      <nav className={styles.navbar}>
        <div className={styles.navLogo}>
        </div>
        <ul className={styles.navLinks}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/members">Members</Link></li> 
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav> 

    

      {/* 🔷 Main Content */}
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/pic njz/NJZ_logo.webp"
          alt="logo Banner"
          height={50}
          width={50}
          priority
        />
      {/*ลองNEWJEANS rainbow text */}
        <Newjeans/>
        {/* ปุ่ม home */}
        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new"
            target="_blank"
            rel="noopener noreferrer"
          >
            Home
          </a>
          {/* ปุ่ม members */}
          <a href="https://nextjs.org/docs">
            Members
          </a>
          </div>
           {/* 🎧 Spotify Players */}
        <div style={{ display: 'flex', flexDirection: 'row', gap: '100px', alignItems: 'flex-start' }}>
          <SpotifyEmbed />
          <Supernaturl />
        </div>
      
      </main>
    </div>
  );
}
