import React from 'react'
import { Pressable, StyleSheet, Text, PressableProps } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

const ListItem = (props: PressableProps) => {
    return (
        <Pressable style={styles.itemContainer} {...props} >
            <Text style={styles.text}>{props.title} </Text>
            <AntDesign name="delete" size={24} color="red" />
        </Pressable>
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

export default ListItem;
