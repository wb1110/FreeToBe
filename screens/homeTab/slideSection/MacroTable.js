import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import moment from 'moment';
import useTrackerStore from '../../../state/TrackerStore';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 20,
  },
  tableContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
  },
  columnText: {
    fontSize: 16,
  },
});

function Table() {
  const trackerState = useTrackerStore();
  const { tracker } = trackerState;

  function getCurrentData(dataArray) {
    const today = moment(new Date()).format('MM/DD/YYYY');
    return dataArray.find((item) => item.date === today);
  }

  console.log(getCurrentData(tracker));

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Macro</Text>
        <Text style={styles.headerText}>Consumed</Text>
        <Text style={styles.headerText}>%</Text>
      </View>
      <View style={styles.tableContainer}>
        {/* {Object.entries(data).map(([macro, value], index) => (
          <View key={index} style={styles.rowContainer}>
            <Text style={styles.columnText}>{macro}</Text>
            <Text style={styles.columnText}>{value}g</Text>
            <Text style={styles.columnText}>{((value / goals[macro]) * 100).toFixed(2)}%</Text>
          </View>
        ))} */}
      </View>
    </View>
  );
}

export default Table;
