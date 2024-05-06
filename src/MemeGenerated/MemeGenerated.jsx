import { useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { useClipboard } from 'use-clipboard-copy';

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
      <div style={{textAlign: "center"}}>
         <button onClick={() => navigate("/")}>Make more memes</button>
         { url && <img src={url} alt="meme" /> }
         <button onClick={copyLink}>{ copied ? "Link copied!" : "Copy link"}</button>
      </div>
  );
}

