import React, { useState } from 'react';
import './App.css';

function App() {
  const [showDetails, setShowDetails] = useState(false);

  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="container">
      <div className="card">
        <div className="icon">
          <img src="https://img.icons8.com/ios-filled/50/000000/visible.png" alt="Eye Icon"/>
        </div>
        <h2>Name: Javith Farkhan</h2><br/>
        <h2>Registration No: 212221240017</h2><br/>
        <button onClick={handleToggleDetails}>
          {showDetails ? 'Hide Details' : 'Show Details'}
        </button><br/>
        {showDetails && (
          <div className="details"><br/>
            <p>Age: 20</p><br/>
            <p>Department: Artificial intelligence and machine learning</p><br/>
            <p>Address: 13/B,poonamalle,chennai</p><br/>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
export {useState}