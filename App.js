import React, { useState } from 'react';
import {Button, FlatList, StyleSheet, View, } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [courseGoals,setCourseGoals]=useState([]);
  const [isAddMode,setIsAddMode]=useState(false);
 
  const addGoalHandler=(enteredGoal)=>{
    if(enteredGoal.length===0) return;
    setCourseGoals((currGoals)=>[...currGoals,{id:Math.random().toString().slice(2),value:enteredGoal}]);
    setIsAddMode(false);
  }
  const cancelGoalAddHandler=()=>{
    setIsAddMode(false);
  }
  const onDeleteHandler=(idx)=>{
    
    // console.log(idx);

    //-------APPROACH 1----
    // const updatedGoals=courseGoals.slice()
    // const location=updatedGoals.findIndex(goal=>goal.key==idx);
    // updatedGoals.splice(location,1);
    // setCourseGoals(updatedGoals);

    //-----APPROACH 2-----
    setCourseGoals((currentGoals)=>{
      return currentGoals.filter(goal=>goal.id!==idx);
    });
    
  };

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={setIsAddMode.bind(null,true)} />
      <GoalInput onCancel={cancelGoalAddHandler} visible={isAddMode} addGoalHandler={addGoalHandler}/>
      <FlatList keyExtractor={(item,index)=>item.id} data={courseGoals} renderItem={itemData=>(
          <GoalItem item={itemData.item} onDelete={onDeleteHandler}/>
      )} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  
});
