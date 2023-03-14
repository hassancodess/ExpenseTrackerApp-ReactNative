import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ExpensesSummary from './ExpensesSummary'
import ExpensesList from './ExpensesList'
import { GlobalStyles } from '../../constants/styles'

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    name: 'Milk',
    amount: 59.99,
    date: new Date('2021-12-19'),
  },
  {
    id: 'e2',
    name: 'Laptop',
    amount: 799.99,
    date: new Date('2021-12-5'),
  },
  {
    id: 'e3',
    name: 'Samsung Phone',
    amount: 199.99,
    date: new Date('2022-01-19'),
  },
  {
    id: 'e4',
    name: 'Perfume',
    amount: 29.99,
    date: new Date('2022-02-10'),
  },
  {
    id: 'e5',
    name: 'Strawberries',
    amount: 9.99,
    date: new Date('2021-12-27'),
  },
]

const ExpensesOutput = ({ expenses, periodName }) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={periodName} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  )
}

export default ExpensesOutput

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
    flex: 1,
  },
})
