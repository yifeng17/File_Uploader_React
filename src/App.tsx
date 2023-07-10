import React from 'react';
import logo from './logo.svg';
import './App.css';
import FileUploader from './components/FileUploader';


const App: React.FC = () => {
  return (
    <div className="App">
      <FileUploader />
    </div>
  );
}

export default App;