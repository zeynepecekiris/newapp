import { StyleSheet, Text, View ,FlatList} from 'react-native'
import React from 'react'

export default function CourseScreen() {
    const courses=[
        {name: 'Angular',id:1},
        {name: 'React Js',id:2},
        {name: 'c#',id:3},
        {name: 'C programlama',id:4},
        {name: 'Bootstrap',id:5},
    
    
      ];
  return (
    <FlatList 
    data={courses}
    keyExtractor={(item) => item.id}
    renderItem={({item}) => {
     return <Text style={styles.content}>{item.name}</Text>;

    }}
    />
  )
}

const styles = StyleSheet.create({  
    content:{
    fontSiz:20,
    backgroundColor:'yellow',
    marginVertical:10,
    padding:20,

  }})