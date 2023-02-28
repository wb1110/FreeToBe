import { useTheme } from '@rneui/themed';
import moment from 'moment';
import { StyleSheet, Text, View } from 'react-native';
import getTodaysTrackerData from '../../../functions/getTodaysTrackerData';
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
  },
  columnText: {
    fontSize: 12,
    color: 'white',
    fontWeight: '700',
  },
});

function Table() {
  const trackerState = useTrackerStore();
  const { tracker, goalProtein, goalCarbs, goalFat } = trackerState;
  const { theme } = useTheme();

  const todaysData = getTodaysTrackerData(tracker);
  const { protein, carbs, fats } = todaysData;
  const goalPercentage = (consumed, goal) => {
    if (consumed > 0 && goal > 0) {
      return Math.round((consumed / goal) * 100);
    }
    return 0;
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={{ ...styles.headerText, color: theme.colors.white }}>Macro</Text>
        <Text style={{ ...styles.headerText, color: theme.colors.white }}>Consumed</Text>
        <Text style={{ ...styles.headerText, color: theme.colors.white }}>%</Text>
      </View>
      <View style={{ ...styles.tableContainer, borderColor: theme.colors.white }}>
        <View style={{ ...styles.rowContainer, borderColor: theme.colors.white }}>
          <View style={{ width: 50 }}>
            <Text style={{ color: theme.colors.chart1, fontSize: 12, fontWeight: '700' }}>
              Protein
            </Text>
          </View>
          <View style={{ width: 50, alignItems: 'flex-end' }}>
            <Text style={{ ...styles.columnText, color: theme.colors.white }}>
              {todaysData?.protein.toFixed(2)}g
            </Text>
          </View>
          <View style={{ width: 50, alignItems: 'flex-end', marginRight: 6 }}>
            <Text style={{ ...styles.columnText, color: theme.colors.white }}>
              {goalPercentage(protein, goalProtein)}%
            </Text>
          </View>
        </View>
        <View style={{ ...styles.rowContainer, borderColor: theme.colors.white }}>
          <View style={{ width: 50 }}>
            <Text style={{ color: theme.colors.chart2, fontSize: 12, fontWeight: '700' }}>
              Carbs
            </Text>
          </View>
          <View style={{ width: 50, alignItems: 'flex-end' }}>
            <Text style={{ ...styles.columnText, color: theme.colors.white }}>
              {todaysData?.carbs.toFixed(2)}g
            </Text>
          </View>
          <View style={{ width: 50, alignItems: 'flex-end', marginRight: 6 }}>
            <Text style={{ ...styles.columnText, color: theme.colors.white }}>
              {goalPercentage(carbs, goalCarbs)}%
            </Text>
          </View>
        </View>
        <View style={{ ...styles.rowContainer, borderColor: theme.colors.white }}>
          <View style={{ width: 50 }}>
            <Text style={{ color: theme.colors.chart3, fontSize: 12, fontWeight: '700' }}>Fat</Text>
          </View>
          <View style={{ width: 50, alignItems: 'flex-end' }}>
            <Text style={{ ...styles.columnText, color: theme.colors.white }}>
              {todaysData?.fats.toFixed(2)}g
            </Text>
          </View>
          <View style={{ width: 50, alignItems: 'flex-end', marginRight: 6 }}>
            <Text style={{ ...styles.columnText, color: theme.colors.white }}>
              {goalPercentage(fats, goalFat)}%
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Table;
