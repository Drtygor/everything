import React, { FormEvent, useState, useCallback } from 'react';
import UrlForm from './UrlForm'; 
import ShortenedUrlList from './ShortenedUrlList';
import axios from 'axios';

export type Shortened = {
  original: string;
  short: string;
};



export function App() {
    const [urls, setUrls] = useState<Array<Shortened>>([]);
    const [inputUrl, setInputUrl] = useState<string>('');
    const onSubmit = useCallback(
      async (event: FormEvent) => {
        event.preventDefault();
  
        const response = await axios.post(`http://localhost:3333/api/shorten`, {
          original: inputUrl,
        });
  
        const newUrl = response.data as Shortened; // 🚨 This should set off alarm bells in your head! Why?
  
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
  
  export default App;
