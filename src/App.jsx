import React, { useState } from 'react';
import { registerSW } from 'virtual:pwa-register';

import ReloadPrompt from './components/ReloadPrompt';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  // const updateSW = registerSW({
  //   onRegistered(r) {
  //     r &&
  //       setInterval(() => {
  //         r.update()
  //           .then(() => {
  //             console.log('buscando');
  //           })
  //           .catch((err) => {
  //             // console.log('error::::::' + err);
  //             console.log('sin conexion');
  //           });
  //       }, 2000);
  //   },
  //   onOfflineReady() {
  //     setInterval(() => {
  //       r.update()
  //         .then(() => {
  //           location.reload();
  //           console.log('nuevo service');
  //         })
  //         .catch((err) => {
  //           // console.log('error::::::' + err);
  //           console.log('sin conexion');
  //         });
  //     }, 2000);
  //   },
  // });

  return (
    <>
      <ReloadPrompt />
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>Hello Herrera Vite + React!</p>
          <p>
            <button
              type='button'
              onClick={() => setCount((count) => count + 1)}>
              count is: {count}
            </button>
          </p>
          <p>
            Edit <code>App.jsx</code> and save to test HMR updates.
          </p>
          <p>
            <a
              className='App-link'
              href='https://reactjs.org'
              target='_blank'
              rel='noopener noreferrer'>
              Learn React
            </a>
            {' | '}
            <a
              className='App-link'
              href='https://vitejs.dev/guide/features.html'
              target='_blank'
              rel='noopener noreferrer'>
              Vite Docs
            </a>
          </p>
        </header>
      </div>
    </>
  );
}

export default App;
