import React from "react";
import { Dimensions, Image, StyleSheet, Text, View, } from "react-native";
import gustavo from "../../../assets/assets/gustavo.jpg";
const width =Dimensions.get("screen").width;

export default function Atividade() {
    return (
      <View style={estilos.container}>
        <Image source={gustavo} style={estilos.gustavo} />
        
        <View style={estilos.content}>
          <Text style={estilos.titulo}>Atividades</Text>
          <Text style={estilos.subtitulo}>
            Estou cursando o TDS do 3° ano do Erom Domingues
          </Text>
        </View>
      </View>
    );
  }
  

const estilos = StyleSheet.create({

Titulo:{
    color: "#464646",
    fontSize: 10,
    lineHeight: 42,
    fontWeight: "bold",

},
gustavo: {
    width: 100,
    height: 100,
    position: "center",
    alignSelf: "flex-start",
    marginLeft: 15,
    borderWidth: 3,
    borderColor: "black",
    borderRadius: 8,
},

})