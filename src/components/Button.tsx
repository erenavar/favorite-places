import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Button(props) {
    return (
        <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: "rebeccapurple",
        borderRadius: 5,
        padding: "3%",
        marginHorizontal: "4%",
    },
    buttonText: {
        color: "white",
        alignSelf: "center"
    }
})