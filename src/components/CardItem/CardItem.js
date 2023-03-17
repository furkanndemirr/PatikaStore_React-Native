import React from "react";
import { Text,View,SafeAreaView,Image } from "react-native";
import style from './CardItem.style'

function CardItem (props){
    return(
    <SafeAreaView style={style.container}> 

        <Image style={style.image} source={{uri:props.store.imgURL}}></Image>
        <Text style={style.title}>{props.store.title}</Text>
        <Text style={style.price}>{props.store.price}</Text>
        <Text style={style.inStock}>{props.store.inStock === true ? '' : 'Stokta Yok'}</Text>

    </SafeAreaView>
    )
    
};
export default CardItem;