import React from 'react';
import styles from './bio.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function BioPage() {
  return (
    <div className={`${styles.page} ${styles.gradientBg}`}>
      {/* Navbar */}
      <nav className={styles.navbar}>
        <ul className={styles.navLinks}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/bio">Bio</Link></li>
          <li><Link href="/members">Members</Link></li>
        </ul>
      </nav>

      {/* Bio Content */}
      <div className={styles.centerContainer}>
        <div className={styles.textBox}>
          <h1 className={styles.bioTitle}>About NewJeans</h1>
          <p className={styles.bioIntro}>
          &quot;Hello, we are NewJeans! (안녕하세요, 뉴진스입니다!) &quot;
          </p>
        </div>
      </div>

      <div className={styles.imageWrapper}>
  <Image
    className={styles.image}
    src="/picnjz/eieione.jpg" 
    width={510}
    height={350}
    alt="image1"
    style={{ borderRadius: '10px' }}
  />
  <Image
    className={`${styles.image} ${styles.hoverImage}`}
    src="/picnjz/eieitwo.jpg" 
    width={510}
    height={350}
    alt="image1-hover"
    style={{ borderRadius: '10px' }}
  />
</div>


<div className={styles.infoContainer}>
  <section className={styles.infoBlock}>
    <h2>About the Group</h2>
    <p>
      นิวจีนส์ (เกาหลี: 뉴진스; อาร์อาร์: Nyujinseu; อังกฤษ: NewJeans) <br/>
      เป็นเกิร์ลกรุปเกาหลีใต้ ก่อตั้งโดยอาดอร์ ประกอบด้วยสมาชิกจำนวนห้าคนคือ<br/>
      มินจี, ฮันนี, แดเนียล, แฮริน และฮเยอิน เป็นที่รู้จักจากภาพลักษณ์ &prime;สาวข้างบ้าน&prime; <br/>
      และเพลงป็อปและอาร์แอนด์บีในช่วงปี 1990 และ 2000 <br/>
      ซึ่งได้รับอิทธิพลจากเพลงสไตล์แดนซ์และคลับที่หลากหลาย
    </p>
  </section>

  <section className={styles.infoBlock2}>
    <h2>Start with N</h2>
    <p>
    ชื่อกลุ่มของพวกเธอสื่อถึงแนวคิดที่ว่ายีนส์เป็นสินค้าแฟชั่นเหนือกาลเวลา <br/>
    สวมใส่ง่ายและเป็นที่นิยมในทุกยุคทุกสมัย เปรียบเสมือนกลุ่มที่ต้องการ <br/>
    สร้างภาพลักษณ์และผลงานที่คงความสดใหม่ ไม่ขึ้นอยู่กับกาลเวลา <br/>
    ไม่ว่าเวลาจะผ่านไปนานแค่ไหน ชื่อนี้ยังเป็นการเล่นคำกับวลี &quot;new genes&quot; <br/>
    จะสะท้อนถึงความเป็นศิลปินรุ่นใหม่ที่มีดีเอ็นเอทางดนตรีเฉพาะตัวแล้ว <br/>
    บทบาทของพวกเธอในฐานะผู้นำคลื่นลูกใหม่ของวงการดนตรีป๊อป<br/>
  
    </p>
  </section>
  <section className={styles.infoBlock}>
    <h2>Awards</h2>
    <p>
    วงเกิร์ลกรุ๊ปเกาหลีใต้ NewJeans ได้รับรางวัลสำคัญมากมายทั้งในประเทศ<br/>
    โดยกวาดรางวัลรวมกว่า 77 รางวัลจากการเสนอชื่อถึง 154 ครั้ง <br/>
    สะท้อนถึงกระแสตอบรับอย่างล้นหลามและความสำเร็จที่ไม่ธรรมดา <br/>
    ทั้งในแง่ของคุณภาพดนตรี ภาพลักษณ์อันโดดเด่น อิทธิพลที่พวกเธอ<br/>
    มีต่อวัฒนธรรมป๊อปร่วมสมัย ไม่เพียงแต่ครองใจแฟนเพลงในเกาหลีเท่านั้น <br/>
    แต่ยังขยายอิทธิพลไปทั่วโลกอย่างรวดเร็ว และมั่นคงเป็นอย่างมาก<br/>
    </p>
  </section>

</div>
    </div>
  );
}









