import { View, Text, useWindowDimensions,ScrollView } from 'react-native'
import { Modal, Portal,ActivityIndicator} from 'react-native-paper'
import Icon_Back from '../../components/icons/icon-back'
import styled from 'styled-components/native'
import {
  calculatorModal,
  toggleLoadingScreen,
} from '../../store/toggle-and-content-store'
export default function NutrientsPopUp() {
  const { height: screenHeight, width: screenWidth } = useWindowDimensions()
  const isModalVisible = calculatorModal((state) => state.isActive)
  const setModalVisible = calculatorModal((state) =>
    state.setActive
  )
  const isLoading = toggleLoadingScreen((state) => state.isLoading)
  const nutritionContent = calculatorModal(
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
          margin:0,
        }}
      >
        <ActivityIndicator animating={true} size="large" color="#0000ff" />
      </Modal>
    </Portal>
    )
  }
  return (
      <Modal
        style={{
          margin:0,
          flex:1,
          backgroundColor: 'white',
          width: screenWidth*0.8,
          height: screenHeight*0.3,
          alignSelf: 'center',
          alignContent: 'center',
          top: screenHeight*0.15,
          borderRadius: screenHeight*0.03,
          marginHorizontal:'10%'
        }}
        visible={isModalVisible}
        contentContainerStyle={{
          margin:0,
          backgroundColor: 'white',
          padding: 10,

          height: '100%',
        }}
        onDismiss={() => setModalVisible(false)}
      >
        <Icon_Back text="Back" ml={7} onPress={()=>setModalVisible(false)} style={{marginTop:10,marginBottom:20}}/>
        <ScrollView contentContainerStyle={{ padding:10 }}>
          <SubTitle>Size Per Serving</SubTitle>
          {/* <Image uri={{ nutritionContent }} /> */}
          <Text>{nutritionContent}</Text>
        </ScrollView>
      </Modal>
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