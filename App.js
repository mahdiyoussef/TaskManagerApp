import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet,Text, View,TextInput,Button, ColorPropType,ScrollView,FlatList } from 'react-native';
import GoalItem from './components/GoalItem'


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
      
          
       <View  style={{marginTop:10,position:'absolute',top:100,left:0,right:0,alignItems:'center',backgroundColor:'yellow'}}>
        <Text style={{fontSize:20,fontFamily:'inherit'}}>
          Today's Tasks</Text></View>
        
        <FlatList style={{position:'absolute',top:140,right:0,left:0,textAlign:'center'}} data={courseGoals} renderItem={itemData => 
        <GoalItem title={itemData.item} />} />
          
       
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
  
  
})