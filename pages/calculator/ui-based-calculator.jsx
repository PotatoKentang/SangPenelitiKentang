import { View, FlatList, Image,TouchableOpacity } from 'react-native'
import { Searchbar, Text } from 'react-native-paper'
import { useCallback, useState } from 'react'
import NutrientsPopUp from './nutrients-pop-up'
import Api from '../../api'
import { createFormDataWithText } from '../../utility/createForm'
import {
  NutrientsPopUpModalStore,
  toggleLoadingScreen,
} from '../../store/toggle-and-content-store'

export default function UIBasedCalculator() {
  const [searchQuery, setSearchQuery] = useState('')
  const onChangeSearch = (query) => setSearchQuery(query)
   //store
   const setModalVisible = NutrientsPopUpModalStore((state) => state.setActive)
   const isModalVisible = NutrientsPopUpModalStore((state) => state.isActive)
   const setNutritionContent = NutrientsPopUpModalStore(
     (state) => state.setNutritionContent
   )
   const setModalLoading = toggleLoadingScreen((state) => state.setLoading)

  const [ingredients, setIngredients] = useState([
    {
      id: 9003,
      image: 'apple.jpg',
      name: 'apple',
    },
    {
      id: 7951,
      image: 'spam.png',
      name: 'scrapple',
    },
    {
      id: 9266,
      image: 'pineapple.jpg',
      name: 'pineapple',
    },
    {
      id: 1079003,
      image: 'red-delicious-apples.png',
      name: 'red apple',
    },
    {
      id: 9019,
      image: 'applesauce.png',
      name: 'applesauce',
    },
    {
      id: 1029003,
      image: 'grannysmith-apple.png',
      name: 'tart apple',
    },
    {
      id: 1109003,
      image: 'apple.jpg',
      name: 'gala apple',
    },
  ])
  const toggleModal = useCallback(
    (active) => {
      setModalVisible(true)
      setModalLoading(true)
      if (active) {
        setModalLoading(false)
        return
      }
    },
    [setModalVisible, setModalLoading]
  )
  const get_ingredients_list = useCallback(() => {
    const data = createFormDataWithText(searchQuery)
    Api.post('/list_of_ingredients', data)
      .then((response) => {
        setIngredients(response.data.results)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [searchQuery])
  // console.log(ingredients.length)
  return (
    <View style={{ margin: 10 }}>
      {isModalVisible&&<NutrientsPopUp />}
      <Text variant="titleSmall">UI Nutrition Calculator</Text>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={{ marginVertical: 10 }}
        onIconPress={() => console.log(searchQuery)}
        onSubmitEditing={() => get_ingredients_list()}
      />
      {ingredients.length > 0 && (
        <FlatList
          data={ingredients}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item: ingredient }) => (
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                gap: 10,
                alignItems: 'center',
                marginVertical: 20,
              }}
              onPress={()=>toggleModal(true)}
            >
              <Image
                source={{
                  uri:
                    'https://spoonacular.com/cdn/ingredients_100x100/' +
                    ingredient.image,
                }}
                style={{ width: 75, height: 75, borderRadius: 50 }}
              />
              <Text>{ingredient.name}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  )
}
