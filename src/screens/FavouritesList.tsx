import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from '../components/Button'
import { useNavigation } from '@react-navigation/native'
import ListItem from '../components/ListItem';



export default function FavouritesList() {

    const navigation = useNavigation();
    const toMapPage = () => {
        navigation.navigate('Map')
    }

    return (
        <SafeAreaView style={{ flex: 1, marginTop: 15 }}>
            <ScrollView style={styles.scroll}>
                <ListItem />
            </ScrollView>
            <Button style={{ flex: 4 }} title={"Add New Place"} onPress={toMapPage} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    scroll: {
        marginBottom: 20
    }
})