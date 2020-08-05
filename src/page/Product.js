import React, {Component} from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList
} from 'react-native';



import {baseStyle,defaultFont} from '../style/base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import ListProduct from '../component/ListProduct'
import {ProductList} from '../services/Product'


export default class Product extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ProductList: ProductList,
        };
        this.onChangeText = this.onChangeText.bind(this)
    }
    
    onChangeText(val){
        let result = ProductList.filter(el=>{
            return el.brand
            .toString()
            .toLowerCase()
            .indexOf(val.toLowerCase()) >= 0
        })
        this.setState(old=>{
            return {ProductList:result}
        })
        // this.state.ProductList = result
    }

    renderItem(item){
        return(
            <ListProduct data={item} ></ListProduct>
        )
    }
    
    render(){
        return(
            <ScrollView>
                <View style={baseStyle.bodyStyle}>
                    {/* header */}
                    <View style={{height:100,backgroundColor:'white',padding:20}} >
                        {/* top icon header */}
                    <View style={baseStyle.clearFix}> 

                        <View style={[baseStyle.floatLeft]}>
                        <Icon name="chevron-left" size={30}  style={[baseStyle.fontPrimary,baseStyle.borderIcon]} />
                        </View>

                        <View style={[baseStyle.floatRight,{textAlign:'right'}]}>
                        <Icon name="cart" size={25}  style={[baseStyle.fontPrimary,baseStyle.borderIcon,{marginRight:10,padding:5,}]} />
                        <Icon name="home" size={26}  style={[baseStyle.fontPrimary,baseStyle.borderIcon,{marginRight:10,padding:5,}]} />
                        </View>

                    </View>
                    {/* end top icon header */}

                    {/* address  */}
                    <View style={[{marginTop:10,fontWeight:'600'},baseStyle.clearFix]}>

                        <View style={[baseStyle.floatLeft],{width:20}}>
                        <Icon name="map-marker" size={20} style={{color:'red'}}/> 
                        </View>

                        <View style={[baseStyle.floatLeft]}>
                        <Text style={{fontWeight:'800'}}>จัดส่งที่ </Text> 
                        <Text style={[baseStyle.fontPrimary,{fontWeight:'800'}]}>หมู่บ้านพลีโน่ สุขสวัสดิ์</Text> 
                        </View>
                    
                    </View>
                    {/* end address */}

                    </View>

                    

                    {/* body content */}
                    <View style={{height:'100%',backgroundColor:'white',padding:20,marginTop:10}} >
                        {/* box filter */}
                        <View style={{backgroundColor:'#f7f7f7',padding:5,borderRadius:5,height:40}}>
                        <View style={{flex:1,flexDirection:'row',justifyContent:'space-between'}}>
                            <View style={{width:30}}><Icon name="magnify" size={25} style={{color:'#a8a8ac'}}/></View>
                            <View style={{width:300}}>
                            <TextInput style={{textAlign:'left',height:'100%',padding:0,paddingLeft:10,color:'#a8a8ac',fontWeight:'600'}} placeholder="ค้นหาเครื่องปรับอากาศ" onChangeText={text => this.onChangeText(text)}/>
                            </View>
                            <View style={{width:30}}><Icon name="tune" size={25} style={{color:'#a8a8ac',width:30}}/></View>
                        </View>
                        </View>

                        <View>
                </View>

                {/* box  compare product*/}
                <View style={{height:32,marginTop:10}}>
                    <View style={{flex:1,flexDirection:'row',justifyContent:'flex-end'}}>
                        <TouchableOpacity style={{borderRadius:5,backgroundColor:'#f7f7f7',width:160,paddingTop:5,paddingBottom:1,paddingLeft:10,paddingRight:10}}>
                            <View style={{flex:1,flexDirection:'row',justifyContent:'space-between'}}>
                            <Icon name="compare-horizontal" size={20} style={[baseStyle.fontPrimary,{width:25}]}/>
                            <Text style={{color:'#000',marginTop:1,fontWeight:'600',fontFamily:defaultFont}}>เปรียบเทียบสินค้า</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    </View>

                    <FlatList 
                        data={this.state.ProductList}
                        renderItem={({item})=> this.renderItem(item)}
                     />


                    </View>
                </View>
            </ScrollView>
            
         )
    }
}
