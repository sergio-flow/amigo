"use client"

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { storageUrl } from "../_utils/constants";

const BitRouter = ({ slug, edition, card, prev, next, year, isLast }) => {
    const router = useRouter();

    useEffect(() => {
        if (!isLast) cacheFile(`${storageUrl}/${year}/${edition}/${slug}/${parseInt(card) + 1}.jpg`)
    }, [])

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'ArrowLeft' && prev) {
                router.push(prev);
            } else if (event.key === 'ArrowRight' && next) {
                router.push(next);
            } else if (event.key === ' ') {
                event.preventDefault()
                return
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [router]);

    return null
}

const cacheFile = async (url) => {
    if ('caches' in window) {
        const cacheName = 'amigocache';
        const cache = await caches.open(cacheName);

        try {
            const response = await fetch(url);
            if (response.ok) {
                await cache.put(url, response.clone());
                // console.log('MP3 file cached successfully.');
            } else {
                console.error('Failed to fetch the MP3 file.');
            }
        } catch (error) {
            console.error('Error fetching and caching the MP3 file:', error);
        }
    } else {
        console.error('Cache API is not supported in this browser.');
    }
};

export default BitRouter