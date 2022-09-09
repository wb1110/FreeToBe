import { View } from 'react-native';

function Container(props) {
  const { flexGrow, children, height } = props;
  return (
    <View contentContainerStyle={{flexGrow}} style={{ flex: 1, alignItems: 'center', justifyContent: 'center', margin: 'auto', padding: '2%', width: '100%', height }}>
      {children}
    </View>
  );
}

export default Container;
