'use client'

import dynamic from 'next/dynamic'

export default function LazyLoaded() {
    const HumanLazyLoaded = dynamic(() => import('@/components/HumanLazyLoaded'), {
        ssr: false
    })

    return (
        <>
            <h1>Lazy Loaded</h1>
            <HumanLazyLoaded />
        </>
    );
}
