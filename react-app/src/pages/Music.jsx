export default function Music() {
    return (
        <section className="section">
            <div className="section-header">
                <h2>Music</h2>
            </div>
            <div className="music-grid">
                <div className="spotify-embed">
                    <iframe
                        src="https://open.spotify.com/embed/album/1rNw6ubP36ftLxTYykTXTT?utm_source=generator"
                        width="100%" frameBorder="0" allowFullScreen
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"
                        title="Album 1"
                    />
                </div>
                <div className="spotify-embed">
                    <iframe
                        src="https://open.spotify.com/embed/album/50imBOLb2ZvTpmkozIbs3Q?utm_source=generator"
                        width="100%" frameBorder="0" allowFullScreen
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"
                        title="Album 2"
                    />
                </div>
            </div>
        </section>
    )
}
