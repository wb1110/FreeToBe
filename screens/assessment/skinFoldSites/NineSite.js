import { Input } from "@rneui/themed";
import { View } from "react-native";
import StandardButton from "../../../components/Buttons/StandardButton";

function NineSite() {
  return (
    <View style={{ alignItems: 'center' }}>
      <View style={{ width: "100%", flex: 1, flexGrow: 1, flexDirection: "row", marginTop: "20%" }}>
        <View style={{ flex: 1, flexGrow: 1 }}>
          <Input label='Chest' style={{ flex: 1 }}/>
          <Input label='Abdominal'  style={{ flex: 1 }}/>
          <Input label='Thigh'  style={{ flex: 1 }} />
          <Input label='Bicep'  style={{ flex: 1 }} />
          <Input label='Tricep'  style={{ flex: 1 }} />
        </View>
        <View style={{ flex: 1, flexGrow: 1 }}>
          <Input label='Subscapular'  style={{ flex: 1 }} />
          <Input label='Suprailiac'  style={{ flex: 1 }} />
          <Input label='Lower Back'  style={{ flex: 1 }} />
          <Input label='Calf'  style={{ flex: 1 }} />
        </View>
      </View>
    <StandardButton title="Submit" onPress={() => alert('success!')}/>
    </View>
  )
}

export default NineSite