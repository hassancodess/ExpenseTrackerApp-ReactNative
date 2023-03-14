import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import ExpenseItem from './ExpenseItem'

const renderExpenseItem = ({ item }) => {
  return (
    // <Text>{item.name}</Text>
    <ExpenseItem expense={item} />
  )
}

const ExpensesList = ({ expenses }) => {
  return (
    <FlatList
      data={expenses}
      keyExtractor={(item) => item.id}
      renderItem={renderExpenseItem}
    />
  )
}

export default ExpensesList

const styles = StyleSheet.create({})
