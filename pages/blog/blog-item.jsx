import { useCallback, useState, useEffect } from 'react'
import { Avatar, Button, Card, Text } from 'react-native-paper'
// import { View, Image } from 'react-native';
import {
  blogModal,
  toggleLoadingScreen,
} from '../../store/toggle-and-content-store'

export default function BlogItem(props) {
  const { title, date, author, content, image, tags } = props.blog
  const setModalVisible = blogModal((state) => state.setActive)
  const setModalContent = blogModal((state) => state.setContent)
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

  const readMore = () => {
    setModalContent(props.blog)
    toggleModal(true)
  }
  console.log(image)
  return (
    <Card
      style={{
        marginVertical: 8,
        marginHorizontal: 5,
        width: 370,
        backgroundColor: '#ffff',
        elevation: 3,
      }}
    >
      <Card.Title
        title={title}
        titleNumberOfLines={2}
        titleStyle={{ fontWeight: 'bold', fontSize: 20 }}
        style={{ width: '100%', marginBottom: 3 }}
      />

      <Card.Cover
        source={{ uri: image }}
        style={{ height: 200, marginHorizontal: 14, marginBottom: 20 }}
      />
      <Card.Content>
        <Text
          variant="bodyMedium"
          numberOfLines={5}
          style={{ textAlign: 'justify', fontSize: 16 }}
        >
          {content}
        </Text>
      </Card.Content>
      <Card.Actions>
        <Button style={{ display: 'none' }}>Cancel</Button>
        <Button buttonColor="#33cc8f" onPress={readMore}>
          Read More
        </Button>
      </Card.Actions>
    </Card>
  )
}
