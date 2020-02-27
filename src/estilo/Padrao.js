import { StyleSheet, Platform } from 'react-native';
import styled, {css} from 'styled-components/native';

export const LocationBox = styled.View`
    background: #FFF;
    shadow-color: #000;
    shadow-offset: 0 0;
    shadow-opacity: 0.1;
    elevation: 1;
    border: 1px solid #ddd;
    border-radius: 3px;
    flex-direction: row;

   ${Platform.select({
    android: css`
       margin-top: 20px;
   `,
    ios: css`
      margin-top: 10px;
      margin-left: 10px;
    `
   })}
  `;

  

export const LocationText = styled.Text` 
   margin: 8px 10px;
   font-size: 14px;
   color: #333;
`;


export const LocationTimeBox = styled.View`
   background: #222;
   padding: 3px 8px;
`;


export const LocationTimeText = styled.Text`
text-align: center;
font-size: 12px;
color: #fff;
`;


export const LocationTimeTextSmall = styled.Text`   
   text-align: center;
   font-size: 10px;
   color: #fff;
`;

export const Back = styled.TouchableOpacity`
    position: absolute;
    margin-left: 10px;
    top: ${Platform.select({ ios: 60, android: 40})}
`;



export default StyleSheet.create({
    ex: {
         paddingHorizontal: 15,
         marginVertical: 5,
         borderRadius: 10,
         borderWidth: 2,
         borderColor:'#fff',
         fontSize: 24,
         fontWeight: 'bold',
         color: '#fff',
    },
      aluno: {
      paddingHorizontal: 15,
      marginVertical: 5,
      fontSize: 24,
      fontWeight: 'bold',
      color: '#fff',
      textAlign: 'left'
      
 },
 containerAluno: {
  flex: 1,
  backgroundColor: '#781984',
  borderWidth: 0.5,
  borderColor: '#222',
  paddingHorizontal: 10,
  height: 50,

  alignItems:'center',
  flexDirection: 'row',
  justifyContent: 'space-between',
},
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#781984',
      },
      containerCampoMinado: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#781984',
      },
      welcome: {
        fontSize: 40,
        textAlign: 'center',
        margin: 10,
        color: '#fff',
      },
      instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,    
      },
      input: {
        height: 70,
        fontSize: 40,
        borderColor: 'grey',
        borderWidth: 1
      },
      fonte40: {
        fontSize: 40,
        color: 'black'
        
      },
        container2: {
          flex: 1,
          justifyContent: 'center'
        },
        horizontal: {
          flexDirection: 'row',
          justifyContent: 'space-around',
          padding: 10
        }
});