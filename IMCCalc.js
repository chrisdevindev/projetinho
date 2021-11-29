import React from "react";
import { Text, View } from "react-native";
import Message from "./IMCMsg";

const calcularIMC = (props) => {
  const imc = props.peso / (props.altura * props.altura);
  if (props.altura != null && props.peso != null)
    return (
      <View>
        <Text style={{ fontSize: 26 }}>
          IMC: {imc}
        </Text>
        <Message IMC={imc}/>
      </View>
    );
  return null;
};

export default calcularIMC;
