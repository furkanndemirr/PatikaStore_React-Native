import { StyleSheet,Dimensions } from "react-native";


export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#dddddd',
        margin:10,
        padding:15,
        borderRadius:10,

    },
    image:{
        height: Dimensions.get('window').height / 4,
        width: '100%',
        borderRadius: 10,
        resizeMode: 'contain',
    },
    title:{
        fontSize:20,
        color:'black',
        fontWeight:'bold',
        margin:10
    },
    price:{
        marginLeft:10,

    },
    inStock: {
        color: 'red',
        marginTop: 5,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 17,
        marginLeft:10
    }
});