import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
    const { buttonStyle, TextStyle } = styles;
 
    return (
        <TouchableOpacity onPress={(onPress)} style={buttonStyle}>
            <Text style={TextStyle} >
               {children}
            </Text>
        </TouchableOpacity>
    );
}; 

const styles = {
    TextStyle: {
        alignSelf: 'center',
        color: '#088faf',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#088faf',
        marginLeft: 5,
        marginRight: 5
    }
};
export { Button };
