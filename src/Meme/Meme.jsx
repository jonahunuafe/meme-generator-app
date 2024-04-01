import React, { useEffect, useState } from 'react'

export const Meme = () => {
    const [memes, setMemes] = useState();

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
