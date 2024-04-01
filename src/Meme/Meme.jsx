import React, { useEffect, useState } from 'react'
import styles from "./meme.module.css"

export const Meme = () => {
    const [memes, setMemes] = useState([]);

    const fetchMeme = async () => {
        const res = await fetch("https://api.imgflip.com/get_memes");
        const memesData = await res.json();
        setMemes(memesData.data.memes);
    }

    useEffect(() => {
        fetchMeme();
    }, []);

    return (
      memes.length ? 
      <div className={styles.container}>
        <button className={styles.skip}>Skip</button>
        <img src={memes[0].url} />
      </div> : 
      <></>  
    );
}
