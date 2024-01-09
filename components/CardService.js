import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function CardService({ imagePath, title, onPress }) {

    return (
        <TouchableOpacity onPress={onPress}>
        <View style={styles.card}>
            <Image source={imagePath} style={styles.cardImage} />
            <Text style={styles.cardTitle}>{title}</Text>
            </View>
        </TouchableOpacity>


    );

}


const styles = StyleSheet.create({
    card: {
        width: 'auto', // Adjust the width as needed
        borderRadius: 8,
        overflow: 'hidden',
      
    },
    cardImage: {
        width: 64,
        height: 64, // Adjust the height as needed
    },
    cardTitle: {
        textAlign: 'center',
        paddingVertical: 5,
      
    },
  
});