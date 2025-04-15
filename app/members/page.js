import Image from "next/image";
import styles from "./members.module.css"; 
import Link from 'next/link';


export default function Members() {
  return (
    <div className={styles.container}>
      

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

      {/* Section: Minji */}
      <section className={`${styles.section} ${styles.blue}`}>
        <div className={styles.member}>
          <Image src="/members/minji.png" alt="Minji" width={200} height={200} />
          <h2>Minji</h2>
          <p>민지 - Leader, vocalist, dancer. Cool and graceful.</p>
        </div>
      </section>

      {/* Section: Hanni */}
      <section className={`${styles.section} ${styles.pink}`}>
        <div className={styles.member}>
          <Image src="/members/hanni.png" alt="Hanni" width={200} height={200} />
          <h2>Hanni</h2>
          <p>하니 - Energetic and expressive. Vocalist and performer!</p>
        </div>
      </section>

      {/* Section: Danielle */}
      <section className={`${styles.section} ${styles.yellow}`}>
        <div className={styles.member}>
          <Image src="/members/danielle.png" alt="Danielle" width={200} height={200} />
          <h2>Danielle</h2>
          <p>다니엘 - Bright and bubbly! Dual nationality charm~</p>
        </div>
      </section>

      {/* Section: Hyein*/}
      <section className={`${styles.section} ${styles.lavender}`}>
        <div className={styles.member}>
          <Image src="/members/danielle.png" alt="Danielle" width={200} height={200} />
          <h2>Danielle</h2>
          <p>다니엘 - Bright and bubbly! Dual nationality charm~</p>
        </div>
      </section>

      {/* Section: Herin */}
      <section className={`${styles.section} ${styles.green}`}>
        <div className={styles.member}>
          <Image src="/members/danielle.png" alt="Danielle" width={200} height={200} />
          <h2>Hearin</h2>
          <p>다니엘 - Bright and bubbly! Dual nationality charm~</p>
        </div>
      </section>
    </div>
  );
}
