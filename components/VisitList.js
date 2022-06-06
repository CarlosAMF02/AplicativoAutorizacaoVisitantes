import React from 'react'
import {
    View,
    FlatList,
    Text,
    StyleSheet
} from 'react-native'

export default class VisitList extends React.Component {
    render(){
        return(
            <View style={estilos.visitsList}>
            <FlatList 
              data={this.props.visitantes}
              keyExtractor={(item) => item.id}
              renderItem={({item}) => (
                <Text 
                  style={item.authorization==true?[estilos.visitsName,estilos.visitsNameApproved]:[estilos.visitsName,estilos.visitsNameNotApproved]}>
                    {item.name + (item.authorization == true?" autorizado!":" não autorizado!")}
                </Text>
              )}
            />
          </View>
        )
    }
}

const estilos = StyleSheet.create({
    visitsList : {
      marginTop : 34
    },
    visitsName : {
      alignSelf : 'center',
      fontSize : 16
    },
    visitsNameApproved : {
      color : '#008000'
    },
    visitsNameNotApproved : {
      color : '#FF0000'
    }
})