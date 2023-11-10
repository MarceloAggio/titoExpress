import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from './src/Presentation/views/home/Home';
import { CadastroScreen } from './src/Presentation/views/telaCadastro/Cadastro';
import { Header } from 'react-native/Libraries/NewAppScreen';

export type RootStackParomList = {
    HomeScreen: undefined,
    CadastroScreen: undefined,
}

const Stack = createNativeStackNavigator<RootStackParomList>();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={
                {
                    headerShown: false,
                }
            }>

                <Stack.Screen
                    name='HomeScreen'
                    component={HomeScreen}
                />

                <Stack.Screen
                name='CadastroScreen'
                component={CadastroScreen}
                options = {{
                    headerShown: true,
                    title:'Novo usuário'

                }}
                />
            </Stack.Navigator>
        </ NavigationContainer>

    )
}

export default App;