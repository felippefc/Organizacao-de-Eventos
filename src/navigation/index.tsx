import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { EventListScreen } from '../screens/eventListScreen';
import { EventDetailScreen } from '../screens/eventDetailSreen';
import { Event } from '../types/events';

export type RootStackParamList = {
  EventList: undefined;
  EventDetail: { event: Event };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="EventList"
          component={EventListScreen}
          options={{ title: 'Eventos' }}
        />
        <Stack.Screen
          name="EventDetail"
          component={EventDetailScreen}
          options={{ title: 'Detalhes do Evento' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
