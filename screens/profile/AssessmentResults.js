import { Text } from '@rneui/themed';
import { VictoryBar, VictoryChart, VictoryTheme } from 'victory-native';
import Container from '../../components/Container';
import Calculations from './Calculations';

const data = [
  { year: '2011', earnings: 13000 },
  { year: '2012', earnings: 16500 },
  { year: '2013', earnings: 14250 },
  { year: '2014', earnings: 19000 },
];

export default function AssessmentResults() {
  return (
    <Container>
      <Text h1>AssessmentResults</Text>
      <VictoryChart width={350} theme={VictoryTheme.material}>
        <VictoryBar data={data} x="quarter" y="earnings" />
      </VictoryChart>
      <Calculations />
    </Container>
  );
}
