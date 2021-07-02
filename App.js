import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet,Text, View,TextInput,Button, ColorPropType,ScrollView,FlatList } from 'react-native';

export default function App() {
  const [enteredGoal,setEntredGoal]=useState('');
  const [courseGoals,setCourseGoals]= useState([]);

  const goalInputHandler = (entredText) => {
    setEntredGoal(entredText);
  }
  const addGoalHandler =() =>{
    setCourseGoals(currentGoal => [...courseGoals,enteredGoal]);
  }
  
  return (

    <View style={{padding:30,
      alignItems:'center',height:'100%',width:'100%'}}>
      <View style={{position:'absolute',top:0,right:0,left:0,backgroundColor:'blue',alignItems:'center',marginBottom:4  }}><Text style={{color:'white',fontSize:28,padding:1}}>Task Manager<br/></Text></View>
      <View style={{flexDirection:'row',position:'absolute',top:40,left:0,right:0}}>
        <TextInput placeholder="Enter a goal" style={{borderRadius:10,
        borderColor:'#2980b9',
        borderWidth:5,
        width:440,
        padding:10,
        textAlign:'center',
        margin:10,
        alignItems:'center'}} onChangeText={goalInputHandler} value={enteredGoal}/><br />
        <View><Button  title="Add"  onPress={addGoalHandler}/></View>
      </View>
          
       <View  style={{marginTop:10,position:'absolute',top:100,left:0,right:0,alignItems:'center',backgroundColor:'yellow'}}>
        <Text style={{fontSize:20,fontFamily:'inherit'}}>
          Today's Tasks</Text></View>
        
        <FlatList style={{position:'absolute',top:140,right:0,left:0,textAlign:'center'}} data={courseGoals} renderItem={itemData => (<View style={style.listItems}><Text style={{padding:6,color:'black'}}>+{itemData.item}</Text></View>)} />
          
       
    </View>
    
  );
}
const style= StyleSheet.create({
  /*txt:{
    color:'red',
    fontSize:20,
    borderRaduis:3,
    borderWidth:15,
    borderColor:'red'
  },*/
  
  listItems:{
    
  }
})


