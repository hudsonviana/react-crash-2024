import React from 'react';

const App = () => {
  const name = 'Hudson';
  const names = ['Maria', 'Haroldo', 'Eliane', 'Isadora'];
  const x = 16;
  const y = 29;

  const loggedIn = true;

  return (
    <>
      <div className="text-5xl">Hello world!</div>
      <p style={{ color: 'red', fontSize: '24px' }}>{name}</p>
      <p>
        A soma de {x} e {y} é {x + y}
      </p>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>

      {loggedIn && <h1>Hello, Member!</h1>}
    </>
  );
};

export default App;
