import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';

const AccountScreen = () => {
    const { signout } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <Text>Account Screen</Text>
            <Spacer />
            <Button title='Sign Out' onPress={signout} />
            <Spacer />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        margin: 20
    }
});

export default AccountScreen;