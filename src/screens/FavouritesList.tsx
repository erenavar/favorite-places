import { SafeAreaView, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import Button from '../components/Button'
import { useNavigation } from '@react-navigation/native'
import ListItem from '../components/ListItem';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { IMarkerState } from '../redux/markerReducer';



export default function FavouritesList() {

    const globalState = useSelector((state: RootState) => state.marker);
    const navigation = useNavigation();
    const toMapPage = () => {
        navigation.navigate('Map')
    }
    const selectItem = (item: IMarkerState) => {
        navigation.navigate("Map", { item })
    }
    return (
        <SafeAreaView style={{ flex: 1, marginTop: 15 }}>
            <FlatList
                style={styles.scroll}
                data={globalState.markers}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <ListItem title={item.title} id={item.id} onPress={() => selectItem(item)} />
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