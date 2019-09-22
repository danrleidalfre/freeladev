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
        backgroundColor: '#00B5FF',        
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 5,
    }
});

export default NavigationFooter;