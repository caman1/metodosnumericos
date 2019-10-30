import React, { Component } from 'react';
import {
    StyleSheet,
    TextInput,
    View,
    Text,
    Image,
    ImageBackground,
    Button,
    TouchableHighlight,
    Alert
} from 'react-native';


export default class Inicio extends React.Component {

    static navigationOptions = {

        header: null,

    };

    render() {
        return (
            <ImageBackground source={require('./Imagenes/Fondo.jpg')} style={styles.container}>

                <Text style={{ fontSize: 30, color: 'white', margin: 40 }}>Inicio</Text>

                    <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.props.navigation.navigate('InterpolacionLineal')}>
                        <Text style={styles.loginText}>Interpolación lineal</Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.props.navigation.navigate('InterpolacionCuadratica')}>
                        <Text style={styles.loginText}>Interpolación cuadrática</Text>
                    </TouchableHighlight>
                    
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: "100%",
        height: "100%",
        flexWrap: 'wrap',
    },
    inputContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        borderBottomWidth: 1,
        width: "80%",
        height: "7%",
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputs: {
        height: "80%",
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
        flex: 1,
    },
    inputIcon: {
        width: "7%",
        height: "38%",
        marginLeft: 15,
        justifyContent: 'center'
    },
    buttonContainer: {
        height: "6%",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: "50%",
        borderRadius: 30,
    },
    loginButton: {
        backgroundColor: "#00b5ec",
    },
    loginText: {
        color: 'white',
    }
});
