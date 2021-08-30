import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { NavigationEvents } from 'react-navigation';

const SignupScreen = ({ navigation }) => {
    const { state, signup, clearErrorMessage } = useContext(AuthContext);
    
    return (
    <View style={styles.container}>
        <NavigationEvents onWillBlur={clearErrorMessage} />
        <AuthForm
            headerText='Sign Up for tracker'
            errorMessage={state.errorMessage}
            submitButtonText='Sign Up'
            onSubmit={signup}
        />
        <NavLink 
            routeName='Signin'
            text='Dont have an account? Sign In instead!'
        />
    </View>)
};

SignupScreen.navigationoptions = () => {
    return {
        headerShown: false
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200,
        margin: 10
    }
});

export default SignupScreen;