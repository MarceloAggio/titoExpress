import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, Image, TextInput, Button, ToastAndroid } from 'react-native';
import { RouderButton } from '../../components/RouderButton';
import LogoTopo from '../../components/LogoTopo';
import { Input } from '../../components/Input';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import HomeViewModel from './ModelView';
import App from '../../../../App';

export const HomeScreen = () => {
    return (
        <View style={styles.todo}>
                    <LogoTopo />
                
                <View style={styles.caixaInput}>
                    <Input Place='E-mail' />
                    <Input Place='Senha' />
                </View>
                <View style={styles.btn}>
                    <RouderButton lblButton='Entrar' onPress={  () => ToastAndroid.show('Sucesso!', ToastAndroid.SHORT)} />
                </View>
                <View style={styles.links}> 
                    <Text style={styles.link}>Esqueci a Senha</Text>
                    <Text style={styles.link}>Criar Conta</Text>
                </View>
        </View>
    );
}

const styles = StyleSheet.create({
    todo: {
        flex: 1,
        backgroundColor: '#f0f0f0',
    },
    btn:{
        marginTop: 20,
    },
    caixaInput:{
        height: 100,
        marginTop: 40, 
        marginBottom: 20, 
    },
    links:{
        textAlign: 'center',
        marginTop: 200,
        height: 100, 
        color: 'black'
    },
    link:{
        textAlign: 'center',
    }
});