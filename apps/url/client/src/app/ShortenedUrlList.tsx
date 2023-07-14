type ShortenedUrlListProps = {
    urls: Array<Shortened>;
  };
  
  const ShortenedUrlList: React.FC<ShortenedUrlListProps> = ({ urls }) => (
    <ul>
      {urls.map((url, index) => (
        <ShortenedUrlItem key={index} url={url} />
      ))}
    </ul>
  );
  