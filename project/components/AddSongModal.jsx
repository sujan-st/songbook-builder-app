import { useState } from 'react'
import styles from '../styles/AddSongModal.module.css'

export default function AddSongModal({ onAdd, onClose }) {
  const [formData, setFormData] = useState({
    title: '',
    artist: '',
    lyrics: '',
    coverImage: ''
  })
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.title.trim()) {
      newErrors.title = 'Song title is required'
    }
    
    if (!formData.artist.trim()) {
      newErrors.artist = 'Artist name is required'
    }
    
    if (!formData.lyrics.trim()) {
      newErrors.lyrics = 'Lyrics are required'
    }
    
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validateForm()
    
    if (Object.keys(newErrors).length === 0) {
      onAdd(formData)
      setFormData({ title: '', artist: '', lyrics: '', coverImage: '' })
    } else {
      setErrors(newErrors)
    }
  }

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2>Add New Song</h2>
          <button className={styles.closeButton} onClick={onClose}>
            ×
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="title">Song Title *</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className={errors.title ? styles.error : ''}
              placeholder="Enter song title"
            />
            {errors.title && <span className={styles.errorText}>{errors.title}</span>}
          </div>
          
          <div className={styles.inputGroup}>
            <label htmlFor="artist">Artist *</label>
            <input
              type="text"
              id="artist"
              name="artist"
              value={formData.artist}
              onChange={handleChange}
              className={errors.artist ? styles.error : ''}
              placeholder="Enter artist name"
            />
            {errors.artist && <span className={styles.errorText}>{errors.artist}</span>}
          </div>
          
          <div className={styles.inputGroup}>
            <label htmlFor="coverImage">Cover Image URL (Optional)</label>
            <input
              type="url"
              id="coverImage"
              name="coverImage"
              value={formData.coverImage}
              onChange={handleChange}
              placeholder="https://example.com/image.jpg"
            />
          </div>
          
          <div className={styles.inputGroup}>
            <label htmlFor="lyrics">Lyrics *</label>
            <textarea
              id="lyrics"
              name="lyrics"
              value={formData.lyrics}
              onChange={handleChange}
              className={`${styles.textarea} ${errors.lyrics ? styles.error : ''}`}
              placeholder="Enter song lyrics..."
              rows={8}
            />
            {errors.lyrics && <span className={styles.errorText}>{errors.lyrics}</span>}
          </div>
          
          <div className={styles.actions}>
            <button type="button" className={styles.cancelButton} onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className={styles.addButton}>
              Add Song
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}