import React from 'react'
import {View, StyleSheet} from 'react-native'

const Card=(props)=> {
    return <View style={{ ...styles.cardcss, ...props.style}}>{props.children}</View>
}

const styles = StyleSheet.create({
    cardcss:{
        borderRadius:10,
        elevation: 5,
        backgroundColor: 'white',
    }
})
export default Card
