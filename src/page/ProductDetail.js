/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
// import { Icon } from 'react-native-elements'
import {
    Platform,
    View,
    Text,
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native';
import {baseStyle} from '../style/base'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {Actions} from 'react-native-router-flux';
import ListProduct from '../component/ListProduct'
import {ProductList} from '../services/Product'
export default class DetailProduct extends Component {


  constructor(props) {
    super(props);

  }

  render() {
    return (
        <ScrollView style={baseStyle.bodyStyle}>

            <View style={{height:300,backgroundColor:'#fff',padding:10}}>
                <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',marginBottom:10}}>
                    <View ></View>
                    <TouchableOpacity onPress={() => Actions.push('Product')}><Icon name="close" size={25}  style={[baseStyle.fontPrimary,baseStyle.borderIcon,{marginRight:10,padding:5,}]} /></TouchableOpacity>
                </View>
                <Image source={{uri:this.props.data.image}} style={{width:'100%',height:250}} /> 
            </View>

            <View style={{backgroundColor:'#fff',padding:10,marginTop:10}}>
                <View >
                    <Text  Text style={{color:'#6CC3ED',fontWeight:'800',fontSize:24}}>{this.props.data.price} บาท</Text>
                    <View style={{flex:1,flexDirection:'row',justifyContent:'flex-start'}}>
                        <View style={{width:90}}>
                            <Text style={{color:'#6CC3ED',fontSize:14,textDecorationLine:'line-through',marginRight:10}}>{this.props.data.price} บาท </Text>
                        </View>
                        <View style={{width:50,fontSize:12,fontWeight:'600',borderRadius:2,paddingTop:1,paddingBottom:1,paddingLeft:5,paddingRight:5,backgroundColor:'#DC5C4C',height:22,alignItems:'center'}}><Text style={{color:'#fff'}}>- {this.props.data.count} %</Text></View>
                    </View>
                    <Text style={{fontWeight:'600',fontSize:20}}>{this.props.data.brand} แอร์ผนัง</Text>
                    <Text style={{fontSize:14,color:'#ACACAC'}}>รุ่น {this.props.data.gen}</Text>
                    <Text style={{fontSize:14,color:'#ACACAC'}}>{this.props.data.detail}</Text>

                    <View style={{flex:1,flexDirection:'row',justifyContent:'flex-start',marginTop:10}}>

                        <Icon name="star" size={20} color="#FFC250" style={{marginTop:3}}/>
                        <Icon name="star" size={20} color="#FFC250" style={{marginTop:3}}/>
                        <Icon name="star" size={20} color="#FFC250" style={{marginTop:3}}/>
                        <Icon name="star" size={20} color="#FFC250" style={{marginTop:3}}/>
                        <Icon name="star" size={20} color="#F1F9FF" style={{marginTop:3}}/>
                        <Text style={{fontSize:20,color:'#000',marginLeft:8,fontWeight:'600'}}>4.0<Text style={{fontSize:14,color:'#000'}}>/5</Text></Text>
                        
                    </View>

                    <View style={{flex:1,flexDirection:'row',justifyContent:'flex-start',marginTop:10}}>
                        <Icon name="shield-check" size={20} color="#49C5F1" style={{marginTop:3}}/>
                        <Text style={{marginLeft:2,marginTop:2,fontWeight:'600'}}>ของแท้ 100%</Text>
                        <Icon name="currency-usd-circle" size={20} color="#FFC250" style={{marginTop:3,marginLeft:3}}/>
                        <Text style={{marginLeft:2,marginTop:2,fontWeight:'600'}}>คืนเงิน/คืนสินค้าภายใน 15 วัน</Text>
                    </View>


                </View>
            </View>

            <View style={{backgroundColor:'#fff',padding:10,marginTop:10}}>
                <View style={{flex:1,flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={{fontSize:18,fontWeight:'600'}}>ราคาจากร้านต่างๆ</Text>
                    <View style={{flex:1,flexDirection:'row',justifyContent:'flex-end'}}>
                        <Text style={{fontSize:14,fontWeight:'600',color:'#49C5F1',marginTop:2}}>
                            ดูทั้งหมด 
                        </Text>
                        <Icon name="chevron-right" size={20} color="#49C5F1" style={{marginTop:2}}/>
                    </View>
                </View>

                <View style={{marginTop:20,flex:1,flexDirection:'row',justifyContent:'flex-start'}}>
                    <View style={{width:60,height:60,borderRadius:50,padding:10,marginRight:20,borderWidth:1,borderColor:'#f7f7f7'}}>
                        <Image source={{uri:'http://www.smairsale.com/images/logo-smairsale.png'}} style={{width:'100%',height:'100%',resizeMode:'contain'}} /> 
                    </View>
                    <View>
                        <Text style={{fontWeight:'600',fontSize:16,marginTop:5}}>SM AIR</Text>
                        <View style={{flex:1,flexDirection:'row',justifyContent:'flex-start'}}>
                            <Icon name="star" size={10} color="#FFC250" style={{marginTop:3,marginRight:3}}/>
                            <Icon name="star" size={10} color="#FFC250" style={{marginTop:3,marginRight:3}}/>
                            <Icon name="star" size={10} color="#FFC250" style={{marginTop:3,marginRight:3}}/>
                            <Icon name="star" size={10} color="#FFC250" style={{marginTop:3,marginRight:3}}/>
                            <Icon name="star" size={10} color="#F1F9FF" style={{marginTop:3,marginRight:3}}/>
                        </View>
                    </View>
                    
                    <Text style={{textAlign: 'right',flex:0.98,flexDirection:'row',fontWeight:'600',fontSize:18,marginTop:5}}>{this.props.data.price} บาท</Text>
                </View>

                <View style={{marginTop:20,flex:1,flexDirection:'row',justifyContent:'flex-start'}}>
                    <View style={{width:60,height:60,borderRadius:50,padding:10,marginRight:20,borderWidth:1,borderColor:'#f7f7f7'}}>
                        <Image source={{uri:'http://www.newcoolingair.com/air/img/logo-sbairs-153.png'}} style={{width:'100%',height:'100%',resizeMode:'contain'}} /> 
                    </View>
                    <View>
                        <Text style={{fontWeight:'600',fontSize:16,marginTop:5}}>New Cooling</Text>
                        <View style={{flex:1,flexDirection:'row',justifyContent:'flex-start'}}>
                            <Icon name="star" size={10} color="#FFC250" style={{marginTop:3,marginRight:3}}/>
                            <Icon name="star" size={10} color="#FFC250" style={{marginTop:3,marginRight:3}}/>
                            <Icon name="star" size={10} color="#FFC250" style={{marginTop:3,marginRight:3}}/>
                            <Icon name="star" size={10} color="#FFC250" style={{marginTop:3,marginRight:3}}/>
                            <Icon name="star" size={10} color="#F1F9FF" style={{marginTop:3,marginRight:3}}/>
                        </View>
                    </View>
                    
                    <Text style={{textAlign: 'right',flex:0.98,flexDirection:'row',fontWeight:'600',fontSize:18,marginTop:5}}>{this.props.data.price} บาท</Text>
                </View>

                <View style={{marginTop:20,flex:1,flexDirection:'row',justifyContent:'flex-start'}}>
                    <View style={{width:60,height:60,borderRadius:50,padding:10,marginRight:20,borderWidth:1,borderColor:'#f7f7f7'}}>
                        <Image source={{uri:'https://scontent.fbkk10-1.fna.fbcdn.net/v/t1.0-9/p960x960/42250790_847962255591825_1600443133911367680_o.jpg?_nc_cat=103&_nc_sid=85a577&_nc_eui2=AeGk4drI96wq8TozgrH8FJmCtnwUzUytP7O2fBTNTK0_s-pYMFP_f-x-QzjPGMZKXOTpkvOV_-YWLKdkxayA1pE_&_nc_ohc=FV1d8s0kyhQAX9Gs9vb&_nc_ht=scontent.fbkk10-1.fna&_nc_tp=6&oh=83400f4d84e35312e9203c7b3a34d378&oe=5F4EE95E'}} style={{width:'100%',height:'100%',resizeMode:'contain'}} /> 
                    </View>
                    <View>
                        <Text style={{fontWeight:'600',fontSize:16,marginTop:5}}>Airmany</Text>
                        <View style={{flex:1,flexDirection:'row',justifyContent:'flex-start'}}>
                            <Icon name="star" size={10} color="#FFC250" style={{marginTop:3,marginRight:3}}/>
                            <Icon name="star" size={10} color="#FFC250" style={{marginTop:3,marginRight:3}}/>
                            <Icon name="star" size={10} color="#FFC250" style={{marginTop:3,marginRight:3}}/>
                            <Icon name="star" size={10} color="#FFC250" style={{marginTop:3,marginRight:3}}/>
                            <Icon name="star" size={10} color="#F1F9FF" style={{marginTop:3,marginRight:3}}/>
                        </View>
                    </View>
                    
                    <Text style={{textAlign: 'right',flex:0.98,flexDirection:'row',fontWeight:'600',fontSize:18,marginTop:5}}>{this.props.data.price} บาท</Text>
                </View>

            </View>

            <View style={{marginTop:10,padding:10,backgroundColor:'#fff'}}>
                <Text style={{fontSize:18,fontWeight:'600'}}>รายละเอียดสินค้า</Text> 
                <Text style={{color:'#ACACAC'}}>Brand, Model, Air Conditioner Rated Capacity (HP)</Text>

                <Text style={{fontSize:16,fontWeight:'600',marginTop:20}}>Brand</Text> 
                <Text style={{color:'#ACACAC'}}>{this.props.data.brand}</Text>

                <Text style={{fontSize:16,fontWeight:'600',marginTop:20}}>Model</Text> 
                <Text style={{color:'#ACACAC'}}>{this.props.data.gen}</Text>

                <Text style={{fontSize:16,fontWeight:'600',marginTop:20}}>Air Coditioner Rated. Capacity (BTUs)</Text> 
                <Text style={{color:'#ACACAC'}}>13307</Text>

                <View style={{marginTop:20,padding:10,backgroundColor:'#F1F9FF',flex:1,flexDirection:'row',justifyContent:'center'}}>
                    <Text style={{color:'#6CC3ED',textAlign:'center',fontSize:16}}>เพิ่มเติม </Text>
                    <Icon name="chevron-down" size={22} color="#6CC3ED" />
                </View>
            </View>


            <View style={{marginTop:10,padding:10,backgroundColor:'#fff'}}>
                <View style={{flex:1,flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={{fontSize:18,fontWeight:'600'}}>Rating & Reviews (21)</Text>
                    <View style={{flex:1,flexDirection:'row',justifyContent:'flex-end'}}>
                        <Text style={{fontSize:14,fontWeight:'600',color:'#49C5F1',marginTop:2}}>
                            ดูทั้งหมด 
                        </Text>
                        <Icon name="chevron-right" size={20} color="#49C5F1" style={{marginTop:2}}/>
                    </View>
                </View>
                <Text style={{color:'#ACACAC',marginTop:10}}>Brand, Model, Air Conditioner Rated Capacity (HP)</Text>

                <View style={{flex:1,flexDirection:'row',justifyContent:'flex-start',marginTop:10}}>
                    <View style={{backgroundColor:'#CDD4D9',borderRadius:50,padding:8,marginRight:12}}>
                        <Icon name="account" size={50} color="#fff" />
                    </View>
                    <View >
                        <Text style={{fontWeight:'600',marginTop:10,fontSize:14}}>นภัสสร พ.</Text>
                        <Text style={{marginTop:2,fontSize:14,color:'#ACACAC'}}>กรุงเทพมหานคร</Text>
                    </View>
                    <View style={{flex:0.98,flexDirection:'row',justifyContent:'flex-end',fontWeight:'600',fontSize:18,marginTop:5}}>
                        <Icon name="star" size={15} color="#FFC250" />
                        <Icon name="star" size={15} color="#FFC250" />
                        <Icon name="star" size={15} color="#FFC250" />
                        <Icon name="star" size={15} color="#FFC250" />
                        <Icon name="star" size={15} color="#F1F9FF" />
                    </View>
                </View>
                <Text style={{marginTop:5}}>ได้รับสินค้า เรียบร้อยเเล้วค่ะ เเอร์เย็น สบายมากค่ะ</Text>

                <View style={{flex:1,flexDirection:'row',justifyContent:'flex-start',marginTop:10}}>
                    <View style={{backgroundColor:'#CDD4D9',borderRadius:50,padding:8,marginRight:12}}>
                        <Icon name="account" size={50} color="#fff" />
                    </View>
                    <View >
                        <Text style={{fontWeight:'600',marginTop:10,fontSize:14}}>นภัสสร พ.</Text>
                        <Text style={{marginTop:2,fontSize:14,color:'#ACACAC'}}>กรุงเทพมหานคร</Text>
                    </View>
                    <View style={{flex:0.98,flexDirection:'row',justifyContent:'flex-end',fontWeight:'600',fontSize:18,marginTop:5}}>
                        <Icon name="star" size={15} color="#FFC250" />
                        <Icon name="star" size={15} color="#FFC250" />
                        <Icon name="star" size={15} color="#FFC250" />
                        <Icon name="star" size={15} color="#FFC250" />
                        <Icon name="star" size={15} color="#F1F9FF" />
                    </View>
                </View>
                <Text style={{marginTop:5}}>ได้รับสินค้า เรียบร้อยเเล้วค่ะ เเอร์เย็น สบายมากค่ะ</Text>

                <View style={{flex:1,flexDirection:'row',justifyContent:'flex-start',marginTop:10}}>
                    <View style={{backgroundColor:'#CDD4D9',borderRadius:50,padding:8,marginRight:12}}>
                        <Icon name="account" size={50} color="#fff" />
                    </View>
                    <View >
                        <Text style={{fontWeight:'600',marginTop:10,fontSize:14}}>นภัสสร พ.</Text>
                        <Text style={{marginTop:2,fontSize:14,color:'#ACACAC'}}>กรุงเทพมหานคร</Text>
                    </View>
                    <View style={{flex:0.98,flexDirection:'row',justifyContent:'flex-end',fontWeight:'600',fontSize:18,marginTop:5}}>
                        <Icon name="star" size={15} color="#FFC250" />
                        <Icon name="star" size={15} color="#FFC250" />
                        <Icon name="star" size={15} color="#FFC250" />
                        <Icon name="star" size={15} color="#FFC250" />
                        <Icon name="star" size={15} color="#F1F9FF" />
                    </View>
                </View>
                <Text style={{marginTop:5}}>ได้รับสินค้า เรียบร้อยเเล้วค่ะ เเอร์เย็น สบายมากค่ะ</Text>

                <View style={{flex:1,flexDirection:'row',justifyContent:'flex-start',marginTop:10}}>
                    <View style={{backgroundColor:'#CDD4D9',borderRadius:50,padding:8,marginRight:12}}>
                        <Icon name="account" size={50} color="#fff" />
                    </View>
                    <View >
                        <Text style={{fontWeight:'600',marginTop:10,fontSize:14}}>นภัสสร พ.</Text>
                        <Text style={{marginTop:2,fontSize:14,color:'#ACACAC'}}>กรุงเทพมหานคร</Text>
                    </View>
                    <View style={{flex:0.98,flexDirection:'row',justifyContent:'flex-end',fontWeight:'600',fontSize:18,marginTop:5}}>
                        <Icon name="star" size={15} color="#FFC250" />
                        <Icon name="star" size={15} color="#FFC250" />
                        <Icon name="star" size={15} color="#FFC250" />
                        <Icon name="star" size={15} color="#FFC250" />
                        <Icon name="star" size={15} color="#F1F9FF" />
                    </View>
                </View>
                <Text style={{marginTop:5}}>ได้รับสินค้า เรียบร้อยเเล้วค่ะ เเอร์เย็น สบายมากค่ะ</Text>

                <View style={{marginTop:20,padding:10,flex:1,flexDirection:'row',justifyContent:'flex-start',backgroundColor:'#F7F7F7'}}>
                    <Icon name="message" size={25} color="#6CC3ED" style={{marginRight:10}}/>
                    <Text style={{color:'#6CC3ED'}}>คอมเม้นของคุณ...</Text>
                </View>
                

            </View>

            <View style={{paddingTop:20,flex:1,flexDirection:'row',justifyContent:'center'}}>
                <Text style={{color:'#000',fontSize:14,fontWeight:'600'}}> - - - - - - - - - - - - - - - - - - - -  สินค้าใกล้เคียง - - - - - - - - - - - - - - - - - - - - - -</Text>
            </View>


            <View style={{paddingLeft:20,paddingRight:20,paddingTop:10,marginBottom:20}}>

                {ProductList.map((el,i) => {
                    return <ListProduct data={el} key={i}></ListProduct>
                })}
            </View>

        </ScrollView>
        
    )
  }
}
