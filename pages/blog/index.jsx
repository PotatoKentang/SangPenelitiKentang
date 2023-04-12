import { View, Text, ScrollView } from 'react-native'
import styled, { useTheme } from 'styled-components/native'
import BlogItem from './blog-item'
import FullPageBlog from './fullpage-blog'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from './header'
import BlogList from './blog-list'
import {
  isModalVisible,
  setModalVisible,
  isLoading
} from '../../utility/toggleModalPopUp'
export default function BlogPage({ route, navigation }) {
  const theme = useTheme()
  //do some fetching to the backend
  const blogs = BlogList()
  return (
    <SafeAreaView style={{ backgroundColor: 'white' }}>
      {isModalVisible && <FullPageBlog/>}
      <Header />
      <ScrollView style={BlogContainer} contentContainerStyle={WrapBlogItem}>
        {blogs.map((blog, index) => {
          return <BlogItem key={index} blog={blog} />
        })}
      </ScrollView>
    </SafeAreaView>
  )
}

const BlogContainer = {
  width: '100%',
  paddingHorizontal:10
}
const WrapBlogItem = {
  display: 'flex',
  height: 'auto',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-evenly',
  paddingBottom:100
}
