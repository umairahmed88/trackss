import { requestPermissionsAsync } from 'expo-location';
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import Map from '../components/Map';

const TrackCreateScreen = () => {
    const [err, setErr] = useState(null);

    const startWatching = async () => {
        try {
            await requestPermissionsAsync();
        } catch (e) {
            setErr(e);
        } 
    };

    useEffect(() => {
        startWatching();
    }, []);
    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Text h3>Create a track</Text>
            <Map />
            {err ? <Text>Please enable location services</Text> : null}
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;