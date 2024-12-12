import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function SocialPost() {
  return (
    <View style={styles.postContainer}>
      <Text style={styles.userName}>Barack Obama</Text>
      <Image 
        source={{ uri: 'https://tm.ibxk.com.br/2015/04/29/29091351938100.jpg?ims=750x' }} 
        style={styles.postImage} 
      />
      <Text style={styles.postDescription}>
      Barack Hussein Obama II (Honolulu, 4 de agosto de 1961) é um advogado e político norte-americano que serviu como o 44.º presidente dos Estados Unidos de 2009 a 2017, sendo o primeiro afro-americano a ocupar o cargo.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  postContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    margin: 20,
    alignItems: 'center',
    justifyContent:'center',
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  postImage: {
    width: 150,
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  postDescription: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',

  },
});
