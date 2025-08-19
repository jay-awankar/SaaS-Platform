'use client'

import Player from 'lottie-react'
import React from 'react'
import liveChatbot from '../public/loader/liveChatbot.json'

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Player
        autoplay
        loop
        animationData={liveChatbot}
        style={{ width: 150, height: 150 }}
      />
    </div>
  )
}

export default Loading
