import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'

export default function Home() {
  const router = useRouter()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleGetStarted = () => {
    router.push('/signup')
  }

  const handleViewDashboard = () => {
    router.push('/dashboard')
  }

  return (
    <div className={styles.container}>
      <main className={`${styles.main} ${isVisible ? styles.visible : ''}`}>
        <div className={styles.hero}>
          <h1 className={styles.title}>
            Build Your Ultimate <span className={styles.accent}>Songbook</span>
          </h1>
          <p className={styles.description}>
            Create, organize, and manage your personal collection of songs with lyrics, 
            artist information, and cover images. Perfect for musicians, singers, and music lovers.
          </p>
          <div className={styles.features}>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>🎵</div>
              <h3>Organize Your Music</h3>
              <p>Keep all your favorite songs in one place with detailed information and lyrics</p>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>✏️</div>
              <h3>Edit & Customize</h3>
              <p>Modify lyrics, add personal notes, and customize your song collection</p>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>📱</div>
              <h3>Access Anywhere</h3>
              <p>Responsive design works perfectly on desktop, tablet, and mobile devices</p>
            </div>
          </div>
          <div className={styles.actions}>
            <button className={styles.primaryButton} onClick={handleGetStarted}>
              Get Started
            </button>
            <button className={styles.secondaryButton} onClick={handleViewDashboard}>
              View Dashboard
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}