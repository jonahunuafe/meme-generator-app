import { useLocation, useNavigate } from 'react-router-dom';

export const MemeGenerated = () => {
   const navigate = useNavigate();
   const location = useLocation();
   const url = new URLSearchParams(location.search).get("url");

  return (
      <div style={{textAlign: "center"}}>
         <button onClick={() => navigate("/")}>Make more memes</button>
         { url && <img src={url} /> }
      </div>
  )
}

