import { Text, TouchableOpacity } from 'react-native'
import Settings from '../../assets/global/settings.svg'
import { BottomSheetStore } from '../../store/toggle-and-content-store'
export default function Icon_Settings(props) {
  const { text, ml } = props
  const setToggle = BottomSheetStore((state) => state.setActive)
  const isActive = BottomSheetStore((state) => state.isActive)
  return (
    <TouchableOpacity
      style={{ flexDirection: 'row', alignItems: 'center' }}
      onPress={()=>setToggle(!isActive)}
    >
      <Settings />
      {text && <Text style={{ marginLeft: ml }}>{text}</Text>}
    </TouchableOpacity>
  )
}
