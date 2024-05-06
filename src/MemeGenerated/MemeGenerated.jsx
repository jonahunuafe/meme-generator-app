import React from 'react';
import { useLocation } from 'react-router-dom';

export const MemeGenerated = () => {
   const location = useLocation();
   const url = new URLSearchParams(location.search).get("url");

  return (
      <div style={{textAlign: "center"}}>
         { url && <img src={url} /> }
      </div>
  )
}

