import React from 'react';

function Food({ fav }) {
  return (
    <h1>I like {fav}</h1>
  )
}

function App() {
  return (
    <div className="App">
      <h1>test</h1>
      <Food fav="kimchi" />
      <Food fav="raman" />
      <Food fav="sam" />
      <Food fav="bool" />
    </div>
  );
}

export default App;
