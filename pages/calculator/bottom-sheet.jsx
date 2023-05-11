import BottomSheet from '@gorhom/bottom-sheet'
import React, { useCallback, useMemo, useRef, useState } from 'react'
import { StyleSheet, Text, View,ScrollView } from 'react-native'
import { BottomSheetStore } from '../../store/toggle-and-content-store'
export default function BottomSheetSection() {
  const snapPoints = useMemo(() => ['5%','30%', '50%', '100%'], [])
  const sheetRef = useRef(null)
  const bottomSheetIsActive = BottomSheetStore((state) => state.isActive)
  const bottomSheetContent = BottomSheetStore((state) => state.content)
  const handleSheetChange = useCallback((index) => {}, [])

  const handleSnapPress = useCallback((index) => {
    sheetRef.current?.snapToIndex(index)
  }, [])

  const handleClosePress = useCallback(() => {
    sheetRef.current?.close()
  }, [])

  if (!bottomSheetIsActive) {
    return null
  }
  return (
      <BottomSheet
        ref={sheetRef}
        snapPoints={snapPoints}
        initialSnapIndex={0}
        onChange={handleSheetChange}
      >
        <ScrollView contentContainerStyle={{
          flex: 1,
          backgroundColor: 'white',
          padding:20
        }}>
          {Array.from(bottomSheetContent).map(([key,value],index)=>{
            return (<View key={index} style={{ display:'flex',flexDirection:'row',justifyContent:'space-between' }}>
              <Text>{key}</Text>
              <Text>{value}</Text>
            </View>)
          })}
        </ScrollView>
      </BottomSheet>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 200,
  },
  contentContainer: {
    backgroundColor: 'white',
  },
  sectionHeaderContainer: {
    backgroundColor: 'white',
    padding: 6,
  },
  itemContainer: {
    padding: 6,
    margin: 6,
    backgroundColor: '#eee',
  },
})
