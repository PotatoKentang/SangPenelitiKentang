import CalculatorPage  from './calculator-page'
import { createStackNavigator } from '@react-navigation/stack'

export default function CalculatorScreen() {
  const Stack = createStackNavigator()
  return (
    <>
      <Stack.Navigator >
        <Stack.Screen name="Nutrition Calculator" component={CalculatorPage} />
      </Stack.Navigator >
    </>
  )
}
