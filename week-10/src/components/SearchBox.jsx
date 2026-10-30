import { useState, useEffect, useRef } from 'react';

function SearchBox() {
  const inputRef = useRef(null);
  const [query, setQuery] = useState('');
  const renderCount = useRef(0);

  renderCount.current += 1;

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <h2>Search Box</h2>
      <input
        ref={inputRef}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <p>Search value: {query}</p>
      <p>Render count: {renderCount.current}</p>
    </div>
  );
}

export default SearchBox;
