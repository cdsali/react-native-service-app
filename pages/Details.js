import React, { useEffect,useState } from 'react';
import { Text, View, FlatList, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
const settingsData = [
    { id: '1', title: 'House N', icon: 'ios-options' },
    { id: '2', title: 'room', icon: 'ios-list' },
    { id: '3', title: 'Date slots', icon: 'ios-gift' },
    { id: '1', title: 'House N', icon: 'ios-options' },
    { id: '2', title: 'room', icon: 'ios-list' },
    { id: '3', title: 'Date slots', icon: 'ios-gift' },
   

];






const InputField = ({ title, value, onChange }) => (
    <View style={styles.inputContainer}>
        <Text style={styles.label}>{title}</Text>
        <TextInput
            style={styles.input}
            value={value}
            onChangeText={(text) => onChange(text)}
            placeholder={`Enter ${title}`}
        />
    </View>
);





const Details = ({ route }) => {
    const [userDetails, setUserDetails] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        // Add more fields as needed
    });
    const [serviceId, setServiceId] = useState(5);
    
    useEffect(() => {
       
        const id = route.params.id;
        setServiceId(id);

        // Optional: Log the route params for debugging

        
        console.log('Route Params:', id);
    }, [serviceId]);

        const [dropdowns, setDropdowns] = useState([{ id: 1, selectedValue: '' }]);
        const [dropdownValues, setDropdownValues] = useState([]);

        const handleAddDropdown = () => {
            const newId = dropdowns.length + 1;
            setDropdowns([...dropdowns, { id: newId, selectedValue: '' }]);
        };

        const handleDropdownChange = (id, value) => {
            const updatedDropdowns = dropdowns.map((dropdown) =>
                dropdown.id === id ? { ...dropdown, selectedValue: value } : dropdown
            );
            setDropdowns(updatedDropdowns);

            // Update the dropdownValues array in real-time
            setDropdownValues(updatedDropdowns.map((dropdown) => dropdown.selectedValue));
        };
    
    return (

        <View style={styles.container}>
            <LinearGradient colors={['transparent', '#D8CFC6', '#D8CFC6']} style={{ height:'100%' }}>
                <View style={styles.profileContainer}>
                    <Image source={require('../images/broom.png')} style={styles.serviceImage} />
                    <Text style={styles.profileName}>Home {serviceId}</Text>


                </View>
            
                        <InputField
                    title="House"
                    value={userDetails['fullName']}
                            onChange={(text) => {
                                setUserDetails((prevDetails) => ({
                                    ...prevDetails,
                                    'fullName': text,
                                }));
                            }}
                />
                <InputField
                    title="room"
                    value={userDetails['fullName']}
                    onChange={(text) => {
                        setUserDetails((prevDetails) => ({
                            ...prevDetails,
                            'fullName': text,
                        }));
                    }}
                />
                {dropdowns.map((dropdown) => (
                    <View key={dropdown.id} style={styles.dropdownContainer}>
                        <Text>Dropdown {dropdown.id}:</Text>
                        <Picker
                            style={styles.dropdown}
                            selectedValue={dropdown.selectedValue}
                            onValueChange={(itemValue) => handleDropdownChange(dropdown.id, itemValue)}
                        >
                            <Picker.Item label="Select an option" value="" />
                            <Picker.Item label="Option 1" value="option1" />
                            <Picker.Item label="Option 2" value="option2" />
                            <Picker.Item label="Option 3" value="option3" />
                            {/* Add more options as needed */}
                        </Picker>
                    </View>
                ))}

              
                  
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
    serviceImage: {
        width: 70,
        height: 70,
        borderRadius: 0,
        marginBottom: 10,
    },
    profileName: {
        fontSize: 18,
        fontWeight: '400',
        color: 'rgba(0,1,1,0.7)'
    },
    inputContainer: {
        marginBottom: 10,
        paddingHorizontal: 30,
        
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        borderWidth: 0,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        backgroundColor: 'white',
        fontSize: 14,
    },
   
  
});

export default Details;

