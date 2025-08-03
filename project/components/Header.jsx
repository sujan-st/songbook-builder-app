import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from '../styles/Header.module.css'

export default function Header() {
  const router = useRouter()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path) => {
    return router.pathname === path
  }

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoIcon}>🎵</span>
          Songbook Builder
        </Link>
        
        <nav className={styles.nav}>
          <Link 
            href="/" 
            className={`${styles.navLink} ${isActive('/') ? styles.active : ''}`}
          >
            Home
          </Link>
          <Link 
            href="/dashboard" 
            className={`${styles.navLink} ${isActive('/dashboard') ? styles.active : ''}`}
          >
            Dashboard
          </Link>
          <Link 
            href="/login" 
            className={`${styles.navLink} ${isActive('/login') ? styles.active : ''}`}
          >
            Login
          </Link>
          <Link 
            href="/signup" 
            className={`${styles.authButton} ${isActive('/signup') ? styles.active : ''}`}
          >
            Sign Up
          </Link>
        </nav>
      </div>
    </header>
  )
}