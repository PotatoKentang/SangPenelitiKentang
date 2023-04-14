import { View, Text, useWindowDimensions, ScrollView } from 'react-native'
import { Modal, Portal, ActivityIndicator, Card,Chip  } from 'react-native-paper'
import Icon_Back from '../../components/icons/icon-back'
import styled from 'styled-components/native'
import {
  blogModal,
  toggleLoadingScreen,
} from '../../store/toggle-and-content-store'
export default function FullPageBlog() {
  const { height: screenHeight, width: screenWidth } = useWindowDimensions()
  const isModalVisible = blogModal((state) => state.isActive)
  const setModalVisible = blogModal((state) => state.setActive)
  const isLoading = toggleLoadingScreen((state) => state.isLoading)
  const blogContent = blogModal((state) => state.content)
  const { title, date, author, content, image, tags } = blogContent
  console.log(title, date, author, content, image, tags)
  if (isLoading) {
    return (
        <Modal
          visible={isModalVisible}
          contentContainerStyle={{
            backgroundColor: 'white',
            padding: 20,
            flex: 1,
            height: screenHeight / 50,
            width: screenWidth / 50,
            margin: 0,
          }}
        >
          <ActivityIndicator animating={true} size="large" color="#0000ff" />
        </Modal>

    )
  }
  return (
      <Modal
        visible={isModalVisible}
        contentContainerStyle={{
          backgroundColor: 'white',
          padding: 20,
          flex: 1,
          height: screenHeight,
          width: screenWidth,
        }}
        onDismiss={() => setModalVisible(false)}
      >
        <Icon_Back
          text="Back"
          ml={7}
          onPress={() => setModalVisible(false)}
          style={{ marginTop: 10, marginBottom: 20 }}
        />
        <ScrollView contentContainerStyle={{ padding: 10 }}>
          <Card>
            <Card.Title titleStyle={{ textWrap:'wrap' }} title={title} subtitle={author}/>
            <Card.Cover source={{ uri: 'https://picsum.photos/250' }} />
            <Card.Content>
              <Text variant="titleLarge" style={{ marginVertical:20 }}>{content}</Text>
              <Text variant="bodyMedium">{tags!=null&&
              [...tags].map((tag,index)=><Chip key={index} style={{margin:5}}>{tag}</Chip>)
              }</Text>
            </Card.Content>
          </Card>
        </ScrollView>
      </Modal>
  )
}
// const cardStyle = {
//   width: 300,
//   margin: 10,
//   padding: 10,
//   borderRadius: 10,
//   backgroundColor: '#fff',
//   shadowColor: '#000',
// }
const ListContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 20px;
  margin-right: 30px;
`

const SubTitle = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: #000;
  margin-horizontal: 10px;
`
