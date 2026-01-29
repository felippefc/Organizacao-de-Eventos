import AsyncStorage from '@react-native-async-storage/async-storage';
import { Event } from '../types/events';

const STORAGE_KEY = '@events';

export async function saveEvents(events: Event[]) {
  await AsyncStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(events)
  );
}

export async function loadEvents(): Promise<Event[]> {
  const data = await AsyncStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

export async function clearEvents() {
  await AsyncStorage.removeItem(STORAGE_KEY);
}
