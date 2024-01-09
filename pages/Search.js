import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Assuming you have FontAwesome installed
import { LinearGradient } from 'expo-linear-gradient';
const Search = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

  
    const data = [
        { id: '1', name: 'work' },
        { id: '2', name: 'nice' },
        { id: '3', name: 'fork' },
        { id: '4', name: 'what' },
        { id: '4', name: 'what clean' },
      
    ];

    // Function to filter search results based on query
    const handleSearch = (query) => {
        const filteredResults = data.filter(item =>
            item.name.toLowerCase().includes(query.toLowerCase())
        );
        setSearchResults(filteredResults);
    };

    return (
       
        <View style={styles.container}>
            
            <View style={styles.searchContainer}>
                <Icon name="search" size={20} color="#000" style={styles.searchIcon} />
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search..."
                    value={searchQuery}
                    onChangeText={(text) => {
                        setSearchQuery(text);
                        handleSearch(text);
                    }}
                />
            </View>
           
        
            {searchQuery !== '' && (
                <FlatList
                    data={searchResults}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.resultItem}>
                            <Text>{item.name}</Text>
                        </View>
                    )}
                />
                )}

       
            </View>
      
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#D8CFC6',
        padding: 16,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 8,
        marginBottom: 16,
        paddingHorizontal: 8,
        marginVertical:20
    },
    searchIcon: {
        marginRight: 8,
    },
    searchInput: {
        flex: 1,
        height: 40,
        
       
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    resultItem: {
        padding: 12,
        borderBottomColor: 'white',
        borderBottomWidth: 0.4,
        borderRadius: 8,
        marginBottom: 8,
    },
});

export default Search;
