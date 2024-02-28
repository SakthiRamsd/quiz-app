import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./App/Home";
import PlayGround from "./App/PlayGround";


const Stack = createStackNavigator();
export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Playground" component={PlayGround} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}