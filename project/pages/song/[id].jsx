import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from '../../styles/SongDetail.module.css'

export default function SongDetail() {
  const router = useRouter()
  const { id } = router.query
  const [song, setSong] = useState(null)
  const [isEditing, setIsEditing] = useState(false)
  const [editedLyrics, setEditedLyrics] = useState('')

  useEffect(() => {
    if (id) {
      // In a real app, you'd fetch from API
      // For demo, we'll use sample data
      const sampleSongs = [
        {
          id: 1,
          title: "Bohemian Rhapsody",
          artist: "Queen",
          lyrics: "Is this the real life?\nIs this just fantasy?\nCaught in a landslide,\nNo escape from reality...\n\nOpen your eyes, look up to the skies and see,\nI'm just a poor boy, I need no sympathy,\nBecause I'm easy come, easy go, little high, little low,\nAny way the wind blows doesn't really matter to me, to me.",
          coverImage: "https://images.pexels.com/photos/167092/pexels-photo-167092.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
        },
        {
          id: 2,
          title: "Imagine",
          artist: "John Lennon",
          lyrics: "Imagine there's no heaven\nIt's easy if you try\nNo hell below us\nAbove us only sky\nImagine all the people living for today\n\nImagine there's no countries\nIt isn't hard to do\nNothing to kill or die for\nAnd no religion too\nImagine all the people living life in peace",
          coverImage: "https://images.pexels.com/photos/1021876/pexels-photo-1021876.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
        },
        {
          id: 3,
          title: "Hotel California",
          artist: "Eagles",
          lyrics: "On a dark desert highway, cool wind in my hair\nWarm smell of colitas, rising up through the air\nUp ahead in the distance, I saw a shimmering light\nMy head grew heavy and my sight grew dim\nI had to stop for the night\n\nThere she stood in the doorway\nI heard the mission bell\nAnd I was thinking to myself\n'This could be Heaven or this could be Hell'",
          coverImage: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
        }
      ]
      
      const foundSong = sampleSongs.find(s => s.id === parseInt(id))
      if (foundSong) {
        setSong(foundSong)
        setEditedLyrics(foundSong.lyrics)
      }
    }
  }, [id])

  const handleEdit = () => {
    setIsEditing(true)
  }

  const handleSave = () => {
    if (song) {
      setSong(prev => ({
        ...prev,
        lyrics: editedLyrics
      }))
      setIsEditing(false)
    }
  }

  const handleCancel = () => {
    setEditedLyrics(song.lyrics)
    setIsEditing(false)
  }

  const handleDelete = () => {
    if (confirm('Are you sure you want to delete this song?')) {
      router.push('/dashboard')
    }
  }

  if (!song) {
    return (
      <div className={styles.container}>
        <div className={styles.loading}>Loading song...</div>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link href="/dashboard" className={styles.backButton}>
          ← Back to Dashboard
        </Link>
        <div className={styles.actions}>
          {!isEditing ? (
            <>
              <button className={styles.editButton} onClick={handleEdit}>
                Edit Lyrics
              </button>
              <button className={styles.deleteButton} onClick={handleDelete}>
                Delete Song
              </button>
            </>
          ) : (
            <>
              <button className={styles.saveButton} onClick={handleSave}>
                Save Changes
              </button>
              <button className={styles.cancelButton} onClick={handleCancel}>
                Cancel
              </button>
            </>
          )}
        </div>
      </div>

      <div className={styles.songContent}>
        <div className={styles.songInfo}>
          <div className={styles.coverContainer}>
            <img 
              src={song.coverImage} 
              alt={`${song.title} cover`}
              className={styles.coverImage}
            />
          </div>
          <div className={styles.songMeta}>
            <h1 className={styles.title}>{song.title}</h1>
            <p className={styles.artist}>by {song.artist}</p>
          </div>
        </div>

        <div className={styles.lyricsSection}>
          <h2>Lyrics</h2>
          {isEditing ? (
            <textarea
              value={editedLyrics}
              onChange={(e) => setEditedLyrics(e.target.value)}
              className={styles.lyricsEditor}
              placeholder="Enter song lyrics..."
            />
          ) : (
            <div className={styles.lyricsDisplay}>
              {song.lyrics.split('\n').map((line, index) => (
                <p key={index} className={styles.lyricsLine}>
                  {line || '\u00A0'}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}