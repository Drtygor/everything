import React, { FormEvent, useState, useCallback } from 'react';
import UrlForm from './UrlForm'; 
import ShortenedUrlList from './ShortenedUrlList';


export type Shortened = {
  original: string;
  short: string;
};



export function Appp() {
    const [urls, setUrls] = useState<Array<Shortened>>([]);
    const [inputUrl, setInputUrl] = useState<string>('');
    const onSubmit = useCallback(
      (event: FormEvent) => {
        event.preventDefault();
  
        const newUrl: Shortened = {
          original: inputUrl,
          short: 'short.com/123',
        };
  
        setUrls([newUrl, ...urls]);
        setInputUrl('');
      },
      [urls, setUrls, inputUrl, setInputUrl]
    );
    return (
      <div>
        <h1>My URL Shortener</h1>
        <UrlForm inputUrl={inputUrl} setInputUrl={setInputUrl} onSubmit={onSubmit} />
        <ShortenedUrlList urls={urls} />
      </div>
    );
  }
  
  export default Appp;
