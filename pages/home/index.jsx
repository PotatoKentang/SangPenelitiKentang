import React, { useCallback, useEffect, useRef, useState } from 'react'
import { ActivityIndicator, SafeAreaView, Text, View } from 'react-native'
import styled from 'styled-components/native'
import { ProgressBar } from 'react-native-paper'
export default function HomePage() {
  return (
    <SafeAreaView style={{ flex: 1 }} collapsable={false}>
      <ViewFullScreen>
        <Text>homepage</Text>
        <ProgressBar progress={0.5} color={'#000'} />
      </ViewFullScreen>
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
