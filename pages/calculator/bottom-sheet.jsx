import BottomSheet from '@gorhom/bottom-sheet'
import React, { useCallback, useMemo, useRef, useState } from 'react'
import { StyleSheet, Text, View,ScrollView,Button } from 'react-native'
import { BottomSheetStore } from '../../store/toggle-and-content-store'
import styled from 'styled-components/native'
export default function BottomSheetSection() {
  const snapPoints = useMemo(() => ['5%','30%', '50%', '100%'], [])
  const sheetRef = useRef(null)
  const bottomSheetIsActive = BottomSheetStore((state) => state.isActive)
  const bottomSheetContent = BottomSheetStore((state) => state.content)
  const bottomSheetSetContent = BottomSheetStore((state) => state.setContent)


  if (!bottomSheetIsActive) {
    return null
  }

  return (
      <BottomSheet
        ref={sheetRef}
        snapPoints={snapPoints}
        initialSnapIndex={0}
      >
        <ScrollView contentContainerStyle={{
          flex: 1,
          backgroundColor: 'white',
          padding:20
        }}>
          <SubTitle>List Of Food</SubTitle>
          {bottomSheetContent["foodNames"]&&bottomSheetContent["foodNames"].map((item,index)=>{
            return (<SubTitle key={index}> - {item}</SubTitle>)
          })}
          {!bottomSheetContent["foodNames"]&&<SubTitle> - No food found</SubTitle>}
          <SubTitle>Nutrients</SubTitle>
          {bottomSheetContent["nutrients"]&&bottomSheetContent["nutrients"].map((item,index)=>{
            return (<View key={index} style={{ display:'flex',flexDirection:'row',justifyContent:'space-between' }}>
              <SubTitle> - {item["name"]}</SubTitle>
              <SubTitle> - {item["amount"].toFixed(2)} {item["unit"]}</SubTitle>
            </View>)
          })}
          {!bottomSheetContent["nutrients"]&&<SubTitle> -  No nutrients found</SubTitle>}
        </ScrollView>
        <Button title="Reset Nutrition" style={{marginVertical:10}} onPress={()=>bottomSheetSetContent({foodNames:[],nutrients:[]})}/>
      </BottomSheet>
  )
}

const SubTitle = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: #000;
  margin-horizontal: 10px;
`
