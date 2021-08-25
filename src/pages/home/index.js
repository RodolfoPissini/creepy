import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Text, View, StatusBar, Image, ScrollView, TouchableOpacity, Alert, FlatList } from 'react-native';
import styles from './styles';
import data from '../../data/data.json';


export default function Home() {
  
  return (
    <>
    <ScrollView>
      <StatusBar barStyle='light-content' backgroundColor='#00002D' />
      <View style={styles.head}>
        <Image
          style={styles.logo}
          resizeMode='contain'
          source={require('../../assets/creepy.png')}
        />
        <View style={styles.icon}>
          <Ionicons name="skull" size={30} color="#B1D95B " style={{marginRight:8}} />
          <TouchableOpacity onPress={() =>{
              Alert.alert('clicou')
          }}>
              <FontAwesome name="search" size={30} color="#B1D95B" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.banner}>
        <Image
          style={{width:'100%'}}
          resizeMode='contain'
          source={require('../../assets/frank.jpg')}
        />
      </View>
      <ScrollView style={{backgroundColor:'#00002D'}}>
      {data.categories.map(function(category){
          return(
            <>
              <Text style={{
                color:'#B1D95B',
                marginLeft:20,
                fontWeight:'bold',
                textTransform:'uppercase',}}>{category.genres}</Text>

              <FlatList 
                data={category.movies}
                horizontal={true}
                snapToInterval={116}
                renderItem={({item})=>{
                        return(
                          <TouchableOpacity 
                            onPress={() =>{
                            Alert.alert(`Detalhes de ${item.name}`, item.name)
                        }}
                          >
                            <View style={{alignItems: 'center', padding: 16, maxWidth:116}}>
                              <Image
                              style={{
                                width:100,
                                height: 150,
                                borderRadius: 10,
                              }}
                                source={{uri: item.url}}
                              />
                              <Text style={{color:'#B1D95B'}} numberOfLines={1}>{item.name}</Text>
                            </View>
                          </TouchableOpacity>
                          )
                    }}
                >

              </FlatList>  
              {/* <ScrollView horizontal={true}>
                {category.movies.map(function(movie){
                 
                })}     
            </ScrollView>             */}
        </>
          )
        })}
      </ScrollView>      
    </ScrollView>
    </>
  );
}

