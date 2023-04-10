import { View, Image } from 'react-native'
import { Avatar, Button, Card, Text } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
export default function BlogItem(props) {
  const { title, date, author, content, image, tags } = props.blog
  const navigation = useNavigation()
  return (
    <Card style={{ marginVertical:3,width:'47%' }}>
      <Card.Title title={title}/>
      <Card.Cover source={{ uri: 'https://picsum.photos/700' }} style={{height:100}}/>
      <Card.Content>
        {/* <Text variant="titleLarge">Card title</Text> */}
        <Text variant="bodyMedium">{content}</Text>
      </Card.Content>
      <Card.Actions>
        <Button style={{ display: 'none' }}>Cancel</Button>
        <Button onClick={() => console.log('navigate to the post')}>
          Read More
        </Button>
      </Card.Actions>
    </Card>
  )
}
