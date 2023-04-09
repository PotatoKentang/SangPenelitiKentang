import { View,TextInput,Button } from "react-native";

export function TextBasedCalculatorPage() {
  const [text, onChangeText] = React.useState('Useless Placeholder');
  return (
    <View>
      <Text>Textbased Nutrition Calculator</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => onChangeText(text)}
        value={text}
      />
      <Button title="Calculate" onPress={()=>{console.log("calculating")}}/>
    </View>
  );
}