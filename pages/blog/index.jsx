import { View, Text, ScrollView } from 'react-native'
import styled, { useTheme } from 'styled-components/native'
import BlogItem from './blog-item'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from './header'

export default function BlogPage({ route, navigation }) {
  const theme = useTheme()
  //do some fetching to the backend
  const blogs = [
    {
      title: 'The Benefits of Meditation for Stress Reduction',
      date: '2023-04-09',
      author: 'John Smith',
      content:
        'Meditation is a powerful tool for reducing stress and promoting relaxation. In this blog post, we will explore the science behind how meditation works and the benefits it can provide for both physical and mental health. We will also provide tips for how to incorporate meditation into your daily routine.',
      image: 'https://example.com/images/meditation.jpg',
      tags: ['meditation', 'mindfulness', 'stress reduction', 'mental health'],
    },
    {
      title: '10 Tips for Starting a Successful Small Business',
      date: '2023-04-09',
      author: 'Sarah Johnson',
      content:
        'Starting a small business can be both exciting and daunting. In this blog post, we will share 10 tips for starting a successful small business, including advice on market research, business planning, and customer acquisition.',
      image: 'https://example.com/images/small-business.jpg',
      tags: [
        'small business',
        'entrepreneurship',
        'business planning',
        'market research',
      ],
    },
    {
      title: 'The Top 5 Destinations for Budget Travelers',
      date: '2023-04-09',
      author: 'Alex Lee',
      content:
        "Traveling on a budget doesn't mean you have to sacrifice quality or experience. In this blog post, we will share the top 5 destinations for budget travelers, including tips for finding affordable accommodations, activities, and transportation.",
      image: 'https://example.com/images/budget-travel.jpg',
      tags: ['travel', 'budget travel', 'backpacking', 'hostels'],
    },
    {
      title: 'The Importance of Regular Exercise for Maintaining Health',
      date: '2023-04-09',
      author: 'Karen Chen',
      content:
        'Regular exercise is essential for maintaining good physical and mental health. In this blog post, we will explore the benefits of exercise, including improved cardiovascular health, weight management, and reduced risk of chronic diseases. We will also provide tips for how to incorporate exercise into your daily routine.',
      image: 'https://example.com/images/exercise.jpg',
      tags: ['exercise', 'fitness', 'health', 'cardiovascular health'],
    },
    {
      title: '5 Common Myths About Mental Health Debunked',
      date: '2023-04-09',
      author: 'Jason Kim',
      content:
        'There are many misconceptions and stigmas surrounding mental health. In this blog post, we will debunk 5 common myths about mental health, including the idea that mental health problems are a sign of weakness or that therapy is only for people with severe mental illness.',
      image: 'https://example.com/images/mental-health.jpg',
      tags: ['mental health', 'therapy', 'stigma', 'mental illness'],
    },
    {
      title: 'The Benefits of Learning a Second Language',
      date: '2023-04-09',
      author: 'Sophia Martinez',
      content:
        'Learning a second language has numerous benefits, from improved cognitive function to increased career opportunities. In this blog post, we will explore the science behind language learning and the advantages it can provide for both personal and professional growth.',
      image: 'https://example.com/images/language-learning.jpg',
      tags: [
        'language learning',
        'cognitive function',
        'career opportunities',
        'personal growth',
      ],
    },
  ]
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
}
const WrapBlogItem = {
  display: 'flex',
  height: 'auto',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-evenly',
  paddingBottom:100
}
