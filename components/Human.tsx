'use client'

import { Human as HumanModule } from '@vladmandic/human'

export default function Human() {
    const human = new HumanModule()

    console.log('Human Component', human)

    return (
        <h2>Human</h2>
    )
}
