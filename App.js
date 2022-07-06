import All from "./screens/All";
import Business from "./screens/Business";
import Health from "./screens/Health";
import Sport from "./screens/Sport";
import Tech from "./screens/Tech";

import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    
    <NavigationContainer>
      <Tab.Navigator tabBarOptions={{showLabel:false, activeTintColor:'red'}}>
        <Tab.Screen
          name="All"
          component={All}
          options={{ headerShown: false,
          tabBarIcon:(props) => (
            <Icon name="home" type="feather" color={props.color}/>
          ), }}
        />
        <Tab.Screen
          name="Business"
          component={Business}
          options={{ headerShown: false,
          tabBarIcon:(props) => (
            <Icon name="business" type="=feather" color={props.color} />
          ),  }}
        />
        <Tab.Screen
          name="Health"
          component={Health}
          options={{ headerShown: false,
          tabBarIcon:(props) => (
            <Icon name="heart" type="feather" color={props.color} />
          ),  }}
        />
        <Tab.Screen
          name="Sport"
          component={Sport}
          options={{ headerShown: false,
          tabBarIcon:(props) => (
            <Icon name="activity" type="feather" color={props.color}/>
          ),  }}
        />
        <Tab.Screen
          name="Tech"
          component={Tech}
          options={{ headerShown: false,
          tabBarIcon:(props) => (
            <Icon name="cpu" type="feather" color={props.color}/>
          ),  }}
        />
      </Tab.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
