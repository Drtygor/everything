type UrlFormProps = {
    inputUrl: string;
    onSubmit: (event: FormEvent) => void;
    setInputUrl: (url: string) => void;
  };
  
  const UrlForm: React.FC<UrlFormProps> = ({ inputUrl, onSubmit, setInputUrl }) => (
    <form onSubmit={onSubmit}>
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
  );