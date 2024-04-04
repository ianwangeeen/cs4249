const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Slidable from "./components/Slidable";
import Start from "./screens/Start";
import Main from "./screens/Main";
import NewPostDog from "./screens/NewPostDog";
import NewPostBurger from "./screens/NewPostBurger";
import NewPostBurgerWithCaption from "./screens/NewPostBurgerWithCaption";
import EndScreen from "./screens/EndScreen";
import NewPostHouse from "./screens/NewPostHouse";
import NewPostHouseWithCaption from "./screens/NewPostHouseWithCaption";
import NewPostDogWithCaption from "./screens/NewPostDogWithCaption";
import Popup from "./components/Popup";
import Toggle from "./components/Toggle";
import Component from "./components/Component";
import GroupComponentSet from "./components/GroupComponentSet";
import GroupComponentSet1 from "./components/GroupComponentSet1";
import GroupComponentSet2 from "./components/GroupComponentSet2";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Itim-Regular": require("./assets/fonts/Itim-Regular.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Start"
              component={Start}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Main"
              component={Main}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NewPostDog"
              component={NewPostDog}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NewPostBurger"
              component={NewPostBurger}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NewPostBurgerWithCaption"
              component={NewPostBurgerWithCaption}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EndScreen"
              component={EndScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NewPostHouse"
              component={NewPostHouse}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NewPostHouseWithCaption"
              component={NewPostHouseWithCaption}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NewPostDogWithCaption"
              component={NewPostDogWithCaption}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
