import { server } from "./server.js"

const form = document.querySelector("#form")
const input = document.querySelector("#url")
const content = document.querySelector("#content")

form.addEventListener("submit", async (event) => {
  event.preventDefault()
  content.classList.add("placeholder")

  const videoURL = input.value

  if (!videoURL.includes("shorts")) {
    return (content.textContent = "Esse vídeo não parece ser um short.")
  }

  const [_, params] = videoURL.split("/shorts/")
  const [videoID] = params.split("?si")

  content.textContent = "Obtendo o texto do áudio..."

  const axiosConfig = {
    timeout: 100000,
  }
  try {
    const transcription = await server.get("/summary/" + videoID, axiosConfig)

    content.textContent = "Realizando o resumo..."

    const summary = await server.post(
      "/summary",
      {
        text: transcription.data.result,
      },
      axiosConfig
    );

    content.textContent = summary.data.result
    content.classList.remove("placeholder")
  } catch (error) {
    console.error("ERRO NA SOLITAÇÃO: ", error)
  }
});
