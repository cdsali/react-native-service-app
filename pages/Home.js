import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'; // Import connect from react-redux
import { setCoverInfo } from '../redux/actions';
import { LinearGradient } from 'expo-linear-gradient';
import CardService from '../components/CardService';
import Cover from '../components/Cover';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Home = ({ coverTitle, coverParagraph, coverImage, dispatch, button }) => {
    const navigation = useNavigation();
    const handleCardPress = (id) => {
        // Dispatch the action to update Redux state
     //   dispatch(setCoverInfo('Nchanfe eef', 'New Paragraph fee feoll efefo eflefe feofeofe feoofef fefefe ',require('../images/earn.png'),'NOOO'));
        // navigation.navigate('HomeTabs', { screen: 'Search' });
        navigation.navigate('Service', {id});
        
    };

    return (
        <ScrollView style={styles.container}>
            <LinearGradient colors={['#D8CFC6', '#D8CFC6', 'transparent']}>
                <TouchableOpacity style={styles.localizationButton} onPress={() => alert('Localization Button Pressed')}>
                    <Ionicons name="md-locate" size={24} color="white" />
                </TouchableOpacity>
                <LinearGradient colors={['rgb(68,59,50)', 'rgb(88,79,70)', '#D8CFC6']}>
                    <Cover title={coverTitle} paragraph={coverParagraph} button='cliccc' image={coverImage} button={button} />
                </LinearGradient>

                {/* Grid of home mass Cards */}
                <View style={styles.gridContainer}>
                    {/* Row 1 */}
                    <View style={styles.gridRow}>
                        <CardService imagePath={require('../images/house.png')} title='mytest' onPress={() => handleCardPress(33)} />
                        <CardService imagePath={require('../images/products.png')} title='mytest' />
                        <CardService imagePath={require('../images/residential.png')} title='mytest' />
                        <CardService imagePath={require('../images/broom.png')} title='mytest' />
                    </View>

                    {/* Row 2 */}
                    <View style={styles.gridRow}>
                        <CardService imagePath={require('../images/house.png')} title='mytest' />
                        <CardService imagePath={require('../images/products.png')} title='mytest' />
                        <CardService imagePath={require('../images/residential.png')} title='mytest' />
                        <CardService imagePath={require('../images/house.png')} title='mytest' />
                    </View>
                </View>

                {/* Title "Prop" */}
                <Text style={styles.title}>Prop</Text>

                {/* Horizontal Row of Promotion Cards */}
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={styles.promotionContainer}>
                        <CardService imagePath={require('../images/house.png')} title='mytest' />
                        <CardService imagePath={require('../images/products.png')} title='mytest' />
                        <CardService imagePath={require('../images/residential.png')} title='mytest' />
                        <CardService imagePath={require('../images/house.png')} title='mytest' />
                        <CardService imagePath={require('../images/house.png')} title='mytest' />
                        <CardService imagePath={require('../images/products.png')} title='mytest' />
                        <CardService imagePath={require('../images/residential.png')} title='mytest' />
                        <CardService imagePath={require('../images/house.png')} title='mytest' />
                        {/* Add more promotion cards as needed */}
                    </View>
                </ScrollView>

                <Text style={styles.title}>Shortcut</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={styles.promotionContainer}>
                        <CardService imagePath={require('../images/house.png')} title='mytest' />
                        <CardService imagePath={require('../images/products.png')} title='mytest' />
                        <CardService imagePath={require('../images/residential.png')} title='mytest' />
                        <CardService imagePath={require('../images/house.png')} title='mytest' />
                        <CardService imagePath={require('../images/house.png')} title='mytest' />
                        <CardService imagePath={require('../images/products.png')} title='mytest' />
                        <CardService imagePath={require('../images/residential.png')} title='mytest' />
                        <CardService imagePath={require('../images/house.png')} title='mytest' />
                    </View>
                </ScrollView>
            </LinearGradient>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    gridContainer: {
        marginVertical: 20,
        marginHorizontal: 20,
    },
    gridRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
        paddingLeft: 20,
        fontFamily: 'Roboto',
    },
    promotionContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        marginVertical: 20,
        marginHorizontal: 20,
    },
    localizationButton: {
        position: 'absolute',
        top: 20,
        left: 20,
        padding: 10,
        borderRadius: 5,
        backgroundColor: 'transparent',
        zIndex: 1,
    },
});

const mapStateToProps = (state) => ({
    coverTitle: state.title,
    coverParagraph: state.paragraph,
    coverImage: state.image,
    button: state.button,
});

export default connect(mapStateToProps)(Home);
