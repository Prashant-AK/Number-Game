import React from 'react'
import {Text, View, StyleSheet} from 'react-native'


const Numbercontainer=(props)=> {
    return (
        <View style={styles.container}>
            <Text  style={styles.number}> {props.selectedNumber}</Text>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        borderWidth:2,
        borderColor:'#4cd137',
        padding:15,
        borderRadius:10,
        marginVertical:10,
       
    },
    number:{
        color:'#1B1464',
        fontSize:22
    }
})
export default Numbercontainer
