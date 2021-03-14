import React, { useState }  from 'react';

// components
import Header from './Header/Header';
import Gallery from './Gallery/Gallery';


function App() {
  const [query, setQuery] = useState<string>('cars');
  return (
    <>
      <Header setQuery={setQuery} />
      <Gallery query={query} />
    </>
  );
}

export default App;
