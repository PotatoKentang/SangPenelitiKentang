import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import TextBasedCalculatorPage from './text-based-calculator'
import UIBasedCalculator from './ui-based-calculator'
import { useTheme } from 'styled-components/native'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from './header'
export default function CalculatorPage() {
  const theme = useTheme()
  const Tab = createMaterialTopTabNavigator()
  return (
    <>
      <SafeAreaView style={{ backgroundColor:'white' }}>
        <Header />
      </SafeAreaView>
      <Tab.Navigator initialRouteName="UI based">
        <Tab.Screen name="UI based" component={UIBasedCalculator} />
        <Tab.Screen name="Text based" component={TextBasedCalculatorPage} />
      </Tab.Navigator>
    </>
  )
}
