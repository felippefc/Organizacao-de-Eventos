import { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import { getEvents } from '../api/apiEvents';
import { Event } from '../types/events';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation';

type NavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  'EventList'
>;


export function EventListScreen() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);
  const navigation = useNavigation<NavigationProps>();


  async function loadEvents() {
    try {
      setLoading(true);
      setError(null);
      const data = await getEvents();
      setEvents(data);
      setFilteredEvents(data);
    } catch {
      setError('Erro ao carregar eventos');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadEvents();
  }, []);

  if (loading) {
    return (
      <SafeAreaView style={styles.center}>
        <ActivityIndicator size="large" />
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={styles.center}>
        <Text>{error}</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <TextInput
        placeholder="Buscar evento pelo título"
        value={search}
        onChangeText={handleSearch}
        style={styles.input}
      />


      <FlatList
        data={filteredEvents}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('EventDetail', { event: item })}
          >
            <Text style={styles.title}>{item.title}</Text>
            <Text>{item.location}</Text>
            <Text style={styles.status}>Status: {item.status}</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );



  function handleSearch(text: string) {
    setSearch(text);

    const filtered = events.filter((event) =>
      event.title.toLowerCase().includes(text.toLowerCase())
    );

    setFilteredEvents(filtered);
  }

}




const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingHorizontal: 24,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  listContent: {
    paddingBottom: 24,
  },
  card: {
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#f2f2f242',
    marginBottom: 16,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  status: {
    marginTop: 4,
    opacity: 0.7,
  },
  input: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ddd',
  },

});

