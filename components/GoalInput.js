import React, { useState } from 'react';
import { Button, Modal, StyleSheet, TextInput, View } from 'react-native';

const GoalInput=props=>{

    const [enteredGoal,setEnteredGoal]=useState('');
    const goalInputHandler=(enteredText)=>{
        setEnteredGoal(enteredText);
      };
    
    const addGoalHandler=()=>{
      props.addGoalHandler.call(this,enteredGoal);
      setEnteredGoal('');
    };

    return (
        <Modal visible={props.visible} animationType="slide">
          <View style={styles.inputContainer}>
            <TextInput placeholder="Enter Goal" 
              style={styles.input} 
              onChangeText={text=>goalInputHandler(text)} 
              value={enteredGoal}/>
            <View style={styles.buttonContainer}>
              <View style={styles.button}><Button title="CANCEL" color="red" onPress={props.onCancel}/></View>
              <View style={styles.button}><Button title="ADD" onPress={addGoalHandler}/></View>
            </View>
          </View>
        </Modal>
        
    );
};

const styles=StyleSheet.create({
    inputContainer: {
        // flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center',
        flex:1,
      },
      input: {
        width: '80%',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginBottom:20,
      },
      buttonContainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        width:'60%'
      },
      button:{
        width:"40%",
      }
});


export default GoalInput;