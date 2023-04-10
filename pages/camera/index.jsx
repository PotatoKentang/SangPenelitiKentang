import React, { useCallback, useEffect, useRef, useState } from 'react'
import { ActivityIndicator, SafeAreaView, Text, View } from 'react-native'

import { useIsFocused } from '@react-navigation/native'

import { Camera, CameraType } from 'expo-camera'

import styled from 'styled-components/native'

import * as ImagePicker from 'expo-image-picker'

import { captureRef } from 'react-native-view-shot'

import { useWindowDimensions } from 'react-native'

//svg components
import CameraOutline from '../../components/camera-outline'
import Icon_Flash from '../../components/icons/icon-flash'
import Icon_Media from '../../components/icons/icon-media'
import Icon_Snapshot from '../../components/icons/icon-snap'

import { ImagePickerOption, snapshotOption } from './constants'
import { getOptimalRatio } from './methods'

import {
  NutrientsPopUpModalStore,
  toggleLoadingScreen,
} from '../../store/toggle-and-content-store'
import { createFormDataWithImages } from '../../utility/createForm'
import Api from '../../api'
import NutrientsPopUp from './nutrients-pop-up'

function LoadingView() {
  return (
    <View>
      <Text>No access to camera</Text>
    </View>
  )
}

export default function CameraPage() {
  //expo camera
  const [image, setImage] = useState(null)
  const [type, setType] = useState(null)
  const [cameraPermission, setCameraPermission] = useState(null)
  const [mediaPermission, setMediaPermission] = useState(null)
  const [ratio, setRatio] = useState(null)
  const [flashMode, setFlashMode] = useState(null)
  const cameraRef = useRef(null)
  const [editorVisible, setEditorVisible] = useState(false)
  const [loading, setLoading] = useState(false)
  const { height: screenHeight, width: screenWidth } = useWindowDimensions()
  const isFocused = useIsFocused()

  //store
  const setModalVisible = NutrientsPopUpModalStore((state) => state.setActive)
  const isModalVisible = NutrientsPopUpModalStore((state) => state.isActive)
  const setNutritionContent = NutrientsPopUpModalStore(
    (state) => state.setNutritionContent
  )
  const setModalLoading = toggleLoadingScreen((state) => state.setLoading)

  //navigation
  const toggleFlash = () =>
    setFlashMode((current) => (current === 'torch' ? 'off' : 'torch'))

  const checkCameraPermission = useCallback(async () => {
    const permission = await Camera.requestCameraPermissionsAsync()
    setCameraPermission(permission.status === 'granted')
  }, [cameraPermission])

  const checkMediaPermission = useCallback(async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync()
    setMediaPermission(permission.status === 'granted')
  }, [mediaPermission])

  const cameraRatio = useCallback(async () => {
    try {
      const ratios = await cameraRef.current.getSupportedRatiosAsync()
      let choose_ratio = await getOptimalRatio(ratios)
      setRatio(choose_ratio)
    } catch (e) {
      console.log(e)
    }
  }, [ratio])

  const initialCameraSetup = () => {
    setType(CameraType.back)
    setFlashMode('off')
    cameraRatio()
  }

  const toggleModal = useCallback(
    (active) => {
      setModalVisible(true)
      setModalLoading(true)
      if (active) {
        setModalLoading(false)
        return
      }
    },
    [setModalVisible, setModalLoading]
  )
  //take image from screenshoot
  const takePicture = useCallback(async () => {
    try {
      //1. fetch data with result as params
      //2. set loading
      //3. set store content with response data if success
      //4. set loading false
      //5. navigate to result page
      toggleModal(false)
      const result = await captureRef(cameraRef.current, snapshotOption)
      const data = createFormDataWithImages(result)
      setTimeout(function(){
        //code goes here
        toggleModal(true)
     }, 2000);
      // Api.post('/food', data)
      //   .then((response) => {
      //     console.log(response.data)
      //     setNutritionContent(response.data)
      //     toggleModal(true)
      //   })
      //   .catch((e) => {
      //     console.log(e)
      //   })
    } catch (e) {
      console.log(e)
    }
  }, [image])

  const openMedia = async () => {
    const image = await ImagePicker.launchImageLibraryAsync(
      ImagePickerOption
    ).catch((e) => {
      console.log(e)
    })

    if (image.cancelled) {
      return
    }
    setImage(image.uri)
    await sendFetch(image.uri)
    // setEditorVisible(true)
  }

  const sendFetch = useCallback(
    async (imgURI) => {
      try {
        //1. fetch data with result as params
        //2. set loading
        //3. set store content with response data if success
        //4. set loading false
        //5. navigate to result page
        toggleModal(false)
        const data = createFormDataWithImages(imgURI)
        Api.post('/food', data)
          .then((response) => {
            setNutritionContent('result')
            toggleModal(true)
          })
          .catch((e) => {
            console.log(e)
          })
      } catch (e) {
        console.log(e)
      }
    },
    [image]
  )

  useEffect(() => {
    ;(async function () {
      //3x initial render karena ada 3 setup
      setImage(null)
      checkCameraPermission()
      checkMediaPermission()
      initialCameraSetup()
    })()
  }, [])

  if (cameraPermission === false) {
    return <LoadingView />
  }

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    )
  }

  return (
    <SafeAreaView style={{ flex: 1 }} collapsable={false}>
      {isFocused && (
         <ViewFullScreen>
          {isModalVisible && <NutrientsPopUp/>}
          <Camera
            style={{ flex: 1, width: screenWidth, height: screenHeight }}
            type={type}
            flashMode={flashMode}
            ref={cameraRef}
            ratio={ratio}
            onCameraReady={() => initialCameraSetup()}
          >
            <CameraOutline />
            <AlignHorizontally>
              <Icon_Media
                style={{ color: 'white' }}
                onPress={() => openMedia()}
              />
              <Icon_Snapshot
                style={{ color: 'white' }}
                onPress={() => takePicture()}
              />
              <Icon_Flash
                style={{ color: 'white' }}
                onPress={() => toggleFlash()}
                on={flashMode === 'torch'}
              />
            </AlignHorizontally>
          </Camera>
        </ViewFullScreen>
      )}
    </SafeAreaView>
  )
}

const ViewFullScreen = styled.View`
  flex: 1;
`

const AlignHorizontally = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  bottom: 40px;
  width: 100%;
`
