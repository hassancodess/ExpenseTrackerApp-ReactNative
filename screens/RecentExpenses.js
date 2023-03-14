import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput'

const RecentExpenses = () => {
  return <ExpensesOutput periodName='Last 7 Days' />
}

export default RecentExpenses

const styles = StyleSheet.create({})
