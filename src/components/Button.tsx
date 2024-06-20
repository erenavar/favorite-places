import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Button(props) {
    return (
        <Pressable style={styles.buttonContainer} onPress={props.toNavigate}>
            <Text style={styles.buttonText}>{props.title}</Text>
        </Pressable>
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
        alignSelf: "center",
        fontWeight: "bold",
        fontSize: 20
    }
})