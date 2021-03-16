import React from 'react'
import {View,Text,StyleSheet, Button, Image} from 'react-native'
import overImage from '../assets/gameover.png'
import Colors from '../components/Colors'


const GameOver=(props)=> {
    const {chosenNo,countGameRound,newGame}=props;
    return (
        <View style={styles.screen}>
           <View style={styles.imageContainer}> 
           <Image sytle={styles.image}
            source={overImage}
            // source={{uri:'https://www.google.com/imgres?imgurl=https%3A%2F%2Ffsb.zobj.net%2Fcrop.php%3Fr%3DL9pRnrl1wflxpeyeNMMBIFo1iPgkTJUYebkii4khd3JLYff_ZKBSUBKzpQ-BWNxqnQHtVliEV_0AMDgr9D0i-lY0wzc_qWVLdvJ1qmQ9NMX-q-TTzlXpnA4t2CR0vhYWvI4MyAha2LGso0y8&imgrefurl=https%3A%2F%2Fgamewallpapersz.blogspot.com%2F2019%2F12%2Fgame-over-image-wallpaper-download.html&tbnid=kxJVvXiuH_eg9M&vet=12ahUKEwjlzsq34LHvAhURQ30KHVZuCk4QMyhkegUIARCiAQ..i&docid=zk9sExMfUR7hXM&w=1280&h=1280&itg=1&q=game%20over%20images&hl=en&ved=2ahUKEwjlzsq34LHvAhURQ30KHVZuCk4QMyhkegUIARCiAQ'}}
            resizeMode="cover"
            />
           </View>
           <View style={styles.textcontainer}>
           <Text style={{fontSize:20}}> Hurray! Game Over</Text>
           <Text> {countGameRound} rounds took place to finsh the game </Text>
           <Text> Choosed Number was {chosenNo}</Text>
           <Button  title="New Game"
            onPress={ ()=> newGame()}
            color={Colors.purple_accent_1}
            /> 
           </View>
        </View>
    )
}

const styles=StyleSheet.create({
    screen:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        marginVertical:10
    },
    imageContainer:{
        
        borderWidth:2,
        borderRadius:150,
        overflow:"hidden",
        height:300,
        width:'80%'
        
    },
    image:{
        width:'100%',
        height:'100%'

    },
    textcontainer:{
        marginVertical:5,
    }
})

export default GameOver
