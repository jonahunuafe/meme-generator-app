import { useEffect, useState } from 'react'

import styles from "./meme.module.css"


export const Meme = () => {
  const [memes, setMemes] = useState([]);
  const [memeIndex, setMemeIndex] = useState(0);
  const [captions, setCaptions] = useState([]);

  const updateCaption = (e, index) => {  //index of input, i index of what we are mapping
    const text = e.target.value || "";
    setCaptions(
      captions.map((c, i) => {
        if(index === i) {
          return text
        } else {
          return c;
        }
      })
    )
  };

  //function to shuffle memes
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
    if(memes.length) {
      setCaptions(Array(memes[memeIndex].box_count).fill(""));

    }
  }, [memeIndex, memes])

  return (
      memes.length ? 
      <div className={styles.container}>
        <button onClick={() => setMemeIndex(memeIndex + 1)} className={styles.skip}>Skip</button>
        {
          captions.map((c, index) => (
            <input onChange={(e) => updateCaption(e, index)} key={index}  />
          ))
        }
        <img src={memes[memeIndex].url} />
      </div> : <></>
  );
}
