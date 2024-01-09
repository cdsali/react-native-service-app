import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'; // Import connect from react-redux

const Cover = ({ title, paragraph, button, image }) => {
    return (
        <View style={styles.card2}>
            <View style={styles.leftContent2}>
                <Text style={styles.title2}>{title}</Text>
                <Text style={styles.paragraph}>{paragraph}</Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>{button}</Text>
                </TouchableOpacity>
            </View>
            <Image source={image} style={styles.image} />
        </View>
    );
};




const styles = StyleSheet.create({
    card2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: '500',

        padding: 20,
        paddingTop: 50,


    },
    leftContent2: {
        flex: 1,
        marginRight: 10,
        height: '100%',
    },
    image: {
        width: 128,
        height: 128

    },
    title2: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 20,
        paddingLeft: 0,
        color: '#D8CFC6'
    },
    paragraph: {
        color: '#D8CFC6',
        paddingBottom: 30,
        fontFamily: 'notoserif'
    },
    button: {
        marginBottom: 30,
        padding: 8,
        width: '50%',
        alignSelf: 'flex-start',
        borderRadius: 5,
        backgroundColor: '#D8CFC6',
    },
    buttonText: {
        color: 'black',
        textAlign: 'center',
        fontWeight: '300',
    },
});

export default Cover;
