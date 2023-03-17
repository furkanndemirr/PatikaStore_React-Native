import React from "react";
import { View,SafeAreaView,Text,StyleSheet,FlatList} from "react-native";
import CardItem from "./components/CardItem";
import data_json from "./data_json.json"

function App(){
  return(
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>
          FURKAN SHOP
        </Text>
      </View>
      <FlatList numColumns={2} data={data_json} renderItem={({item}) => <CardItem store={item}/>}/>
          
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container : {
    backgroundColor:'white',
    flex:1,
    paddingTop:10
  },
  title:{
    color:'purple',
    fontSize:25,
    fontWeight:'bold',
    margin:10,
    textAlign:'center'
  }
})
export default App;