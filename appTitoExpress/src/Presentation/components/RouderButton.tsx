import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

interface Props {
    onPress: () => void,
    lblButton: string,
}

export const RouderButton = ({ onPress, lblButton }: Props) => {
    return (
        <TouchableOpacity style={styles.roudedButton}>
            <Text style={styles.lblButton}>{lblButton}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    roudedButton: {
        width: '100%',
        height: 40,
        backgroundColor: '#f00',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15
    },
    lblButton: {
        color: '#fff',
        fontWeight: 'bold',
        textTransform: 'uppercase',
    }
})