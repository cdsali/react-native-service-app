// LoginScreen.js
import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Login = ({ navigation }) => {
    const handleLogin = () => {
        // Handle login logic here
        // For simplicity, let's navigate to a HomeScreen
        navigation.navigate('Home');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Username"
            // onChangeText={(text) => setUsername(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
            // onChangeText={(text) => setPassword(text)}
            />
            <Button title="Login" onPress={handleLogin} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    input: {
        width: '80%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 16,
        paddingLeft: 8,
    },
});

export default Login;
