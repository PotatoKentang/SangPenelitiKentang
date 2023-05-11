import { useCallback } from 'react'
import { Avatar, Button, Card, Text } from 'react-native-paper'
import { blogModal, toggleLoadingScreen } from '../../store/toggle-and-content-store'
export default function BlogItem(props) {
  const { title, date, author, content, image, tags } = props.blog
  //store
  const setModalVisible = blogModal((state) => state.setActive)
  const setModalContent = blogModal(
    (state) => state.setContent
  )
  const setModalLoading = toggleLoadingScreen((state) => state.setLoading)

  const toggleModal = useCallback(
    (active) => {
      setModalVisible(true)
      setModalLoading(true)
      if (active) {
        setModalLoading(false)
      }
    },
    [setModalVisible, setModalLoading]
  )

  const fetchData = () => {
    // toggleModal(false)
    // console.log('fetching data')
    setModalContent(props.blog)
    toggleModal(true)
  }
  //ganti card jadi style sesuka lu
  return (
    <Card style={{ marginVertical:3}}>
      <Card.Title title={title}/>
      <Card.Cover source={{ uri: 'https://picsum.photos/700' }} style={{height:200}}/>
      <Card.Content>
        {/* <Text variant="titleLarge">Card title</Text> */}
        <Text variant="bodyMedium">{content}</Text>
      </Card.Content>
      <Card.Actions>
        <Button style={{ display: 'none' }}>Cancel</Button>
        <Button onPress={() => fetchData()}>
          Read More
        </Button>
      </Card.Actions>
    </Card>
  )
}
