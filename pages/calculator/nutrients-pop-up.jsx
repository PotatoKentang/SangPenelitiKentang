import { View, Text, useWindowDimensions,ScrollView } from 'react-native'
import { Modal, Portal,ActivityIndicator} from 'react-native-paper'
import Icon_Back from '../../components/icons/icon-back'
import styled from 'styled-components/native'
import {
  NutrientsPopUpModalStore,
  toggleLoadingScreen,
} from '../../store/toggle-and-content-store'
export default function NutrientsPopUp() {
  const { height: screenHeight, width: screenWidth } = useWindowDimensions()
  const isModalVisible = NutrientsPopUpModalStore((state) => state.isActive)
  const setModalVisible = NutrientsPopUpModalStore((state) =>
    state.setActive
  )
  const isLoading = toggleLoadingScreen((state) => state.isLoading)
  const nutritionContent = NutrientsPopUpModalStore(
    (state) => state.nutritionContent
  )
  if (isLoading) {
    return (
      <Portal style={{ flex: 1 }}>
      <Modal
        visible={isModalVisible}
        contentContainerStyle={{
          backgroundColor: 'white',
          padding: 20,
          flex: 1,
          height: screenHeight/50,
          width: screenWidth/50,
        }}
      >
        <ActivityIndicator animating={true} size="large" color="#0000ff" />
      </Modal>
    </Portal>
    )
  }
  return (
    <Portal style={{ flex: 1 }}>
      <Modal
        visible={isModalVisible}
        contentContainerStyle={{
          backgroundColor: 'white',
          padding: 20,
          flex: 1,
          height: screenHeight/50,
          width: screenWidth/50,
        }}
        onDismiss={() => setModalVisible(false)}
      >
        <Icon_Back text="Back" ml={7} onPress={()=>setModalVisible(false)} style={{marginTop:10,marginBottom:20}}/>
        <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding:10 }}>
          <SubTitle>List Of Foods</SubTitle>

          <Text>{nutritionContent}</Text>
        </ScrollView>
      </Modal>
    </Portal>
  )
}


const ListContainer = styled.View`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  margin-left:20px;
  margin-right:30px;
`

const SubTitle = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: #000;
  margin-horizontal: 10px;
`