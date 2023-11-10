import React, {useState} from "react";
import { View , StyleSheet, ImageBackground, Text, ToastAndroid, ScrollView} from 'react-native';
import {Input} from "../../components/Input";
import LogoTopo from "../../components/LogoTopo";
import { RouderButton } from "../../components/RouderButton";
import { RadioButton } from 'react-native-paper';


export const CadastroScreen = () => {

    const [value, setValue] = React.useState('first');

    return (
        <ScrollView>
            
            <ImageBackground style={styles.imagem} source={require("../../../assets/mesa.jpg")} resizeMode="cover">  
                <View style={styles.corpo}>
                    <View style={styles.teste}>
                    <LogoTopo />
                    <Input Place='Digite seu Email' />
                    <Input Place='Digite Nome' />
                    <Input Place='Digite a Senha' />
                    <Input Place='Confirme a Senha' />

                    <Text style={styles.cadastro}>Tipo de cadastro</Text>

                    <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                        <View  style={styles.container}>
                            <View style={styles.box}>
                                <RadioButton value="first" />
                                <Text style={styles.tituloCheck}>Cliente</Text>
                            </View>
                            <View style={styles.box}>
                                <RadioButton value="second" />
                                <Text style={styles.tituloCheck}>Vendedor</Text>
                            </View>
                            <View style={styles.box}>
                                <RadioButton value="third" />
                                <Text style={styles.tituloCheck}>Entregador</Text>
                            </View>
                        </View>
                    </RadioButton.Group>


                    <View style={styles.campo}>
                        <RouderButton lblButton='Cadastrar' onPress={  () => ToastAndroid.show('Sucesso!', ToastAndroid.SHORT) }/>
                    </View>

                    <View>
                        <Text style={styles.loginText}>Já Tenho conta</Text>
                    </View>
                    </View>
                </View>

            </ImageBackground>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    corpo:{
        width: '100%',
        height: 783,
    },
    teste:{
        height: '90%',
    },
    imagem:{
        flex: 1,
        tintColor: 'rgba(255,0,255,0.8)',
    },
    campo:{
        marginTop: 10,
        width: '80%',
        alignSelf: 'center'
    },
    cadastro:{
        marginTop: 20,
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
    },
    tituloCheck:{
        color: 'white',
    },
    container:{
        justifyContent: 'center',
        flexDirection: 'row',
    },
    box:{
        flexDirection: 'row',
        alignItems: 'center',
        color: 'white',
    },
    loginText:{
        color: 'white',
        textDecorationLine: 'underline',
        textAlign: 'center',
        marginTop: 15,
        fontSize: 20,
    }
});