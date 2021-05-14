import React from 'react';
import { View,Text,StyleSheet, Touchable, TouchableOpacity } from 'react-native';

const GoalItem=(props)=>
{
    return(
        <TouchableOpacity activeOpacity={0.8} onPress={()=>props.onDelete(props.item.id)}>
          <View  style={styles.listItem}>
              <Text >{props.item.value}</Text>
          </View>
        </TouchableOpacity>
    );
}

const styles=StyleSheet.create({
    listItem:{
        padding:10,
        marginVertical:10,
        backgroundColor:"#ccc",
        borderColor:'black',
        borderWidth:1
      },
});

export default GoalItem;