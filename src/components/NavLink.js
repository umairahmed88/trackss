import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import Spacer from './Spacer';

const NavLink = ({ navigation, text, routeName }) => {
    return <View>
        <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
            <Spacer />
        <Text style={styles.link}>{text}</Text>
        </TouchableOpacity>
    </View>
}

const styles =StyleSheet.create({
    link: {
        color: 'blue'
    }
});

export default withNavigation(NavLink);