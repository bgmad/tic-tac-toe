import React from 'react';
import Game from './components/Game';
import styled from 'styled-components';

const GameContainer = styled.div`
  display: flex;
  justify-content: center;
`;

function App() {
  return (
    <GameContainer>
      <Game dimensions='8-8'/>
    </GameContainer>
  );
}

export default App;
