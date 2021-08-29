import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';

const SignupScreen = ({ navigation }) => {
    return <View>
    <Text>Sign Up Screen</Text>
    <Button title='Go to Sign In' onPress={() => navigation.navigate('Signin')} />
    <Button title='Go to Main Flow' onPress={() => navigation.navigate('mainFlow')} />
    </View>
};

const styles = StyleSheet.create({});

export default SignupScreen;