import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from '../components/Button'
import { useNavigation } from '@react-navigation/native'



export default function FavouritesList() {

    const navigation = useNavigation();
    const toMapPage = () => {
        navigation.navigate('Map')
    }

    return (
        <View>
            <Button title={"Add New Place"} onPress={toMapPage} />
        </View>
    )
}

const styles = StyleSheet.create({})