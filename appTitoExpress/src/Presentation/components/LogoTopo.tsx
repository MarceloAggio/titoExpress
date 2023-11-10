import React from 'react'
import { Image, StyleSheet } from 'react-native'

export default function LogoTopo(){
    return (
        <Image style={styles.logoImg} source={require('../../../assets/logo.png')} />
    )
}

const styles = StyleSheet.create({
    logoImg: {
        alignSelf: 'center',
        marginTop: '20%',
    },
});