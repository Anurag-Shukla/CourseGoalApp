import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = props => {
    return <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
        <View style={styles.listItems}>
        <Text>{props.title}</Text>
    </View>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    listItems: {
        padding: 10,
        backgroundColor: '#ccc',
        borderWidth: 1,
        borderColor: '#aaa',
        marginVertical: 10
    }
})

export default GoalItem;