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
          <p>just a FAN blog, have a nice day -Zen & Jublek</p>
        </ul>
      </nav>

      {/* อักษรลอย*/}
      <main className={styles.main}>
        <Newjeans />



{/* //ข้างบน */}
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
             
             
              {/* ข้างล่าง */}
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
        {/* <div><p>About</p></div> */}
        {/* ชนากานต์ ผิวจันทร์ 6608247
        ณัฐภัสสร ดอกนาค 6605191 */}
      </main>
    </div>
  );
}
