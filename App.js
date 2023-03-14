import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from '@expo/vector-icons/Ionicons'

import AllExpenses from './screens/AllExpenses'
import RecentExpenses from './screens/RecentExpenses'
import ManageExpense from './screens/ManageExpense'
import { GlobalStyles } from './constants/styles'
import IconButton from './components/UI/IconButton'

const Stack = createNativeStackNavigator()
const Tabs = createBottomTabNavigator()

const ExpenseOverview = () => {
  return (
    <Tabs.Navigator
      initialRouteName='RecentExpenses'
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: GlobalStyles.colors.white,
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        tabBarStyle: {
          backgroundColor: GlobalStyles.colors.primary500,
        },
        headerRight: ({ tintColor }) => (
          <IconButton
            icon='md-add'
            color={tintColor}
            size={30}
            onPress={() => {
              navigation.navigate('ManageExpense')
            }}
          />
        ),
      })}
    >
      <Tabs.Screen
        name='RecentExpenses'
        component={RecentExpenses}
        options={{
          title: 'Recent Expenses',
          tabBarLabel: 'Recent',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='hourglass' size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='AllExpenses'
        component={AllExpenses}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='calendar' size={size} color={color} />
          ),
        }}
      />
    </Tabs.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style='auto' />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='ExpenseOverview'
          screenOptions={{
            headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
            headerTintColor: GlobalStyles.colors.white,
          }}
        >
          <Stack.Screen
            name='ManageExpense'
            component={ManageExpense}
            options={{
              presentation: 'modal',
            }}
          />
          <Stack.Screen
            name='ExpenseOverview'
            component={ExpenseOverview}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}
