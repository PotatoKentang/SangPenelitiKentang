import { useState } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import TextBasedCalculatorPage from './text-based-calculator'
import UIBasedCalculator from './ui-based-calculator'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from './header'
import BottomSheet from './bottom-sheet'
import { BottomSheetStore } from '../../store/toggle-and-content-store'

export default function CalculatorPage() {
  const Tab = createMaterialTopTabNavigator()
  const resetBottomSheet = BottomSheetStore((state) => state.setContent)
  const [resetBottomSheetData, setResetBottomSheetData] = useState(false)

  const handleTabPress = (index) => {
    console.log(index)
    resetBottomSheet({
      name: [],
      nutrients: [],
    })
  }

  return (
    <>
      <SafeAreaView style={{ backgroundColor: 'white' }}>
        <Header />
      </SafeAreaView>
      <Tab.Navigator initialRouteName="UI based">
        <Tab.Screen
          name="UI based"
          component={UIBasedCalculator}
          listeners={({ navigation, route }) => ({
            tabPress: () => {
              handleTabPress(route.params?.index || 0)
            },
          })}
          initialParams={{ index: 0 }}
        />
        <Tab.Screen
          name="Text based"
          component={TextBasedCalculatorPage}
          listeners={({ navigation, route }) => ({
            tabPress: () => {
              handleTabPress(route.params?.index || 1)
            },
          })}
          initialParams={{ index: 1 }}
        />
      </Tab.Navigator>
      <BottomSheet />
    </>
  )
}
