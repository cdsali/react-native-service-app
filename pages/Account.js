import React from 'react';
import { Text, View, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
const settingsData = [
    { id: '1', title: 'information', icon:'ios-options' },
    { id: '2', title: 'orders', icon:'ios-list'},
    { id: '3', title: 'promotions', icon:'ios-gift' },
    { id: '4', title: 'help', icon:'ios-help-circle' },
    { id: '5', title: 'Logout', icon:'ios-log-out' },

];

const SettingItem = ({ title, icon }) => (
    <TouchableOpacity style={styles.settingItem}>
        <Ionicons name={icon} size={24} color="rgba(0,1,1,0.7)" style={styles.icon} />
        <Text style={styles.settingText}>{title}</Text>
    </TouchableOpacity>
);

const Account = () => {
    return (
        
        <View style={styles.container}>
            <LinearGradient colors={['#D8CFC6', '#D8CFC6', 'transparent']}>
            <View style={styles.profileContainer}>
                <Image source={require('../images/user.png')} style={styles.profileImage} />
                <Text style={styles.profileName}>ALI BRAIKI</Text>
            </View>
            <FlatList
                data={settingsData}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <SettingItem title={item.title} icon={item.icon} />}
                />
            </LinearGradient>
            </View>
           
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    profileContainer: {
        alignItems: 'center',
        paddingVertical: 60,
      
        borderBottomColor: '#ddd',
    },
    profileImage: {
        width: 70,
        height: 70,
        borderRadius: 40,
        marginBottom: 10,
    },
    profileName: {
        fontSize: 18,
        fontWeight: '400',
        color:'rgba(0,1,1,0.7)'
    },
    settingItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 16,
        paddingHorizontal: 20,
        borderBottomWidth: 0,
       
    },
    icon: {
        marginRight: 15,
    },
    settingText: {
        fontSize: 16,
        color:'rgba(0,1,1,0.7)'
    },
});

export default Account;
