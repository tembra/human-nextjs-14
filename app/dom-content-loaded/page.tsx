'use client'

import { useEffect } from 'react'

export default function DOMContentLoaded() {
    useEffect(() => {
        if (typeof document === 'undefined') {
            return
        }

        document.addEventListener('DOMContentLoaded', async () => {
            const { Human: HumanModule } = await import('@vladmandic/human')

            const human = new HumanModule()

            console.log('DOMContentLoaded', human)
        })
    }, [])

    return (
        <h1>DOM Content Loaded</h1>
    );
}
