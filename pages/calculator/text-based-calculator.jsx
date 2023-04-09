import { View, TextInput, Button, Text } from 'react-native'
import { useState } from 'react'
export default function TextBasedCalculatorPage() {
  const [text, onChangeText] = useState('Useless Placeholder')
  return (
      <View style={{ margin:10 }}>
        <Text>Textbased Nutrition Calculator</Text>
        <TextInput
          multiline={true}
          autoCorrect={true}
          selectionColor={'black'}
          textAlignVertical='top'
          numberOfLines={10}
          style={{marginVertical:10,borderColor: 'gray', borderWidth: 1 }}
          onChangeText={(text) => onChangeText(text)}
          value={text}

        />
        <Button
          title="Calculate"
          onPress={() => {
            console.log('calculating')
          }}
        />
      </View>
  )
}
