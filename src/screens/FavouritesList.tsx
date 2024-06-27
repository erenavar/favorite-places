import { SafeAreaView, FlatList, StyleSheet, PressableProps } from 'react-native'
import React from 'react'
import Button from '../components/Button'
import { useNavigation } from '@react-navigation/native'
import ListItem from '../components/ListItem';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';



export default function FavouritesList() {

    const globalState = useSelector((state: RootState) => state.marker);
    const navigation = useNavigation();
    const toMapPage = () => {
        navigation.navigate('Map')
    }
    console.log('globalState :>> ', globalState);
    return (
        <SafeAreaView style={{ flex: 1, marginTop: 15 }}>
            <FlatList
                style={styles.scroll}
                data={globalState.markers}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <ListItem title={item.title} onPress={() => alert("deneme")} />
                )}

            />


            <Button style={{ flex: 4 }} title={"Add New Place"} onPress={toMapPage} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    scroll: {
        marginBottom: 20
    }
})