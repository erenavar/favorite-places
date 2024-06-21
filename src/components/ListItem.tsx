import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

export default function ListItem() {
    return (
        <View style={styles.itemContainer}>
            <Text style={styles.text}>Test</Text>
            <AntDesign name="delete" size={24} color="red" />

        </View>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: "3%",
        paddingVertical: "4%",
        borderBottomColor: "rebeccapurple",
        borderTopColor: "rebeccapurple",
        borderBottomWidth: 1,
        borderTopWidth: 1
    },
    text: { fontSize: 15 }
})