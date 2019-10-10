import React from 'react';
import logo from './logo.svg';
import './styles.scss'
import NavigationBar from './components/NavigationBar';
import MainTitle from './components/MainTitle';
import MainAddButton from './components/MainAddButton';
import Piece from './components/Piece';

function App() {
  return (
    <div>
      <NavigationBar />
      <MainTitle title={"Artmix"}></MainTitle>
      <MainAddButton></MainAddButton>
      <Piece></Piece>
    </div>

  );
}

export default App;
