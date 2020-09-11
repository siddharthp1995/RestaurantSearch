import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const ResultsDetail = ({ result }) => {
    return (
        <View>
            <Image style={styles.imageStyle} source={{ uri: result.image_url }} />
            <Text style={styles.nameStyle}>{result.name}</Text>
            <Text style={styles.ratingStyle}>
                {result.rating} Stars, {result.review_count} Reviews
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    imageStyle: {
        width: 180,
        height: 120,
        borderRadius: 4,
        margin: 4,
    },
    nameStyle: {
        width: 180,
        fontWeight: 'bold',
        textAlign: 'center',
        marginHorizontal: 4,
    },
    ratingStyle: {
        width: 180,
        fontSize: 12,
        textAlign: 'center',
        marginHorizontal: 4,
    }
});

export default ResultsDetail;