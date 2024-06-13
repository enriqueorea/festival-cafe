const YouTubeShort = ({ videoSrc }: { videoSrc: string }) => {
  return (
    <div className="relative pb-[56.25%] h-0 overflow-hidden max-w-full">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={videoSrc}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeShort;
