import React, { Component } from "react";
import { View, TextInput } from "react-native";
import Calculadora from "./IMCCalc";

export default class CalculadoraApp extends Component {
  constructor(props) {
    super(props);
    this.state = { altura: null, peso: null };
  }

  render() {
    return (
      <View>
        <TextInput
          style={{ height: 60, fontSize: 32, marginTop: 80 }}
          placeholder="Digite a altura"
          onChangeText={(altura) =>
            this.setState({ altura })
          }
        />
        <TextInput
          style={{ height: 60, fontSize: 32 }}
          placeholder="Digite o peso"
          onChangeText={(peso) =>
            this.setState({ peso })
          }
        />
        <Calculadora altura={this.state.altura} peso={this.state.peso} />
      </View>
    );
  }
}
