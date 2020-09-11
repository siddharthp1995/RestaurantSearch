import React, { useState } from 'react';
import SearchBar from '../Component/SearchBar';
import ResultsLists from '../Component/ResultsList';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price, priceHigherAbove = false) => {
        // return results.filter(result => {
        //     console.log('result', result.price);
        //     if (priceHigherAbove && result.price && (result.price.length >= price.length)) {
        //         return result;
        //     }
        //     else if (result.price === price) {
        //         return result;
        //     }
        // });
        return results.filter(result => result.price === price);
    };

    return (
        <View>
            <ScrollView>
                <SearchBar
                    term={term}
                    onTermChange={setTerm}
                    onTermSubmit={() => searchApi(term)}
                />
                {/* <Text>React Native !</Text> */}
                <Text style={styles.textStyle}>{term}</Text>
                <Text style={styles.messageStyle}>We have found {results.length} results</Text>
                {/* <Text style={styles.errorStyles}>{errorMessage}</Text> */}
                <ResultsLists
                    title="Cost Effective"
                    results={filterResultsByPrice('$')}
                />
                <ResultsLists
                    title="Bit Pricier"
                    results={filterResultsByPrice('$$')}
                />
                <ResultsLists
                    title="Big Spender"
                    results={filterResultsByPrice('$$$', true)}
                />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    errorStyles: {
        color: 'red'
    },
    textStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    messageStyle: {
        marginLeft: 4,
    }
});

export default SearchScreen;
