import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import React, { useCallback } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { ThemeProvider } from 'styled-components/native'
import HomeScreen from './pages/home'
import CalculatorScreen from './pages/calculator'
import BlogScreen from './pages/blog'
import theme from './theme'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { routesName } from './routes'
import { LogBox, Text } from 'react-native'

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
])

// const Tab = createMaterialTopTabNavigator()
const Tab = createMaterialBottomTabNavigator()

export default function App({ navigation, route }) {
  const [fontsLoaded] = useFonts({
    'Jakarta-m': require('./assets/fonts/PlusJakartaSans-Medium.ttf'),
    'Jakarta-sb': require('./assets/fonts/PlusJakartaSans-SemiBold.ttf'),
    'Jakarta-b': require('./assets/fonts/PlusJakartaSans-Bold.ttf'),
    'RobotoSerif-m': require('./assets/fonts/RobotoSerif-Medium.ttf'),
    'RobotoSerif-sb': require('./assets/fonts/RobotoSerif-SemiBold.ttf'),
    'RobotoSerif-b': require('./assets/fonts/RobotoSerif-Bold.ttf'),
    'PTSerif-r': require('./assets/fonts/PTSerif-Regular.ttf'),
    'PTSerif-b': require('./assets/fonts/PTSerif-Bold.ttf'),
    'Inter-m': require('./assets/fonts/Inter-Medium.ttf'),
    'Inter-sb': require('./assets/fonts/Inter-SemiBold.ttf'),
    'Inter-b': require('./assets/fonts/Inter-Bold.ttf'),
    'OpenDyslexic3-r': require('./assets/fonts/OpenDyslexic3-Regular.ttf'),
    'OpenDyslexic3-b': require('./assets/fonts/OpenDyslexic3-Bold.ttf'),
    'Comic-r': require('./assets/fonts/ComicNeue-Regular.ttf'),
    'Comic-b': require('./assets/fonts/ComicNeue-Bold.ttf'),
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      setTimeout(async () => {
        await SplashScreen.hideAsync()
      }, 100000)
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer onLayout={onLayoutRootView}>
        <ThemeProvider theme={theme}>
          <Tab.Navigator
            initialRouteName={routesName.home}
            backBehavior="order"
            tabBarPosition="bottom"
            screenOptions={() => ({
              tabBarActiveTintColor: 'tomato',
              tabBarInactiveTintColor: 'gray',
              tabBarShowIcon: true,
              tabBarAllowFontScaling: true,
            })}
          >
            <Tab.Screen
              name={routesName.home}
              component={HomeScreen}
              options={{
                headerShown: false,
                tabBarLabel: routesName.home,
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="home" color={color} size={26} />
                ),
              }}
            />
            <Tab.Screen
              name={routesName.calculator}
              component={CalculatorScreen}
              options={{
                headerShown: false,
                tabBarLabel: routesName.calculator,
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="calculator" color={color} size={26} />
                ),
              }}
            />
            <Tab.Screen
              name={routesName.blog}
              component={BlogScreen}
              options={{
                headerShown: false,
                tabBarLabel: routesName.blog,
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="post-outline" color={color} size={26} />
                ),
              }}
            />
          </Tab.Navigator>
        </ThemeProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}
