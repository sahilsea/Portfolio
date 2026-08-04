'use client'

import { useState, useRef, useEffect } from 'react'
import { Play, Pause, SkipBack, SkipForward } from 'lucide-react'

const SONGS = [
  '/song1.m4a',
  '/song2.m4a'
]

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentSongIndex, setCurrentSongIndex] = useState(0)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(e => console.log('Audio play failed:', e))
      } else {
        audioRef.current.pause()
      }
    }
  }, [isPlaying, currentSongIndex])

  const togglePlay = () => setIsPlaying(!isPlaying)

  const nextSong = () => {
    setCurrentSongIndex((prev) => (prev + 1) % SONGS.length)
    setIsPlaying(true)
  }

  const prevSong = () => {
    setCurrentSongIndex((prev) => (prev - 1 + SONGS.length) % SONGS.length)
    setIsPlaying(true)
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center gap-3 rounded-full bg-black/40 px-4 py-2 backdrop-blur-md border border-white/10">
      <audio 
        ref={audioRef} 
        src={SONGS[currentSongIndex]} 
        onEnded={nextSong}
        loop={false}
      />
      <button onClick={prevSong} className="text-white/70 hover:text-white transition-colors" aria-label="Previous song">
        <SkipBack size={20} />
      </button>
      <button onClick={togglePlay} className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black hover:scale-105 transition-transform" aria-label={isPlaying ? "Pause" : "Play"}>
        {isPlaying ? <Pause size={20} className="fill-black" /> : <Play size={20} className="fill-black ml-1" />}
      </button>
      <button onClick={nextSong} className="text-white/70 hover:text-white transition-colors" aria-label="Next song">
        <SkipForward size={20} />
      </button>
    </div>
  )
}
