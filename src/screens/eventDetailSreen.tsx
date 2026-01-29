import { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';

import { RootStackParamList } from '../navigation';
import { updateEventStatus } from '../api/apiEvents';
import { Event, EventStatus } from '../types/events';

type RouteProps = RouteProp<RootStackParamList, 'EventDetail'>;

export function EventDetailScreen() {
  const { params } = useRoute<RouteProps>();
  const { event } = params;

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<EventStatus>(event.status);

  async function handleUpdateStatus(newStatus: EventStatus) {
    try {
      setLoading(true);

      const updatedEvent = await updateEventStatus(
        event.id,
        newStatus
      );

      setStatus(updatedEvent.status);
      Alert.alert('Sucesso', 'Status atualizado');
    } catch {
      Alert.alert('Erro', 'Não foi possível atualizar o status');
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{event.title}</Text>

      <Text style={styles.label}>Data</Text>
      <Text>{new Date(event.date).toLocaleString()}</Text>

      <Text style={styles.label}>Local</Text>
      <Text>{event.location}</Text>

      <Text style={styles.label}>Status atual</Text>
      <Text>{status}</Text>

      <View style={styles.actions}>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <>
            <Button
              title="Planejado"
              onPress={() => handleUpdateStatus('PLANNED')}
            />
            <Button
              title="Confirmado"
              onPress={() => handleUpdateStatus('CONFIRMED')}
            />
            <Button
              title="Cancelado"
              onPress={() => handleUpdateStatus('CANCELLED')}
            />
          </>
        )}
      </View>
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
  actions: {
    marginTop: 24,
    gap: 12,
  },
});

