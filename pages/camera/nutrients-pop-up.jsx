import { View, Text, useWindowDimensions,ScrollView, Button } from 'react-native'
import { Modal, Portal,ActivityIndicator} from 'react-native-paper'
import Icon_Back from '../../components/icons/icon-back'
import styled from 'styled-components/native'
import {
  cameraModal,
  toggleLoadingScreen,
} from '../../store/toggle-and-content-store'
export default function NutrientsPopUp() {
  const { height: screenHeight, width: screenWidth } = useWindowDimensions()
  const isModalVisible = cameraModal((state) => state.isActive)
  const setModalVisible = cameraModal((state) =>
    state.setActive
  )
  const isLoading = toggleLoadingScreen((state) => state.isLoading)
  const nutritionContent = cameraModal(
    (state) => state.content
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
          height: screenHeight,
          width: screenWidth,
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
          height: screenHeight,
          width: screenWidth,
          margin:0,
        }}
      >
        <Icon_Back text="Back" ml={7} onPress={()=>setModalVisible(false)} style={{marginTop:10,marginBottom:20}}/>
        <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding:10 }}>
          <SubTitle>List Of Foods</SubTitle>
          {nutritionContent["image"] && nutritionContent["image"].map((item, index) => {
            return (
              <ListContainer key={index}>
                <SubTitle> - {item}</SubTitle>
              </ListContainer>
            )
          })}
          {!nutritionContent["image"]&& <SubTitle>No food found</SubTitle>}
          <SubTitle>Nutrients</SubTitle>
          {nutritionContent["query"] && Object.entries(nutritionContent["query"]).map((item, index) => {
            return (
              <ListContainer key={index}>
                <Text>{Object.keys(item)}</Text>
                <Text>{Object.values(item)}</Text>
              </ListContainer>
            )
          })}
          {!nutritionContent["query"]&& <SubTitle>No nutrients found</SubTitle>}
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