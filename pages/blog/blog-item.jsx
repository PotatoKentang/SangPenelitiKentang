import { View, Image } from 'react-native'
import { Avatar, Button, Card, Text } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
export default function BlogItem(blog) {
  const { title, date, author, content, image, tags } = blog
  const navigation = useNavigation()
  return (
    <Card style={{ margin: 10 }}>
      <Card.Title title="Card Title" subtitle="Card Subtitle" />
      {/* <Card.Content>
        <Text variant="titleLarge">Card title</Text>
        <Text variant="bodyMedium">Card content</Text>
      </Card.Content> */}
      <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
      <Card.Actions>
        <Button style={{ display: 'none' }}>Cancel</Button>
        <Button onClick={() => console.log('navigate to the post')}>
          Read More
        </Button>
      </Card.Actions>
    </Card>
  )
}
