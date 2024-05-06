import { useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { useClipboard } from 'use-clipboard-copy';

import classes from "../MemeGenerated/styles.module.css"

export const MemeGenerated = () => {
   const [copied, setCopied] = useState(false);
   const navigate = useNavigate();
   const location = useLocation();
   const clipboard = useClipboard();

   const url = new URLSearchParams(location.search).get("url");

   const copyLink = () => {
      clipboard.copy(url);
      setCopied(true);
   };

  return (
      <div className={classes.memeGeneratedContainer}>
         <button onClick={() => navigate("/")} className={classes.home}>Make more memes</button>
         { url && <img src={url} alt="meme" /> }
         <button onClick={copyLink} className={classes.copy}>{ copied ? "Link copied!" : "Copy link"}</button>
      </div>
  );
}

