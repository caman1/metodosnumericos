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


export default class InterpolacionLineal extends React.Component {

  static navigationOptions = ({navigation}) => {

    return{

      title:'Interpolación Lineal',
      headerTitleStyle:{ color: 'white'},

      headerStyle:{
        backgroundColor:'#2C2E35',
        textAlign: 'center'
      },
      
      headerTintColor: 'white',
        
    };
  }; 

  constructor(props) {
    super(props);
    this.state = {
      x: 0.0,
      x0: 0.0,
      x1: 0.0,
      fx0: 0.0,
      fx1: 0.0,
      fx: '',
    }
  }

  componentDidMount(){
  }

  requesta = () => {

    if(this.state.fx0 != 0 || this.state.fx1 != 0 || this.state.x1 != 0 || this.state.x0 != 0){

      this.state.fx = Number(this.state.fx0) + Number(((this.state.fx1 - this.state.fx0)) / Number((this.state.x1 - this.state.x0))) * Number((this.state.x - this.state.x0))
  
      Alert.alert(
        'Resultado',
        'F(x) = '+this.state.fx,
        [
          {text: 'Ok'}
        ],
      );
      console.log(this.state.fx);

    }else{

      Alert.alert(
        'Error',
        'Por favo ingresar todos los valores',
        [
          {text: 'Ok'}
        ],
      );

    }

  }

  render() {
    return (
      <ImageBackground source={require('./Imagenes/Fondo.jpg')} style={styles.container}>

        <View style={{ width: "80%", justifyContent: 'space-evenly', height: "7%", flexDirection: 'row', }}>
          <View style={styles.inputContainer}>
            <TextInput style={styles.inputs}
              placeholder="x0"
              keyboardType="numeric"
              underlineColorAndroid='transparent'
              onChangeText={(x0) => this.setState({ x0 })} />
          </View>

          <View style={styles.inputContainer}>
            <TextInput style={styles.inputs}
              placeholder="F(x0)"
              keyboardType="numeric"
              underlineColorAndroid='transparent'
              onChangeText={(fx0) => this.setState({ fx0 })} />
          </View>

        </View>
        <View style={{ width: "80%", justifyContent: 'space-evenly', height: "7%", flexDirection: 'row', }}>
          <View style={styles.inputContainer}>
            <TextInput style={styles.inputs}
              placeholder="x1"
              keyboardType="numeric"
              underlineColorAndroid='transparent'
              onChangeText={(x1) => this.setState({ x1 })} />
          </View>

          <View style={styles.inputContainer}>
            <TextInput style={styles.inputs}
              placeholder="F(x1)"
              keyboardType="numeric"
              underlineColorAndroid='transparent'
              onChangeText={(fx1) => this.setState({ fx1 })} />
          </View>

        </View>
        <View style={{ width: "80%", justifyContent: 'space-evenly', height: "7%", flexDirection: 'row', }}>
          <View style={styles.inputContainer}>
            <TextInput style={styles.inputs}
              placeholder="x"
              keyboardType="numeric"
              underlineColorAndroid='transparent'
              onChangeText={(x) => this.setState({ x })} />
          </View>

        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.requesta()}>
          <Text style={styles.loginText}>Calcular F(x)</Text>
        </TouchableHighlight>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: "100%",
    height: "100%",
    flexWrap: 'wrap',
  },
  inputContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: "20%",
    height: "90%",
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
