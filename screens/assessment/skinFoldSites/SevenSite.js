import { Input } from "@rneui/themed";
import React from 'react'
import { View } from "react-native";
import Container from '../../../components/Container'

const SevenSite = () => {
  return (
    <View style={{ width: "100%", flex: 1, flexGrow: 1, flexDirection: "row", marginTop: "25%" }}>
      <View style={{ flex: 1, flexGrow: 1 }}>
        <Input label='Abdominal' style={{ flex: 1 }}/>
        <Input label='Triceps'  style={{ flex: 1 }}/>
        <Input label='Suprailiac'  style={{ flex: 1 }} />
        <Input label='Suprailiac'  style={{ flex: 1 }} />
      </View>
      <View style={{ flex: 1, flexGrow: 1 }}>
        <Input label='Suprailiac'  style={{ flex: 1 }} />
        <Input label='Suprailiac'  style={{ flex: 1 }} />
        <Input label='Suprailiac'  style={{ flex: 1 }} />
      </View>
    </View>
  )
}

export default SevenSite