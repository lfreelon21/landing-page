import './Videos.css';

export default function Videos() {
  const videoLinks = ['YWNmyRhgHOM', 'utvnM4p5iwI', '_u7vlVpfvSg']
  return (
    <div className="videos">
      <h1>Videos</h1>
      <div className="video-container">
        {videoLinks.map((videoId, index) => (
          <iframe
            key={index}
            src={`https://www.youtube-nocookie.com/embed/${videoId}`}
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          ))
        }
      </div>
    </div>
  )
}