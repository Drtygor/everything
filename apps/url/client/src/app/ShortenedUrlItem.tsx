import React from 'react';
import { Shortened } from './Appp';


type ShortenedUrlItemProps = {
    url: Shortened;
  };
  
  const ShortenedUrlItem: React.FC<ShortenedUrlItemProps> = ({ url }) => (
    <li>
      {url.short} - {url.original}
    </li>
  );

export default ShortenedUrlItem;