import React from  'react';
import {StyleSheet, View} from 'react-native';

const FormRow = (props) => {
    const {children} = props;
    return (
        <View style={styles.container}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 50,
        backgroundColor: '#00B5FF',
        marginTop: 100
    }
});

export default FormRow;