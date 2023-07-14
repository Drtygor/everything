import React from 'react';
import { Shortened } from './Appp'; 
import ShortenedUrlItem from './ShortenedUrlItem';


export type ShortenedUrlListProps = {
    urls: Array<Shortened>;
  };
  
  const ShortenedUrlList: React.FC<ShortenedUrlListProps> = ({ urls }) => (
    <ul>
      {urls.map((url, index) => (
        <ShortenedUrlItem key={index} url={url} />
      ))}
    </ul>
  );
  

  export default ShortenedUrlList;