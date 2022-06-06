import React from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'

import VisitList from './components/VisitList'

export default class App extends React.Component {

  /**
   * Esta funcao tem como objetivo limpar o campo nome do formulario
   */
  limpar = () => {
    this.setState({nome : ''})
  }

  /**
   * Esta funcao tem como objetivo alterar o estado inForm do state 
   */
  solicitarAutorizacao = () => {
    if (this.state.nome == '') {
      alert("Informe o nome.")
      return
    }
    this.setState({inForm : false})
    
  }

  /**
   * Esta funcao tem como objetivo autorizar ou nao um visitante
   * @param {boolean} tipoAutorizacao 
   * @param {String} nome 
   */
  autorizacao = (tipoAutorizacao, nome) => {
    let listaVisitantes = this.state.visitantes
    listaVisitantes.push({
      id : this.state.visitantes.length+1,
      name : nome,
      authorization : tipoAutorizacao
    })
    this.setState({visitantes : listaVisitantes, inForm : true, nome : ''})
  }

  state = {
    inForm : true,
    visitantes : [],
    nome : ''
  }

  render() {
    return(
      <View style={estilos.app}>
        <Text style={estilos.title}>Prova Semestral</Text>
        {this.state.inForm == true && (
          <View>
            <TextInput onChangeText={(text) => this.setState({nome : text})} value={this.state.nome} style={estilos.inputName} placeholder='Nome'/>
            <View style={estilos.formButtons}>
              <TouchableOpacity onPress={() => this.limpar()} style={estilos.buttons}>Limpar</TouchableOpacity>
              <TouchableOpacity onPress={() => this.solicitarAutorizacao()} style={[estilos.buttons, estilos.authButton]}>Solicitar Autorização</TouchableOpacity>
            </View>
          </View>
        )}
        {(this.state.inForm == false && (
          <View>
            <Text style={estilos.authorizationName}>{this.state.nome}</Text>
            <View style={estilos.authorizationButtons}>
              <TouchableOpacity style={estilos.buttons} onPress={() => this.autorizacao(false, this.state.nome)}>Não Autorizar</TouchableOpacity>
              <TouchableOpacity style={[estilos.buttons, estilos.authButton]} onPress={() => this.autorizacao(true, this.state.nome)}>Autorizar</TouchableOpacity>
            </View>
          </View>
        ))}
        {(this.state.inForm == true && this.state.visitantes.length > 0 &&
          <VisitList visitantes = {this.state.visitantes} />
        )}
      </View>
    )
  }
}

const estilos = StyleSheet.create({
  app : {
    backgroundColor : '#363636',
    flex : 1,
    padding : 8 
  },
  authButton : {
    marginLeft: 16
  },
  authorizationButtons : {
    display : 'flex',
    flexDirection : 'row',
    alignSelf : 'center'
  },
  authorizationName : {
    alignSelf : 'center',
    color : '#FFFAFA',
    fontSize : 16,
    paddingBottom : 24
  },
  buttons : {
    backgroundColor : '#E91C5D',
    borderRadius : 8,
    padding: 8,
    marginTop : 32
  },
  formButtons : {
    display : 'flex',
    flexDirection : 'row',
    justifyContent : 'flex-end'
  },
  inputName : {
    backgroundColor : '#A9A9A9',
    color : '#FFFAFA',
    placeholderTextColor : '#D3D3D3',
    padding: 8
  },
  title : {
    fontSize : 32,
    color : '#E91C5D',
    textAlign : 'center',
    margin : 24,
    paddingBottom : 24
  }
})