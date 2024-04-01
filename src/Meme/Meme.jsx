import React from 'react'

export const Meme = () => {
    const fetchMeme = async () => {
        const res = await fetch("https://api.imgflip.com/get_memes");
        const data = await res.json();
        console.log(data);
    }

    return (
        <div>Meme</div>
    )
}
