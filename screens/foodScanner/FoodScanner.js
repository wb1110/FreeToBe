import { BarCodeScanner } from 'expo-barcode-scanner';
import { useEffect, useState } from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';

export default function FoodScanner() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [code, setCode] = useState('');

  const getBarCodeScannerPermissions = async () => {
    const { status } = await BarCodeScanner.requestPermissionsAsync();
    setHasPermission(status === 'granted');
  };

  useEffect(() => {
    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setCode(data);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return (
      <View>
        <Text>Requesting for camera permission</Text>
      </View>
    );
  }
  if (hasPermission === false) {
    return (
      <View>
        <Text>No access to camera</Text>
        <Button title="Allow Camera" onPress={() => getBarCodeScannerPermissions()} />
      </View>
    );
  }

  return (
    <View>
      <View style={styles.barcodebox}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{ height: 400, width: 400 }}
        />
        {scanned && (
          <Button title="Tap to Scan Again" onPress={() => setScanned(false)} color="tomato" />
        )}
      </View>
      <Text>{code}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  barcodebox: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
    width: 300,
    overflow: 'hidden',
    borderRadius: 30,
    backgroundColor: 'tomato',
  },
});
