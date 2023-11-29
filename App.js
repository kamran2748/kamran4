import React, { useState } from 'react';

function App() {
  const [result, setResult] = useState(0);

  const calculateFactorial = () => {
    let factorial = 1;
    for (let i = 1; i <= 5; i++) {
      factorial *= i;
    }
    setResult(factorial);
  };

  return (
    <div>
      <h1>محاسبه فاکتوریل</h1>
      <button onClick={calculateFactorial}>محاسبه</button>
      <h1>{result}</h1>
    </div>
  );
}

export default App;