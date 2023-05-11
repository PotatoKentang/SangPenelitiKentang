import {
  View,
  Text,
  useWindowDimensions,
  ScrollView,
  FlatList,
  TextInput,
  Button,
} from 'react-native'
import { Modal, Portal, ActivityIndicator } from 'react-native-paper'
import Icon_Back from '../../components/icons/icon-back'
import styled from 'styled-components/native'
import {
  calculatorModal,
  toggleLoadingScreen,
} from '../../store/toggle-and-content-store'
import { useState, useEffect } from 'react'
import { Directions } from 'react-native-gesture-handler'
export default function NutrientsPopUp() {
  const { height: screenHeight, width: screenWidth } = useWindowDimensions()
  const isModalVisible = calculatorModal((state) => state.isActive)
  const setModalVisible = calculatorModal((state) => state.setActive)
  const setLoading = calculatorModal((state) => state.setLoading)
  const isLoading = calculatorModal((state) => state.isLoading)
  const nutritionContent = calculatorModal((state) => state.nutritionContent)
  const [totalAmount, setTotalAmount] = useState(0)
  const [totalServings, setTotalServings] = useState(0)
  const [totalNutrients, setTotalNutrients] = useState([{name:'test'},{amount:1}])
  useEffect(() => {
    if (nutritionContent) {
      setLoading(false)

      //dummy
      // totalNutrients([[nutrients, 1]])

      // Api.post('/get_nutrients', createFormDataWithText(nutritionContent.name))
      //   .then((response) => {
      //     totalNutrients(response.data)
      //     setModalLoading(false)
      //   })
      //   .catch((err) => {
      //     console.log(err)
      //     setModalLoading(false)
      //   })
    }
  }, [nutritionContent])

  useEffect(() => {
    console.log(totalAmount,totalServings)
  },[totalAmount,totalServings])

  const addNutritionToList = () =>{
    setModalVisible(false)
  }

  if (isLoading) {
    return (
      <Portal style={{ flex: 1 }}>
        <Modal
          visible={isModalVisible}
          contentContainerStyle={{
            backgroundColor: 'white',
            padding: 20,
            flex: 1,
            margin: 0,
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
        margin: 0,
        flex: 1,
        backgroundColor: 'white',
        // width: screenWidth * 0.8,
        height: screenHeight * 0.5,
        alignSelf: 'center',
        alignContent: 'center',
        top: screenHeight * 0.15,
        borderRadius: screenHeight * 0.03,
        marginHorizontal: '10%',
      }}
      visible={isModalVisible}
      contentContainerStyle={{
        margin: 0,
        backgroundColor: 'white',
        paddingHorizontal: 30,
        height: '100%',
      }}
      onDismiss={() => setModalVisible(false)}
    >
      {/* flat list of the nutrients */}
      {/* <FlatList
          data={totalNutrients}
          keyExtractor={(item) => Object.keys(item)[0]}
          contentContainerStyle={{paddingBottom:100}}
          renderItem={({ item }) =>(
            <View>
              <Text>{Object.keys(item)}</Text>
              <Text>{Object.values(item)}</Text>
            </View>
          )}
        /> */}
      {/* <ScrollView> */}
      {totalNutrients.map((nutrient, index) => {
        return (
          <View key={index} style={{ display:'flex',flexDirection:'row',justifyContent:'space-between' }}>
            <View style={{ width:'35%',justifyContent:'space-between',flexDirection:'row' }}>
              <Text>{Object.keys(nutrient)}</Text>
              <Text>:</Text>
            </View>
            <Text>{Object.values(nutrient)}</Text>
          </View>
        )
      })}
      <Text>Amount:</Text>
      <TextInput style={{marginVertical:10, borderWidth:1,padding:5}} onChangeText={setTotalAmount} placeholder='10'/>
      <Text>Serving Portions:</Text>
      <TextInput style={{marginVertical:10, borderWidth:1,padding:5}} onChangeText={setTotalServings} placeholder='5 (grams, onz, ml)'/>
      <View style={{ display:'flex', flexDirection:'row',justifyContent:'flex-end'}}>
        <Button title="Cancel" onPress={() => setModalVisible(false)} />
        <View style={{width:5}}/>
        <Button title="Confirm" onPress={() => addNutritionToList()} />
      </View>
      {/* </ScrollView> */}
    </Modal>
  )
}

const ListContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 20px;
  margin-right: 30px;
`

const SubTitle = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: #000;
  margin-horizontal: 10px;
`
