import React from 'react'
import { Text } from 'react-native'


const message = (props) => {
    if(props.IMC<17) return <Text style={{ fontSize:25 }}>Muito abaixo do peso</Text>
    if(props.IMC>=17&&props.IMC<=18.49) return <Text style={{ fontSize:25 }}>Abaixo do Peso</Text>
    if(props.IMC>=18.5&&props.IMC<=24.99) return <Text style={{ fontSize:25 }}>Peso normal</Text>
    if(props.IMC>=25&&props.IMC<=29.99) return <Text style={{ fontSize:25 }}>Acima do peso</Text>
    if(props.IMC>=30&&props.IMC<=34.99) return <Text style={{ fontSize:25 }}>Obesidade 1</Text>
    if(props.IMC>=35&&props.IMC<=39.99) return <Text style={{ fontSize:25 }}>Obesidade 2 (severa)</Text>
    if(props.IMC>40) return <Text style={{ fontSize:25 }}>Obesidade 3 (mórbida)</Text>
} 

export default message