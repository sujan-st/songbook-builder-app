import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import SongCard from '../components/SongCard'
import AddSongModal from '../components/AddSongModal'
import styles from '../styles/Dashboard.module.css'

export default function Dashboard() {
  const router = useRouter()
  const [songs, setSongs] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    // Load sample songs on component mount
    const sampleSongs = [
      {
        id: 1,
        title: "Bohemian Rhapsody",
        artist: "Queen",
        lyrics: "Is this the real life?\nIs this just fantasy?\nCaught in a landslide,\nNo escape from reality...",
        coverImage: "https://images.pexels.com/photos/167092/pexels-photo-167092.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
      },
      {
        id: 2,
        title: "Imagine",
        artist: "John Lennon",
        lyrics: "Imagine there's no heaven\nIt's easy if you try\nNo hell below us\nAbove us only sky...",
        coverImage: "https://images.pexels.com/photos/1021876/pexels-photo-1021876.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
      },
      {
        id: 3,
        title: "Hotel California",
        artist: "Eagles",
        lyrics: "On a dark desert highway, cool wind in my hair\nWarm smell of colitas, rising up through the air...",
        coverImage: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
      }
    ]
    setSongs(sampleSongs)
  }, [])

  const handleAddSong = (newSong) => {
    const song = {
      ...newSong,
      id: Date.now(),
      coverImage: newSong.coverImage || "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    }
    setSongs(prev => [song, ...prev])
    setIsModalOpen(false)
  }

  const handleDeleteSong = (songId) => {
    setSongs(prev => prev.filter(song => song.id !== songId))
  }

  const handleSongClick = (songId) => {
    router.push(`/song/${songId}`)
  }

  const filteredSongs = songs.filter(song =>
    song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    song.artist.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <h1>My Songbook</h1>
          <p>Manage your personal collection of songs</p>
        </div>
        <button 
          className={styles.addButton}
          onClick={() => setIsModalOpen(true)}
        >
          + Add Song
        </button>
      </div>

      <div className={styles.controls}>
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search songs or artists..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
          />
        </div>
        <div className={styles.stats}>
          <span>{filteredSongs.length} songs in your collection</span>
        </div>
      </div>

      {filteredSongs.length === 0 ? (
        <div className={styles.emptyState}>
          <div className={styles.emptyIcon}>🎵</div>
          <h3>No songs found</h3>
          <p>
            {searchTerm 
              ? "Try adjusting your search terms" 
              : "Start building your songbook by adding your first song"
            }
          </p>
          {!searchTerm && (
            <button 
              className={styles.emptyButton}
              onClick={() => setIsModalOpen(true)}
            >
              Add Your First Song
            </button>
          )}
        </div>
      ) : (
        <div className={styles.songsGrid}>
          {filteredSongs.map(song => (
            <SongCard
              key={song.id}
              song={song}
              onSongClick={handleSongClick}
              onDelete={handleDeleteSong}
            />
          ))}
        </div>
      )}

      {isModalOpen && (
        <AddSongModal
          onAdd={handleAddSong}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  )
}