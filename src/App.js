import React from 'react';

import CharacterEditor from './components/CharacterEditor';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div style={{backgroundColor: 'hsl(195deg, 20%, 86%)', width: "100%", position: "fixed", "bottom": 0, "top": "40%", isolation: "isolate"}}></div>
      <CharacterEditor />
      <Footer />
    </>
  );
}

export default App;
