export type EventStatus = 'PLANNED' | 'CONFIRMED' | 'CANCELLED';

export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  status: EventStatus;
  createdAt: string;
}
