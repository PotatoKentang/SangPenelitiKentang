import { View } from 'react-native'
import { Avatar, Button, Card, Text } from 'react-native-paper'
export default function FullPageBlog(blog) {
  const { title, date, author, content, image, tags } = blog
  return (
    <Card style={cardStyle}>
        <Card.Title
          title="Card Title"
          subtitle="Card Subtitle"
        />
        <Card.Cover source={{ uri: 'https://picsum.photos/250' }} />
        <Card.Content>
          <Text variant="titleLarge">Card title</Text>
          <Text variant="bodyMedium">Card content</Text>
        </Card.Content>
      </Card>
  )
}

const cardStyle ={
  width:'100%',
  flex:1,
}
