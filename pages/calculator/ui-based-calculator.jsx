import { View } from 'react-native'
import { Searchbar , FAB,Text } from 'react-native-paper'
import { useState } from 'react'
export default function UIBasedCalculator() {
  const [searchQuery, setSearchQuery] = useState('')
  const onChangeSearch = (query) => setSearchQuery(query)

  return (
    <View style={{ margin:10 }}>
      <Text variant="titleSmall">UI Nutrition Calculator</Text>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={{ marginVertical:10 }}
      />
    </View>
  )
}
