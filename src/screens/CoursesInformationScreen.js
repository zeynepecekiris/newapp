import { StyleSheet, Text, View,ScrollView} from 'react-native'
import React from 'react'
import Information from './components/Information'

export default function CoursesInformationScreen() {
  return (
    <ScrollView>
     
    <Information title="Angular Egitimi"
    imageSource={require('../../assets/angular.jpg')}
    desc="Kapsamli angular egitimi" />
    <Information title="Bootstrap 5 Egitimi"
    imageSource={require('../../assets/bootstrap5.png')}
    desc="Kapsamli angular egitimi" />
    <Information title="C programlama Egitimi   "
    imageSource={require('../../assets/c.png')}
    
    desc="Kapsamli angular egitimi" />

       
    
    </ScrollView>
  )
}

const styles = StyleSheet.create({})