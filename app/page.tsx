'use client'

import { Human } from '@vladmandic/human'

export default function Home() {
  const human = new Human()

  console.log('Home', human)

  return (
    <h1>Home</h1>
  )
}
