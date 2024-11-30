import ImageCarousel from "../../components/ImageCarousel"

export default function TranscriptionApp() {
  const images = [
    "/TranscriptionApp/TranscriptionApp_1.png",
    "/TranscriptionApp/TranscriptionApp_2.png",
    "/TranscriptionApp/TranscriptionApp_3.png",
    "/TranscriptionApp/TranscriptionApp_4.png",
    "/TranscriptionApp/TranscriptionApp_5.png",
  ]

  return (
    <div>
      <h1 className="text-4xl font-bold py-6 text-blue-500">Audio Transcription and Translation</h1>
      <p className="text-2xl pb-6">Upload or record audio and transcription or translation.</p>
      <p className="text-2xl pb-6">Currently only frontend is complete transcription and translation will be added soon.</p>
      <ImageCarousel images={images} />
    </div>
  )
}
