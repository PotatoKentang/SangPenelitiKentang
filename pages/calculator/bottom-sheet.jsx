import BottomSheet from '@gorhom/bottom-sheet'
import React, { useCallback, useMemo, useRef, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { BottomSheetStore } from '../../store/toggle-and-content-store'
export default function BottomSheetSection() {
  const [index, setIndex] = useState(0)
  const [open, setOpen] = useState(false)
  const snapPoints = useMemo(() => ['30%', '50%', '100%'], [])
  const sheetRef = useRef(null)
  const bottomSheetisActive = BottomSheetStore((state) => state.isActive)
  const handleSheetChange = useCallback((index) => {}, [])

  const handleSnapPress = useCallback((index) => {
    sheetRef.current?.snapToIndex(index)
  }, [])

  const handleClosePress = useCallback(() => {
    sheetRef.current?.close()
  }, [])

  if (!bottomSheetisActive) {
    return null
  }
  return (
    <View style={{ flex: 1 }}>
      <BottomSheet
        ref={sheetRef}
        snapPoints={snapPoints}
        initialSnapIndex={0}
        onChange={handleSheetChange}
      >
        <Text>hi</Text>
      </BottomSheet>
    </View>
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
