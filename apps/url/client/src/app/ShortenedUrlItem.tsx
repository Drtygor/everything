type ShortenedUrlItemProps = {
    url: Shortened;
  };
  
  const ShortenedUrlItem: React.FC<ShortenedUrlItemProps> = ({ url }) => (
    <li>
      {url.short} - {url.original}
    </li>
  );