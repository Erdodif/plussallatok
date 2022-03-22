import './App.scss';
import React from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Plüssállatok</h1>
      </header>
      <AnimalList />
    </div>
  );
}

class AnimalList extends React.Component {
  render() {
    return (
      <div>
        Plüssök
      </div>
    );
  }
}

export default App;
