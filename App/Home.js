import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native'

export default function Home() {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
     <View style={styles.categoryContainer}>
        <TouchableOpacity
            style={styles.category}
            onPress={()=>navigation.navigate('Playground', {category :'world-affairs'})}
        >
            <Text style={styles.categoryText}>World Affairs</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.category}
            onPress={()=>navigation.navigate('Playground', {category :'science'})}
        >
            <Text style={styles.categoryText}>Science</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.category}
            onPress={()=>navigation.navigate('Playground', {category :'technology'})}
        >
            <Text style={styles.categoryText}>Technology</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.category}
            onPress={()=>navigation.navigate('Playground', {category :'sports'})}
        >
            <Text style={styles.categoryText}>Technology</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.category}
            onPress={()=>navigation.navigate('Playground', {category :'literature'})}
        >
            <Text style={styles.categoryText}>Literature</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.category}
            onPress={()=>navigation.navigate('Playground', {category :'movies'})}
        >
            <Text style={styles.categoryText}>Movies</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    categoryContainer:{
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'center',
        alignItems:'center',
        marginTop:80
    },
    category:{
        width:130,
        height:130,
        borderRadius:20,
        backgroundColor:'white',
        margin:10,
        elevation:20,
        justifyContent:'center',
        alignItems:'center',
       
    },
    categoryText:{
        fontSize:15,
        fontWeight:'bold',
        textAlign:'center',
        color:'black'
    }
})