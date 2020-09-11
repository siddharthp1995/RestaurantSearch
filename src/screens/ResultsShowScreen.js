import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, FlatList, Image, ScrollView } from 'react-native';
import yelp from '../api/yelp'

const ResultsShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    console.log('result ->', result);
    const getResult = async (id) => {
        try {
            const response = await yelp.get(`/${id}`);
            setResult(response.data);
        } catch (error) {
            console.log('error', error);
        }
    };

    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }

    return (
        <View>
            <Text style={styles.resultStyle}>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    return (
                        <ScrollView>
                            <Image style={styles.imageStyle} source={{ uri: item }} />
                        </ScrollView>
                    )
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    imageStyle: {
        height: 150,
        width: 250,
        marginBottom: 8,
        alignSelf: 'center',
    },
    resultStyle: {
        textAlign: 'center',
        fontSize: 16,
        color: 'purple',
        marginBottom: 8,
        marginTop: 8,
    }
});

export default ResultsShowScreen;