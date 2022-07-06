import React from 'react'
import { View , StyleSheet, text} from 'react-native'

export default function Setting() {
  return (
    <View>
      <View style={styles.container}>
        <text>Tech</text>
       </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    textAlign: "center",
    padding:10,
    fontSize:24,
    backgroundColor:'#e0e0e0',
    border:'1px solid #bdbdbd'
  },
 
});