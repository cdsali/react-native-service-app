
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import { LinearGradient } from 'expo-linear-gradient'; // Import LinearGradient from expo-linear-gradient
import { useNavigation } from '@react-navigation/native';

const slides = [
    
    {
        title: '',
        text: 'This is slide 2 text.',
        image: require('../images/products.png'),
    },
    {
        title: '',
        text: 'This is slide 3 text e more than',
        image: require('../images/house.png'),
    },
    {
        title: '',
        text: 'Nettoyage more than 7 network',
        image: require('../images/broom.png'),
    },
];



export default function Start() {

   
    const navigation = useNavigation();
    const handleHomePage = () => {
        navigation.navigate('HomeTabs', { screen: 'Home' });
    };
    return (
        <View style={styles.container}>
            <Swiper style={styles.wrapper} dotStyle={styles.dot} activeDotStyle={styles.activeDot}>
                {slides.map((slide, index) => (
                    <LinearGradient
                        key={index}
                        colors={['#FEEFD8', 'transparent']}
                        style={styles.gradientBackground}
                    >
                        <View key={index} style={styles.slide}>
                           
                                    <Image source={slide.image} style={styles.image} />
                                    <Text style={styles.title}>{slide.title}</Text>
                            <Text style={styles.text}>{slide.text}</Text>
                          

                           
                        </View>
                    </LinearGradient>
                ))}
                
            </Swiper>
            <TouchableOpacity
                style={styles.button}
                onPress={handleHomePage}
            >
                <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'start',
        justifyContent: 'center',
        width: 'max-content',
        
    },
    wrapper: {},
    slide: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        
       
        
    },
    gradientBackground: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 22,
        marginBottom: 5,
    },
    text: {
        fontSize: 16,
        textAlign: 'center',
        fontFamily:'Roboto'
        
    },
    image: {
        width: 200,
        height: 200,
    },
    button: {
        marginBottom: 50,
        padding: 10,
        width: '50%',
        alignSelf:'center',
        borderRadius: 5,
        backgroundColor: '#D8CFC6', 
    },
    buttonText: {
        color: 'black',
        textAlign: 'center',
        fontWeight: '300',
    },
    dot: {
        backgroundColor: '#D8CFC6', // Set the color of inactive dots
        width: 8,
        height: 8,
        borderRadius: 4,
        margin: 3,
    },
    activeDot: {
        backgroundColor: '#D5CF16', // Set the color of the active dot
        width: 8,
        height: 8,
        borderRadius: 4,
        margin: 3,
    },
});
