import React, {useState, useRef, useEffect} from 'react';
import {Text, View, StyleSheet, Button, Alert, ScrollView, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons';
import Card from '../components/Card';
import Numbercontainer from '../components/Numbercontainer';

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.ceil(max);
  const rndno = Math.floor(Math.random() * (max - min)) + min;
  if (rndno === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndno;
  }
};

// const renderListItem = (value,noofRound)=>(
//   <View style={styles.listItem} key={value}>
//     <Text >#{noofRound} </Text>
//     <Text>  {value} </Text>
//   </View>
// );
const renderListItem = (listLength,itemData)=>(
  <View style={styles.listItem} >
    <Text >#{listLength - itemData.index} </Text>
    <Text>  {itemData.item} </Text>
  </View>
);

const GameScreen = (props) => {
    const {userChoice, onGameOver}=props;
    
    let initialGuess= generateRandomBetween(1, 100, userChoice);
    const [currentGuess, setcurrentGuess] = useState(initialGuess);
    const [gameRound, setgameRound] = useState([initialGuess.toString()]);

  const currentlow = useRef(1);
  const currenthigh = useRef(100);

  useEffect(() => {
    if (currentGuess === userChoice) {
        onGameOver(gameRound.length); 
    }
  },[currentGuess,userChoice,onGameOver]);

  //   console.log("userChoice",props.userChoice);
  // console.log("current Guess",currentGuess)

  const nextGuessHandler = (direction) => {
    // console.log(direction)
    if (
      (direction === 'lower' && currentGuess < props.userChoice) ||
      (direction === 'greater' && currentGuess > props.userChoice)
    ) {
      Alert.alert('You are Wrong', ' Continue guessing in another direction ', [
        {
          text: 'OOPS',
          style: 'cancel',
        },
      ]);
      return;
    }
    if (direction === 'lower') {
      currenthigh.current = currentGuess;
    } else {
      currentlow.current = currentGuess +1 ;
    }
    // console.log("currentHigh ",currenthigh.current)
    // console.log( "currentLow",currentlow);
    const nextNumber = generateRandomBetween(
      currentlow.current,
      currenthigh.current,
      currentGuess,
    );
    // console.log("next Number",nextNumber)
    setcurrentGuess(nextNumber);
    setgameRound(( currRounds => [nextNumber.toString(), ...currRounds] ));
  };

  return (
    <View style={styles.Screen}>
      <Text style={styles.HeadTitle}>Let's Guess a Number</Text>
      <Numbercontainer selectedNumber={currentGuess} />
      <Card style={styles.buttonContainer}>
        <Button
          title="LOWER"
          style={styles.button}
          onPress={nextGuessHandler.bind(this, 'lower')}
        />
        <Button
          title="GREATER"
          style={styles.button}
          onPress={nextGuessHandler.bind(this, 'greater')}
        />
      </Card>
     <View style={styles.list}>
     {/* <ScrollView>
        {gameRound.map((guess,index)=> renderListItem(guess,gameRound.length - index))}
      </ScrollView> */}
      <FlatList
        keyExtractor={item=>item}
        data={gameRound}
        renderItem={renderListItem.bind(this,gameRound.length)}
        contentContainerStyle={styles.list}
      />
     </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Screen: {
    alignItems: 'center',
  },
  HeadTitle: {
    fontSize: 20,
    marginVertical: 10,
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    // marginVertical: 10,
    paddingVertical: 30,
    width: 300,
    maxWidth: '80%',
  },
  list:{
    // flex:1,
    marginVertical:20,
    width:200,
    // maxWidth:'80%',
    
  },
  listItem:{
    // flex:1,
    flexDirection:'row',
    marginVertical:5,
    padding:5,
    borderWidth:1,
    justifyContent:'space-evenly'
  }

});

export default GameScreen;
