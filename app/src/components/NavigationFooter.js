import React from  'react';
import {StyleSheet, View} from 'react-native';

const NavigationFooter = (props) => {
    const {children} = props;
    return (
        <View style={styles.container}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {        
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
});

export default NavigationFooter;