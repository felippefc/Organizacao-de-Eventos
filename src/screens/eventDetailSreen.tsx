import { View, Text, StyleSheet } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../navigation';

type RouteProps = RouteProp<RootStackParamList, 'EventDetail'>;

export function EventDetailScreen() {
  const { params } = useRoute<RouteProps>();
  const { event } = params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{event.title}</Text>

      <Text style={styles.label}>Data</Text>
      <Text>{new Date(event.date).toLocaleString()}</Text>

      <Text style={styles.label}>Local</Text>
      <Text>{event.location}</Text>

      <Text style={styles.label}>Status</Text>
      <Text>{event.status}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  label: {
    marginTop: 12,
    fontWeight: 'bold',
  },
});
