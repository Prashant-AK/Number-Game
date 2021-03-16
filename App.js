import React,{useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Header from './components/Header'
import GameOver from './screens/GameOver';
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';
import Color from './components/Colors'

const App= () => {

  const [userNumber, setuserNumber] = useState()
  const [gameRounds, setgameRounds] = useState(0)
  
  const newGameHandler = ()=>{
    setuserNumber(null);
    setgameRounds(0);
  }
  const onGameStart = selectedno=>{
    setuserNumber(selectedno);
    setgameRounds(0);
  }
  const GameOverhandler= noOfRound=>{
    setgameRounds(noOfRound);
  }
  let content= <StartGameScreen gameStart = {onGameStart} />;
  
  if(userNumber && gameRounds <=0 ){
    content= <GameScreen  onGameOver={GameOverhandler} userChoice={userNumber} />
  }
  else if(gameRounds > 0)
  {
    content=<GameOver newGame={newGameHandler} chosenNo={userNumber} countGameRound={gameRounds}  />
  }

  // content=<GameOver/>

return <View style={styles.Screen}>
    <Header title="Guess a Number"/>
    {content}
  </View>;
};

const styles = StyleSheet.create({
  Screen: {
    flex: 1,
    backgroundColor:Color.red_lighten_5,
  },
});

export default App;

