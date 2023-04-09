import { View, Text, useWindowDimensions } from 'react-native'
import { useState } from 'react'
import { Modal, Portal } from 'react-native-paper'
import Icon_Back from '../../components/icons/icon-back'
import { nutritionContentStore } from '../../store/content-store'
import { toggleNutrientsPopUpModal } from '../../store/toggle-store'
export default function NutrientsPopUp() {
  const { height: screenHeight, width: screenWidth } = useWindowDimensions()
  const isModalVisible = toggleNutrientsPopUpModal((state) => state.isActive)
  const setModalVisible = toggleNutrientsPopUpModal((state) => state.setActive)
  const nutritionContent = nutritionContentStore(
    (state) => state.nutritionContent
  )
  const result = [
    {
      name: 'Energy',
      value: '100',
    },
    {
      name: 'Protein',
      value: '100',
    },
    {
      name: 'Fat',
      value: '100',
    },
  ]
  const nutrients = [
    {
      name: 'Energy',
      value: '100',
    },
    {
      name: 'Protein',
      value: '100',
    },
    {
      name: 'Fat',
      value: '100',
    },
  ]
  const [loading, setLoading] = useState(false)
  if (loading) {
    return (
      <View style={{ flex: 1 }}>
        <LoadingIndicator />
      </View>
    )
  }
  return (
    <Portal>
      <Modal
        visible={isModalVisible}
        onDismiss={() => setModalVisible()}
        contentContainerStyle={{
          backgroundColor: 'white',
          padding: 20,
          flex:1,
        }}
      >
        <Icon_Back text="Back" ml={7} onPress={setModalVisible} />
        <View style={{ flex: 1 }}>
          <Text>List Of Foods</Text>
          {nutrients.map((item, index) => {
            return (
              <View key={index}>
                <Text>{item.name}</Text>
                <Text>{item.value}</Text>
              </View>
            )
          })}
          <Text>Nutrients</Text>
          {result.map((item, index) => {
            return (
              <View key={index}>
                <Text>{item.name}</Text>
                <Text>{item.value}</Text>
              </View>
            )
          })}
          <Text>{nutritionContent}</Text>
        </View>
      </Modal>
    </Portal>
  )
}
