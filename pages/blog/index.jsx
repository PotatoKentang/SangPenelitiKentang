import { View, Text, ScrollView } from 'react-native'
import styled, { useTheme } from 'styled-components/native'
import BlogItem from './blog-item'
import FullPageBlog from './fullpage-blog'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from './header'
import BlogList from './blog-content-list'
import {
  blogModal,
} from '../../store/toggle-and-content-store'

export default function BlogPage() {
  const theme = useTheme()
  //do some fetching to the backend
  const blogs = BlogList()
  const isModalVisible = blogModal((state) => state.isActive)
  
  if(isModalVisible) {
    return <FullPageBlog />
  }

  return (
    <SafeAreaView style={{ backgroundColor: 'white' }}>
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
  paddingHorizontal: 10,
}
const WrapBlogItem = {
  display: 'flex',
  height: 'auto',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-evenly',
  paddingBottom: 100,
}
