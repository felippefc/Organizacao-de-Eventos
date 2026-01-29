import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  ActivityIndicator,
  Alert,
  StyleSheet,
} from 'react-native';
import { createEvent } from '../api/apiEvents';
import { EventStatus } from '../types/events';
import { useNavigation } from '@react-navigation/native';

export function CreateEventScreen() {
  const navigation = useNavigation();

  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [status, setStatus] = useState<EventStatus>('PLANNED');

  const [loading, setLoading] = useState(false);

  function validateForm() {
    if (!title.trim()) {
      Alert.alert('Erro', 'Título é obrigatório');
      return false;
    }

    if (title.length < 3) {
      Alert.alert('Erro', 'Título deve ter ao menos 3 caracteres');
      return false;
    }

    if (!date.trim()) {
      Alert.alert('Erro', 'Data é obrigatória');
      return false;
    }

    if (isNaN(Date.parse(date))) {
      Alert.alert('Erro', 'Data inválida');
      return false;
    }

    if (!location.trim()) {
      Alert.alert('Erro', 'Local é obrigatório');
      return false;
    }

    return true;
  }

  async function handleSubmit() {
    if (!validateForm()) return;

    try {
      setLoading(true);

      await createEvent({
        title,
        date,
        location,
        status,
      });

      Alert.alert('Sucesso', 'Evento criado com sucesso');
      navigation.goBack();
    } catch {
      Alert.alert('Erro', 'Não foi possível criar o evento');
    } finally {
      setLoading(false);
    }
  }


  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Título"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />

      <TextInput
        placeholder="Data (YYYY-MM-DDTHH:mm:ss)"
        value={date}
        onChangeText={setDate}
        style={styles.input}
      />

      <TextInput
        placeholder="Local"
        value={location}
        onChangeText={setLocation}
        style={styles.input}
      />

      <TextInput
        placeholder="Status (PLANNED, CONFIRMED, CANCELLED)"
        value={status}
        onChangeText={(text) => setStatus(text as EventStatus)}
        style={styles.input}
      />

      {loading ? (
        <ActivityIndicator />
      ) : (
        <Button title="Salvar evento" onPress={handleSubmit} disabled={loading}/>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
});
