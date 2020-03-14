import * as React from 'react';
import Hero from './Hero';
import CountryPicker from './CountryPicker';
import Stats from './Stats';

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT as string;

const App = () => {
  return (
    <>
      <main className="container">
        <Hero />
        <Stats title="Global Case" url={API_ENDPOINT} />
        <CountryPicker />
      </main>
    </>
  );
};

export default App;
