import React from 'react';
import { View,Text,StyleSheet } from 'react-native';
const GoalItem=props =>{
    return (
        <View style={styles.listItems}><Text style={{padding:6,color:'black'}}>+{props.title}</Text></View>  
    );
};

const styles=StyleSheet.create({
    listItems:{
        color:'black',
        backgroundColor:'red',
        fontSize:16,
        marginTop:3
    }
});

export default GoalItem;