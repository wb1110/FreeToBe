import { Input } from "@rneui/themed";
import { View } from "react-native";

function NineSite() {
  return (
    <View style={{ width: "100%", flex: 1, flexGrow: 1, flexDirection: "row", marginTop: "20%" }}>
      <View style={{ flex: 1, flexGrow: 1 }}>
        <Input label='Abdominal' style={{ flex: 1 }}/>
        <Input label='Triceps'  style={{ flex: 1 }}/>
        <Input label='Suprailiac'  style={{ flex: 1 }} />
        <Input label='Suprailiac'  style={{ flex: 1 }} />
        <Input label='Suprailiac'  style={{ flex: 1 }} />
      </View>
      <View style={{ flex: 1, flexGrow: 1 }}>
        <Input label='Suprailiac'  style={{ flex: 1 }} />
        <Input label='Suprailiac'  style={{ flex: 1 }} />
        <Input label='Suprailiac'  style={{ flex: 1 }} />
        <Input label='Suprailiac'  style={{ flex: 1 }} />
      </View>
    </View>
  )
}

export default NineSite