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
import { deleteEvent } from '../api/apiEvents';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


type RouteProps = RouteProp<RootStackParamList, 'EventDetail'>;
type NavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  'EventDetail'
>;


export function EventDetailScreen() {
  const { params } = useRoute<RouteProps>();
  const { event } = params;
  const navigation = useNavigation<NavigationProps>();


  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<EventStatus>(event.status);

  function handleDeleteEvent() {
    Alert.alert(
      'Remover evento',
      'Tem certeza que deseja remover este evento?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Remover',
          style: 'destructive',
          onPress: async () => {
            try {
              setLoading(true);
              await deleteEvent(event.id);
              Alert.alert('Sucesso', 'Evento removido');
              navigation.goBack();
            } catch {
              Alert.alert('Erro', 'Não foi possível remover o evento');
            } finally {
              setLoading(false);
            }
          },
        },
      ]
    );
  }


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
            <View style={styles.deleteContainer}>
              <Button
                title="Remover evento"
                color="red"
                onPress={handleDeleteEvent}
                disabled={loading}
              />
            </View>
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
  deleteContainer: {
  marginTop: 32,
},

});

