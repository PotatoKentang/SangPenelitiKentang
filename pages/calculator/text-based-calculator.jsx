import { View, TextInput, Button } from 'react-native'
import { Text } from 'react-native-paper'
import { useState } from 'react'
import Api from '../../api'
import { createFormDataWithText } from '../../utility/createForm'
import {BottomSheetStore} from '../../store/toggle-and-content-store'
export default function TextBasedCalculatorPage() {
  const [text, onChangeText] = useState('Apple 1gr\nBanana 10gram')
  const toggleSheet = BottomSheetStore(state=>state.isActive)
  const get_nutrients = () => {
    const cleanedText = text.replace(/\n/g, ' ')
    const formData = createFormDataWithText(cleanedText)
    Api.post('/get_nutrients', formData)
      .then((response) => {
        // console.log(response.data)
        // toggleSheet()
      })
      .catch((err) => {
        console.log(err)
      })

  }
  return (
    <View style={{ margin: 10 }}>
      <Text variant="titleSmall">Textbased Nutrition Calculator</Text>
      <TextInput
        multiline={true}
        autoCorrect={true}
        selectionColor={'black'}
        textAlignVertical="top"
        numberOfLines={10}
        style={{
          marginVertical: 10,
          borderColor: 'gray',
          borderWidth: 1,
          padding: 5,
        }}
        onChangeText={(text) => onChangeText(text)}
        value={text}
      />
      <Button title="Calculate" onPress={()=>get_nutrients()} />
    </View>
  )
}
