import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import TextBasedCalculatorPage from './text-based-calculator'
import UIBasedCalculator from './ui-based-calculator'

export default function CalculatorPage() {
  const theme = useTheme()
  const Tab = createMaterialTopTabNavigator()
  return (
    <Tab.Navigator
      initialRouteName={UIBasedCalculator}>
      <Tab.Screen name="UI based" component={UIBasedCalculator} />
      <Tab.Screen name="Text based" component={TextBasedCalculatorPage} />
    </Tab.Navigator>
  )
}
