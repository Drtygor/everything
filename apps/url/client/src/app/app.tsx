import { FormEvent, useCallback, useState } from 'react';

type Shortened = {
  original: string;
  short: string;
};

function UrlForm({onSubmit}: {onSubmit: (url: string) => void}) {
  const [inputUrl, setInputUrl] = useState<string>('');

  const handleSubmit = useCallback(
    (event: FormEvent) => {
      event.preventDefault();
      onSubmit(inputUrl);
      setInputUrl('');
    },
    [inputUrl, onSubmit]
  );

  return (
    <form onSubmit={handleSubmit}>
      <label>URL</label>
      <input
        value={inputUrl}
        onChange={(e) => {
          setInputUrl(e.target.value);
        }}
        placeholder="www.my-super-long-url-here.com/12345"
      />
      <button type="submit">Generate</button>
    </form>
  )
}


function UrlList({urls}: {urls: Array<Shortened>}) {
  return (
    <ul>
      {urls.map((u) => (
        <li>
          {u.short} - {u.original}
        </li>
      ))}
    </ul>
  )
}



export function App() {
  const [urls, setUrls] = useState<Array<Shortened>>([]);

  const handleSubmit = useCallback(
    (url: string) => {
      const newUrl: Shortened = {
        original: url,
        short: 'short.com/123', // Here, you would likely want to replace this with a call to your URL shortening function.
      };

      setUrls([newUrl, ...urls]);
    },
    [urls, setUrls]
  );

  return (
    <div>
      <h1>My URL Shortener</h1>
      <UrlForm onSubmit={handleSubmit} />
      <UrlList urls={urls} />
    </div>
  );
}

export default App;