import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';

import styles from "./meme.module.css"

export const Meme = () => {
    const [memes, setMemes] = useState([]);
    const [memeIndex, setMemeIndex] = useState(0);
    const [captions, setCaptions] = useState([]);

    const history = useHistory();

    const updateCaption = (e, index) => {
        const text = e.target.value || "";
        setCaptions(
            captions.map((c, i) => {
                if(index === i) {
                    return text;
                } else {
                    return c;
                }
            })
        );
    }

    const generateMeme = () => {
        const currentMeme = memes[memeIndex];
        const formData = new FormData();

        formData.append("username", "");
        formData.append("password", "");
        formData.append("template_id", currentMeme.id);
        captions.forEach((caption, index) => formData(`boxes[${index}][text]`, caption));

        fetch('https://api.imgflip.com/caption_image', {
            method: 'POST',
            body: formData
            }).then(res => {
            res.json().then(res => {
            history.push(`/generated?url=${res.data.url}`);
            });
        });
    }

    const shuffleMemes = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * i);
          const temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
    };

    useEffect(() => {
        const fetchMeme = async () => {
            const res = await fetch("https://api.imgflip.com/get_memes");
            const memesData = await res.json();
            shuffleMemes(memesData.data.memes);
            setMemes(memesData.data.memes);
        }

        fetchMeme();
    }, []);

    useEffect(() => {
        if (memes.length) {
            // An array of empty strings
            setCaptions(Array(memes[memeIndex].box_count).fill(""));
        }
    }, [memeIndex, memes]);

    return (
      memes.length ? 
      <div className={styles.container}>
        <button onClick={generateMeme} className={styles.generate}>Generate</button>
        <button onClick={() => setMemeIndex(memeIndex + 1)} className={styles.skip}>Skip</button>
        {
            captions.map((caption, index) => (
                <input onChange={(e) => updateCaption(e, index)} key={index} />
            ))
        }
        <img src={memes[memeIndex].url} />
      </div> : 
      <></>  
    );
}
