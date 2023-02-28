import React, { useCallback, useEffect, useRef, useState } from 'react'
import './App.scss';
import { AiOutlinePlayCircle } from 'react-icons/ai'


const songs: any[] = [
  new Audio('/songs/falling in love with you.mp3'),
  new Audio('/songs/i walk the line.mp3'),
  new Audio('/songs/killing me softly.mp3'),
  new Audio('/songs/my sunshine.mp3'),
  new Audio('/songs/the only exception.mp3'),
]

function App() {
  const [fadeClassList, setFadeClassList] = useState('play fade')
  const [rotate, setRotate] = useState(0)
  const [color, setColor] = useState(173)
  const [songIndex, setSongIndex] = useState(-1)

  const playClicked = () => {

    let newSongIndex = Math.floor(Math.random() * songs.length)

    while (newSongIndex === songIndex) {
      newSongIndex = Math.floor(Math.random() * songs.length)
    }

    songs.forEach((s, i) => {
      if (i !== newSongIndex) {
        if (!s) {
          return
        }
        s.pause()
        s.currentTime = 0
      }
    })

    setFadeClassList('play fade fade-start')
    setColor(Math.floor(Math.random() * 36000) / 100)
    setSongIndex(newSongIndex)

    songs[newSongIndex]?.play?.()

    setTimeout(() => {
      setFadeClassList('play fade fade-start fading')
      setRotate(rotate + 1)
    }, 200)
    setTimeout(() => {
      setFadeClassList('play fade')
    }, 700)
  }

  return (
    <div className="App" style={{ color: `hsl(${color}, 50%, 70%)` }}>
      <div className="rotate" style={{
        transform: `rotate(${rotate * 360}deg)`
      }}>
        <AiOutlinePlayCircle className='play' onClick={playClicked} />
        <AiOutlinePlayCircle className={fadeClassList} />
      </div>
    </div>
  );
}

export default App;
