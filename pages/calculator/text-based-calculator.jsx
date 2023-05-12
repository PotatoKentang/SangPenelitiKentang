import { View, TextInput, Button } from 'react-native'
import { Text } from 'react-native-paper'
import { useState,useEffect } from 'react'
import Api from '../../api'
import { createFormDataWithText } from '../../utility/createForm'
import { BottomSheetStore } from '../../store/toggle-and-content-store'
import { endPoints } from '../../utility/endPoints'
export default function TextBasedCalculatorPage() {
  const [text, onChangeText] = useState('Apple 1gr\nBanana 10gram')
  const toggleSheet = BottomSheetStore((state) => state.isActive)
  const setContent = BottomSheetStore((state) => state.setContent)

  const getUnit = (unit) =>{
    console.log(unit)
    if(unit.includes("mg"))
    {
      return "miligrams"
    }
    else {
      return "grams"
    }
  }
  const getName = (names) =>{
    console.log(names)
    names = names.filter((name) => {
      return name !== "mg" && name !== "g"
    })
    return names.join(" ")
  }

  const getNutritionInformation = (nutritionName,amount) =>{
    const splitNutritionName = nutritionName.split("_")
    const unit = getUnit(splitNutritionName)
    const name = getName(splitNutritionName)
    return {
      name:name,
      amount:amount,
      unit:unit
    }
  }
  const formatResult = (results) => {
    const mergedObject = {foodNames: [], nutrients: []}
    results.forEach((nutrition) => {
      Object.entries(nutrition).forEach(([keyName, amount]) => {
        if (keyName === 'name') {
          mergedObject.foodNames.push(amount)
        } else {
          const nutrientInfo = getNutritionInformation(keyName,amount)
          const existingNutrientIndex = mergedObject.nutrients.findIndex(nutrient => nutrient.name === nutrientInfo.name)
          if (existingNutrientIndex === -1) {
            mergedObject.nutrients.push(nutrientInfo)
          } else {
            mergedObject.nutrients[existingNutrientIndex].amount += nutrientInfo.amount
          }
        }
      })
    })
    return mergedObject
  }

  const get_nutrients = async () => {
    try {
      const cleanedText = await text.toString().replace(/\n/g, ' ')
      const formData = await createFormDataWithText(cleanedText)
      const nutrientsFromQuery = await Api.post(
        endPoints.get_nutrients_from_query(),
        formData
      )
      const resultFromQuery = await nutrientsFromQuery.data.items
      const formatedResult = formatResult(resultFromQuery)
      console.log(formatedResult)
      await setContent(formatedResult)
    } catch (err) {
      console.log(err)
    }
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
        onChangeText={onChangeText}
      />
      <Button title="Calculate" onPress={() => get_nutrients()} />
    </View>
  )
}
