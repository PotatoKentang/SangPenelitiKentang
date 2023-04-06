import
{
  View,Text
} from 'react-native'
import styled, { useTheme } from 'styled-components/native'

export default function BlogPage({ route, navigation }){
  const theme = useTheme()
  return (
    <View style={theme.styles.container}>
      <Text>BlogPage</Text>
    </View>
  )
}