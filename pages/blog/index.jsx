import
{
  View,Text
} from 'react-native'
import styled, { useTheme } from 'styled-components/native'
import blogItem from './blog-item'
export default function BlogPage({ route, navigation }){
  const theme = useTheme()
  //do some fetching to the backend
  const blogs=[
    {
      title:'Blog 1',
      content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod'
    },
  ]
  return (
    <View style={theme.styles.container}>
      <Text>BlogPage</Text>
      {
        blogs.map((blog,index)=>{
          return <blogItem key={index} blog={blog}/>
        })
      }
    </View>
  )
}