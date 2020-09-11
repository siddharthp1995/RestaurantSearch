import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import ResultsDetail from './ResultsDetail';
import { withNavigation } from 'react-navigation';

const ResultsLists = ({ title, results, navigation }) => {
    return results.length ? (
        <View>
            <Text style={styles.titleStyle}>{title}</Text>
            {/* <Text style={styles.dataStyle}>{results.length}</Text> */}
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', { id: item.id })}>
                            <ResultsDetail result={item} />
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    ) : null;
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        // marginBottom: 4,
        marginLeft: 4,
    },
    // dataStyle: {
    //     color: 'red',
    //     backgroundColor: '#E0DEE0',
    // },
});

export default withNavigation(ResultsLists);