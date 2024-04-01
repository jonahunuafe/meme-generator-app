import React, { useEffect } from 'react'

export const Meme = () => {
    const fetchMeme = async () => {
        const res = await fetch("https://api.imgflip.com/get_memes");
        const data = await res.json();
        console.log(data);
    }

    useEffect(() => {
        fetchMeme();
    }, []);

    return (
        <div>Meme</div>
    )
}
