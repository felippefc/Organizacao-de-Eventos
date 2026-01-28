import { api } from './api';
import { Event, EventStatus } from '../types/events';

export async function getEvents(): Promise<Event[]> {
  const response = await api.get<Event[]>('/events');
  return response.data;
}

export async function createEvent(
  data: Omit<Event, 'id' | 'createdAt'>
): Promise<Event> {
  const response = await api.post<Event>('/events', data);
  return response.data;
}

export async function updateEventStatus(
  id: string,
  status: EventStatus
): Promise<Event> {
  const response = await api.put<Event>(`/events/${id}`, { status });
  return response.data;
}

export async function deleteEvent(id: string): Promise<void> {
  await api.delete(`/events/${id}`);
}
