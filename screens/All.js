import {useEffect,useState} from "react";
import { View, StyleSheet, text } from "react-native";
import { Divider, FlatList, NativeBaseProvider, Box} from "native-base";
import React from "react";
import { services } from "../service/services";
export default function HomeScreen() {
  const [newsData , setNewsData] = useState([])
  let data
  useEffect(() =>{
    services('general').then(data =>{
      setNewsData(data)
    }).catch(error =>{
      alert(error)
    })
  },[]);

  return (
    <NativeBaseProvider>
      <View>
        <View style={styles.container}>
          <text>All</text>
        </View>
        <FlatList data={data} renderItem={({item}) => (
          <Box px={5} py={2} rounded="md" my={2} bg="primary.300">
            {item.title}
          </Box>
        )} 
        keyExtractor={(item) =>item.id} 

        />
        </View>
        <Divider xy={2}/>
    </NativeBaseProvider>
  );

}
const styles = StyleSheet.create({
  container: {
    textAlign: "center",
    padding: 10,
    fontSize: 24,
    backgroundColor: "#e0e0e0",
    border: "1px solid #bdbdbd",
  },
  flex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    fontSize: 20,
  },
});
