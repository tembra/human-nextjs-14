'use client'

import dynamic from 'next/dynamic'

export default function NoSSR() {
    const Human = dynamic(() => import('@/components/Human'), {
        ssr: false
    })

    return (
        <>
            <h1>No SSR</h1>
            <Human />
        </>
    )
}
