/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
// import { Icon } from 'react-native-elements'
import {
    Platform,
    View,
    Text,
    Image,
    TouchableOpacity

} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import {Actions} from 'react-native-router-flux';

export default class ListProduct extends Component {


  constructor(props) {
    super(props);

  }

  render() {
    return (
        
     <TouchableOpacity style={{marginTop:10,
      borderRadius:10,
      elevation:10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.5,
      shadowRadius: 15, 
      }}  onPress={() => Actions.push('ProductDetail',{data:this.props.data})}>
         <Image source={{uri:this.props.data.image}} style={{width:'100%',height:250}} /> 
         <View style={{padding:10,backgroundColor:'#F5FCFD'}}>
           <View style={{flex:1,flexDirection:'row',justifyContent:'space-between'}}>

             <View >
              <Text  Text style={{color:'#6CC3ED',fontWeight:'800',fontSize:24}}>{this.props.data.price} บาท</Text>
              <View style={{flex:1,flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={{color:'#6CC3ED',fontSize:14,textDecorationLine:'line-through',marginRight:10}}>{this.props.data.price} บาท </Text>
                <View style={{fontSize:12,fontWeight:'600',borderRadius:2,paddingTop:1,paddingBottom:1,paddingLeft:5,paddingRight:5,backgroundColor:'#DC5C4C',height:22,alignItems:'center'}}><Text style={{color:'#fff'}}>- {this.props.data.count} %</Text></View>
              </View>
              
             </View>
             <View style={{borderRadius:8,padding:10,backgroundColor:'#6CC3ED',alignItems:'center'}}>
              <Icon name="plus-box-multiple" size={25} color="white" />
              <Text style={{color:'#fff',fontSize:12}}>เลือกสินค้า</Text>
             </View>

           </View>
            <Text style={{fontWeight:'600',fontSize:20}}>{this.props.data.brand} แอร์ผนัง</Text>
            <Text style={{fontSize:12,color:'#ACACAC'}}>รุ่น {this.props.data.gen}</Text>
            <Text style={{fontSize:12,color:'#ACACAC'}}>{this.props.data.detail}</Text>
         </View>
     </TouchableOpacity>
       
    )
  }
}
