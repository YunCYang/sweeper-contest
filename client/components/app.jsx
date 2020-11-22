import React from 'react';
import Header from './header';
import Game from './game';
import Chat from './chat';
import Footer from './footer';

const App = () => {
  return (
    <div className="main">
      <Header />
      <Game />
      <Chat />
      <Footer />
    </div>
  );
};

export default App;
