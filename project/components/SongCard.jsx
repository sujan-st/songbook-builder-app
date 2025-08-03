import { useState } from 'react'
import styles from '../styles/SongCard.module.css'

export default function SongCard({ song, onSongClick, onDelete }) {
  const [imageError, setImageError] = useState(false)

  const handleImageError = () => {
    setImageError(true)
  }

  const handleDelete = (e) => {
    e.stopPropagation()
    if (confirm(`Are you sure you want to delete "${song.title}"?`)) {
      onDelete(song.id)
    }
  }

  const truncateLyrics = (lyrics, maxLength = 100) => {
    if (lyrics.length <= maxLength) return lyrics
    return lyrics.substring(0, maxLength) + '...'
  }

  return (
    <div 
      className={styles.card}
      onClick={() => onSongClick(song.id)}
    >
      <div className={styles.coverContainer}>
        {!imageError ? (
          <img
            src={song.coverImage}
            alt={`${song.title} cover`}
            className={styles.coverImage}
            onError={handleImageError}
          />
        ) : (
          <div className={styles.placeholderCover}>
            <span className={styles.musicNote}>🎵</span>
          </div>
        )}
        <button 
          className={styles.deleteButton}
          onClick={handleDelete}
          title="Delete song"
        >
          ×
        </button>
      </div>
      
      <div className={styles.content}>
        <h3 className={styles.title}>{song.title}</h3>
        <p className={styles.artist}>{song.artist}</p>
        <p className={styles.lyrics}>
          {truncateLyrics(song.lyrics)}
        </p>
      </div>
      
      <div className={styles.overlay}>
        <span className={styles.viewText}>Click to view</span>
      </div>
    </div>
  )
}