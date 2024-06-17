import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import MapView, { LatLng, Marker } from 'react-native-maps'

export default function MapScreen() {
    const [location, setLocation] = useState<LatLng>({
        latitude: 0,
        longitude: 0
    })

    const getLocationCoordinate = (latLng: LatLng) => {
        setLocation({ latitude: latLng.latitude, longitude: latLng.longitude })
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
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
                <Marker coordinate={location} pinColor='green' />
            </MapView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    map: {
        flex: 1
    }
})