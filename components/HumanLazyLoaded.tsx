'use client'

import type { Human } from '@vladmandic/human'
import { useEffect, useState } from 'react'

export default function HumanLazyLoaded() {
    const [human, setHuman] = useState<Human | null>(null)

    useEffect(() => {
        if (typeof window === 'undefined') {
            return
        }

        async function load() {
            const { Human: HumanModule } = await import('@vladmandic/human')

            const humanInstance = new HumanModule()

            setHuman(humanInstance)
        }

        load()
    }, [])

    if (!human) {
        return null
    }

    console.log('Human Lazy Loaded Component', human)

    return (
        <h2>Human Lazy Loaded</h2>
    )
}
