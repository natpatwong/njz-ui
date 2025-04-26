"use client";

// components/Login.js
import { useState } from 'react';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase.js';
import Link from 'next/link';
import styles from './login.module.css';

const Login = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      // ล็อกอินด้วยอีเมลและรหัสผ่าน
      await signInWithEmailAndPassword(auth, username, password);
      // แจ้งให้คอมโพเนนต์แม่ทราบว่าล็อกอินสำเร็จ
      if (onLoginSuccess) onLoginSuccess();
    } catch (error) {
      console.error('Login error:', error);
      setError('เกิดข้อผิดพลาดในการเข้าสู่ระบบ: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setError(null);
    setLoading(true);

    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      // แจ้งให้คอมโพเนนต์แม่ทราบว่าล็อกอินสำเร็จ
      if (onLoginSuccess) onLoginSuccess();
    } catch (error) {
      console.error('Google login error:', error);
      setError('เกิดข้อผิดพลาดในการเข้าสู่ระบบด้วย Google: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <h2>Sign In</h2>
      {error && <div className={styles.error}>{error}</div>}
      
      <form onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
          />
        </div>
        
        <div className={styles.inputGroup}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
        </div>
        
        <div className={styles.actions}>
          <button 
            type="submit" 
            className={styles.signInButton}
            disabled={loading}
          >
            {loading ? 'กำลังเข้าสู่ระบบ...' : 'Sign In'}
          </button>
        </div>
      </form>
      
      <div className={styles.separator}>หรือ</div>
      
      <div className={styles.googleLogin}>
        <button 
          onClick={handleGoogleLogin} 
          className={styles.googleButton}
          disabled={loading}
        >
          <img src="https://www.svgrepo.com/show/303108/google-icon-logo.svg" alt="Google" />
          เข้าสู่ระบบด้วย Google
        </button>
      </div>
      
      <div className={styles.links}>
        <Link href="/register">
          Create an Account?
        </Link>
        <Link href="/forgot-password">
          Forgot your Password?
        </Link>
      </div>
    </div>
  );
};

export default Login;