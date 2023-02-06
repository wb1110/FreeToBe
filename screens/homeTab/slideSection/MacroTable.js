import moment from 'moment';
import { StyleSheet, Text, View } from 'react-native';
import useTrackerStore from '../../../state/TrackerStore';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 20,
  },
  tableContainer: {
    marginTop: 2,
    borderWidth: 3,
    borderRadius: 20,
    borderColor: '#FFFFFF50',
    paddingTop: 12,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 130,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 12,
    color: 'white',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 15,
    borderBottomWidth: 2,
    borderColor: '#FFFFFF50',
  },
  columnText: {
    fontSize: 12,
    color: 'white',
    fontWeight: '700',
  },
});

function Table() {
  const trackerState = useTrackerStore();
  const { tracker } = trackerState;

  function getCurrentData(dataArray) {
    const today = moment(new Date()).format('MM/DD/YYYY');
    return dataArray.find((item) => item.date === today);
  }

  const todaysData = getCurrentData(tracker);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Macro</Text>
        <Text style={styles.headerText}>Consumed</Text>
        <Text style={styles.headerText}>%</Text>
      </View>
      <View style={styles.tableContainer}>
        <View style={styles.rowContainer}>
          <View style={{ width: 50 }}>
            <Text style={{ color: '#283618', fontSize: 12, fontWeight: '700' }}>Protein</Text>
          </View>
          <View style={{ width: 50 }}>
            <Text style={styles.columnText}>{todaysData?.protein}g</Text>
          </View>
          <View style={{ width: 50 }}>
            <Text style={styles.columnText}>{todaysData?.protein}g</Text>
          </View>
          {/* <Text style={styles.columnText}>{((value / goals[macro]) * 100).toFixed(2)}%</Text> */}
        </View>
        <View style={styles.rowContainer}>
          <View style={{ width: 50 }}>
            <Text style={{ color: '#F5F5DC', fontSize: 12, fontWeight: '700' }}>Carbs</Text>
          </View>
          <View style={{ width: 50 }}>
            <Text style={styles.columnText}>{todaysData?.carbs}g</Text>
          </View>
          <View style={{ width: 50 }}>
            <Text style={styles.columnText}>{todaysData?.protein}g</Text>
          </View>
          {/* <Text style={styles.columnText}>{((value / goals[macro]) * 100).toFixed(2)}%</Text> */}
        </View>
        <View style={styles.rowContainer}>
          <View style={{ width: 50 }}>
            <Text style={{ color: '#800020', fontSize: 12, fontWeight: '700' }}>Fat</Text>
          </View>
          <View style={{ width: 50 }}>
            <Text style={styles.columnText}>{todaysData?.fats}g</Text>
          </View>
          <View style={{ width: 50 }}>
            <Text style={styles.columnText}>{todaysData?.protein}g</Text>
          </View>
          {/* <Text style={styles.columnText}>{((value / goals[macro]) * 100).toFixed(2)}%</Text> */}
        </View>
      </View>
    </View>
  );
}

export default Table;
