import React,{useState} from 'react';
import {View, Text, StyleSheet, TextInput,
     Button, TouchableWithoutFeedback, Keyboard,
        Alert
    } from 'react-native';
import Card from '../components/Card';
import Input from '../components/Input';
import Numbercontainer from '../components/Numbercontainer'
import customColor from '../components/Colors'

const StartGameScreen = (props) => {

const [enteredValue, setenteredValue] = useState('');
const [selectedNo, setselectedNo] = useState('');
const [confirmedState, setconfirmedState] = useState(false)

const noInputHandler=inputText=>{
    // console.log(inputText)
    setenteredValue(inputText.replace(/[^0-9]/g,''));}

const resetHandler=()=>{   
     setenteredValue('');
     setconfirmedState(false);
    }
const confirmHandler=()=>{
    const chosenNo=parseInt(enteredValue);
    if(isNaN(chosenNo)  || chosenNo <= 0 || chosenNo > 99 ){
        Alert.alert('Invalid Number!','Number has to be between 1-99',
        [{text:'okay', style:'destructive', onPress: resetHandler }])
        return;
    }
    setselectedNo(chosenNo);
    setconfirmedState(true);
    setenteredValue('');
    Keyboard.dismiss()
}
let confiremdoutput;

if(confirmedState){
    confiremdoutput= (
    <Card style={styles.confirmoutput}>
        <Text> Your Selected No is</Text>
       <Numbercontainer selectedNumber={selectedNo}/>
       <Button title="Start Game" color="#9980FA" onPress={()=>props.gameStart(selectedNo)} />
    </Card>);
}
  return (
      <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()} >
    <View style={styles.screen}>
      <Text style={styles.HeadTitle}>Start a New Game!</Text>
      <Card style={styles.InputContainer}>
        <Text style={styles.label}>Select a Number</Text>
        <Input 
        style={styles.inputfield}
        blurOnSubmit
        autoCorrect={false}
        keyboardType="number-pad"
        maxLength={2}
        onChangeText={noInputHandler}
        value={enteredValue}
        />
        <View style={styles.ButtonContainer}>
          <View style={styles.button}>
            <Button title="Reset" 
            onPress={() => {resetHandler()}} color={customColor.red_lighten_1}
             />
          </View>
          {/*  red_darken_1 */}
          <View style={styles.button}>
            <Button title="Confirm" 
            onPress={() => {confirmHandler()}} color={customColor.purple_accent_2}
             />
          </View>
        </View>
      </Card>
      {confiremdoutput}
    </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  HeadTitle: {
    fontSize: 20,
    marginVertical: 10,
  },
  InputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },
  label: {
    marginVertical: 10,
    fontSize: 15,
  },
  ButtonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    paddingVertical: 20,
  },
  button: {
    width: 100,
  },
  inputfield: {
    paddingVertical: 5,
    textAlign: 'center',
  },
  confirmoutput:{
      width:150,
      alignItems:'center',
      marginVertical:20,
      padding:10
  },
});

export default StartGameScreen;
