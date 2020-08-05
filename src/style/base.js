import {Dimensions, StyleSheet} from 'react-native';
const defaultFont = 'Kanit';
const baseStyle = StyleSheet.create({
    bodyStyle:{
      backgroundColor:'#f7f7f7',
      fontFamily:defaultFont
    },
    borderIcon:{
      backgroundColor:'#f7f7f7',
      borderRadius:50,
      width: 35,
      padding:2,
    },
    bgContent:{
      backgroundColor:'white'
    },
    clearFix:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    floatLeft: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    floatRight: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    fontPrimary:{
      color:'#6cc3ed'
    },
    searchSection: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    input: {
      flex: 1,
    },
});
export {
  baseStyle,
  defaultFont
};
