'use client'

import type { Human } from '@vladmandic/human'
import { ElementRef, MouseEventHandler, useState } from 'react'

export default function LoadOnButtonClick() {
    const [human, setHuman] = useState<Human | null>(null)

    const handleClick: MouseEventHandler<ElementRef<'button'>> = async (e) => {
        const { Human: HumanModule } = await import('@vladmandic/human')

        const humanInstance = new HumanModule()

        setHuman(humanInstance)
    }

    console.log('Load on Button Click', human)

    return (
        <>
            <h1>Load on Button Click</h1>
            <button onClick={handleClick}>Load Human</button>
        </>
    );
}
