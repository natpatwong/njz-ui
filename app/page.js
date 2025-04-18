import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link';
import Newjeans from '/components/Newjeans';
import {SpotifyEmbed, Supernaturl} from "/components/Spotify";
import { DITTO, GOD, OMG, Super, Sweet } from "@/components/Spotify";

export default function Home() {
  return (
    <div
      className={styles.page}
      style={{
        backgroundImage: "url('/picnjz/nnp.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundPositionY:'top',
        minHeight: '100vh',
      }}
    >
      {/*  NavBar */}
      <nav className={styles.navbar}>
        <div className={styles.navLogo}></div>
        <ul className={styles.navLinks}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/bio">Bio</Link></li>
          <li><Link href="/members">Members</Link></li>
        </ul>
      </nav>

      {/* 🔷 Main Content */}
      <main className={styles.main}>
        <Newjeans />

        <div className={styles.row}>
          <Image className={styles.image} src="/picnjz/actention.jpg" width={400} height={400} alt="image1" 
          style={{ boxShadow: '0 4px 50px rgba(0, 0, 0, 0.3)',
            borderRadius: '12px',}}/>

          <Image className={styles.image} src="/picnjz/OMG.jpg" width={400} height={400} alt="image2" 
          style={{ boxShadow: '0 4px 50px rgba(0, 0, 0, 0.3)',
    borderRadius: '12px',}}/>

          <Image className={styles.image} src="/picnjz/GetUp.webp" width={400} height={400} alt="image3" 
          style={{ boxShadow: '0 4px 50px rgba(0, 0, 0, 0.3)',
            borderRadius: '12px',}}/>
        </div>

        <div style={{ display: 'flex', flexDirection: 'row', gap: '140px', alignItems: 'flex-start' }}>
          <SpotifyEmbed />
          <OMG />
          <DITTO />
        </div>

        <div className={styles.row}>
          <Image className={styles.image} src="/picnjz/sweet.jpg" width={400} height={400} alt="image4"
          style={{ boxShadow: '0 4px 50px rgba(0, 0, 0, 0.3)',
    borderRadius: '12px',}}/>
          <Image className={styles.image} src="/picnjz/GOD.jpg" width={400} height={400} alt="image5" 
          style={{ boxShadow: '0 4px 50px rgba(0, 0, 0, 0.3)',
            borderRadius: '12px',}}/>

          <Image className={styles.image} src="/picnjz/super.jpg" width={400} height={400} alt="image6"
          style={{ boxShadow: '0 4px 50px rgba(0, 0, 0, 0.3)',
            borderRadius: '12px',}}/>
        </div>

        <div style={{ display: 'flex', flexDirection: 'row', gap: '140px', alignItems: 'flex-start' }}>
          <Sweet />
          <GOD />
          <Super />
        </div>
      </main>
    </div>
  );
}
