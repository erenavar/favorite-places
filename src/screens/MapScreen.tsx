import { SafeAreaView, StyleSheet, TextInput, View, Text } from 'react-native'
import React, { useState } from 'react'
import MapView, { LatLng, Marker } from 'react-native-maps'
import Button from '../components/Button';

export default function MapScreen() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("")
    const [location, setLocation] = useState<LatLng>({
        latitude: 0,
        longitude: 0
    })

    const getLocationCoordinate = (latLng: LatLng) => {
        setLocation({ latitude: latLng.latitude, longitude: latLng.longitude })
    }

    const addAdress = () => {
        const markerValue = {
            latitude: location.latitude,
            longitude: location.longitude,
            title,
            description

        }
        console.log('marker :>> ', markerValue);
    }

    return (

        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            <View style={styles.textInputContainer}>
                <Text style={styles.inputLabel}>Place Name</Text>
                <TextInput style={styles.input} placeholder='Adress' value={title} onChangeText={setTitle} />
                <Text style={styles.inputLabel}>Description</Text>
                <TextInput style={styles.input} placeholder='Description' value={description} onChangeText={(text) => setDescription(text)} />
            </View>
            <Button style={styles.button} title={"Add New Place"} onPress={addAdress} />
            <MapView
                style={styles.map}
                region={{
                    longitude: 29.053,
                    latitude: 41.108,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01
                }}
                onLongPress={(event) =>
                    getLocationCoordinate(event.nativeEvent.coordinate)
                }
            >
                <Marker coordinate={location} title='test' description='test2' />
            </MapView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    map: {
        flex: 7,
        marginTop: 20

    },
    textInputContainer: {
        flex: 2,
        padding: 10,
        backgroundColor: "white",
        gap: 5,
        marginBottom: 20
    },
    inputLabel: {
        marginLeft: "3%",
        marginBottom: "-1%",
        marginTop: "5%"
    },
    input: {
        padding: 7,
        borderRadius: 10,
        borderColor: "blue",
        borderWidth: 1
    },
    button: {

    }
})