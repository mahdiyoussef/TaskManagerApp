import React from 'react';
import {StyleSheet,Text, View,TextInput,Button} from 'react-native';
const GoalInput = props =>{
    return (
    <View style={style.vw}><Text style={style.txt1}>Task Manager<br/></Text></View>
    <View style={style.vw1}>
    <TextInput placeholder="Enter a goal" style={style.input} onChangeText={goalInputHandler} value={enteredGoal}/><br />
      <View><Button  title="Add"  onPress={addGoalHandler}/></View>
    </View>);
};

export default GoalInput;
const style=StyleSheet.create({
    vw:{position:'absolute',top:0,right:0,left:0,backgroundColor:'blue',alignItems:'center',marginBottom:4  },
    txt1:{color:'white',fontSize:28,padding:1},
    vw1: {flexDirection:'row',position:'absolute',top:40,left:0,right:0},
    input:{borderRadius:10,
        borderColor:'#2980b9',
        borderWidth:5,
        width:440,
        padding:10,
        textAlign:'center',
        margin:10,
        alignItems:'center'},


});