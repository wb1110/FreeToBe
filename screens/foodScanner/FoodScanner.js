import { BarCodeScanner } from 'expo-barcode-scanner';
import { useEffect, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import StandardButton from '../../components/Buttons/StandardButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
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
  boxContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function FoodScanner({ setSearch, modalOpen, setModalOpen }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  const getBarCodeScannerPermissions = async () => {
    const { status } = await BarCodeScanner.requestPermissionsAsync();
    setHasPermission(status === 'granted');
  };

  useEffect(() => {
    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setSearch(data);
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
        <StandardButton title="Allow Camera" onPress={() => getBarCodeScannerPermissions()} />
      </View>
    );
  }

  return (
    <Modal
      animationType="fade"
      transparent
      visible={modalOpen}
      onRequestClose={() => {
        setModalOpen(!modalOpen);
      }}
    >
      <TouchableOpacity
        style={styles.container}
        activeOpacity={1}
        onPressOut={() => setModalOpen(!modalOpen)}
      >
        <TouchableWithoutFeedback>
          <View style={styles.boxContainer}>
            <View style={styles.barcodebox}>
              <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={{ height: 400, width: 400 }}
              />
            </View>
            {scanned && (
              <StandardButton title="Tap to Scan Again" onPress={() => setScanned(false)} />
            )}
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>
  );
}
