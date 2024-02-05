/*
import axios from "axios";
import express from "express";

const app = express();
const PORT = 3333;

//Rota para obter vídeo 
app.get("/video-title/:videoID", async(req, res)=> {
  const {videoID} = req.params;

  try{
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/videos?id=${videoID}&part=snippet&key=AIzaSyCq9ZpeN2sRYhZBRiKCUUz82PoES0OeS-4`
    );
    const videoTitle = response.data.items[0]?.snippet?.title || "Titulo não encontrado";
    
    res.json({result: videoTitle});
  }catch (error) {
    console.error("Error ao obter o titulo do video: ", error);
    res.status(500).json({error: "erro ao obter título do vídeo"});
  }
});

app.listen(PORT, () =>{
  console.log(`Servidor rodando na porta ${PORT}`);
});
*/