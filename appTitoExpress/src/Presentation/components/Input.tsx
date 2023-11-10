import React from 'react'
import { StyleSheet,  TextInput, View } from 'react-native'

interface Props {
  Place: string,
}

export const Input = ( {Place} :Props) => {
  return (
    <View style={styles.CaixaForm}>
        <TextInput style={styles.txtForm} placeholder={Place} keyboardType='default' ></TextInput>
    </View>
  )
}


const styles = StyleSheet.create({
    txtForm:{
        width: '85%',
        height: 45,
        backgroundColor: 'white',
        borderRadius: 50,
        paddingLeft: 10,
        marginTop: 30,
        borderColor: 'black',
        borderStyle: 'solid',
        borderWidth: 1,
    },
    CaixaForm: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})