import { View, Text,LoadingIndicator } from 'react-native'
import { useState } from 'react'
import { Modal, Portal, Button, Provider } from 'react-native-paper'
export default function NutrientsPopUp(props) {
  // const { result, nutrients } = props
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
  const [isModalVisible, setModalVisible] = useState(true)
  const [loading, setLoading] = useState(false)
  // if (loading) {
  //   return (
  //     <View style={{ flex: 1 }}>
  //       <LoadingIndicator/>
  //     </View>
  //   )
  // }
  return (
    <Provider>
      <Portal>
        <Modal
          visible={isModalVisible}
          onDismiss={() => setModalVisible(false)}
          contentContainerStyle={{ backgroundColor: 'white', padding: 20 }}
        >
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
          </View>
        </Modal>
      </Portal>
    </Provider>
  )
}
