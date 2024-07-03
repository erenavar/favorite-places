import React from 'react'
import { Pressable, StyleSheet, Text, PressableProps, Alert } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { deleteMarker } from '../redux/markerReducer';

const ListItem = (props: PressableProps) => {

    const dispatch = useDispatch();

    const deleteItem = (id) => {
        dispatch(deleteMarker(id));
        alert("Deleted Succesfully")


    }

    const showAlert = (id) =>
        Alert.alert(
            'Uninstall',
            'Delete this Place?',
            [
                {
                    text: 'Delete',
                    onPress: () => deleteItem(id),
                    style: "destructive",
                },
                {
                    text: 'Cancel',
                    style: "cancel",
                }

            ],
            {
                cancelable: true,
                onDismiss: () =>
                    Alert.alert(
                        'This alert was dismissed by tapping outside of the alert dialog.',
                    ),
            },
        );

    return (
        <Pressable style={styles.itemContainer} {...props} >
            <Text style={styles.text}>{props.title} </Text>
            <Pressable onPress={() => showAlert(props.id)}>
                <AntDesign name="delete" size={24} color="red" />
            </Pressable>
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
