import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button, Modal } from 'react-native';


const GoalInput = props => {

    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    }

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');

    }
    return (<Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
            <TextInput placeholder="Enter your goal here !!!"
                style={styles.input}
                value={enteredGoal}
                onChangeText={goalInputHandler} />
            <View style={styles.buttons}>
                <View style={styles.button}>
                    <Button
                        title="CANCEL"
                        color="red"
                        onPress={props.onCancelGoal} /></View>
                <View style={styles.button}>
                    <Button
                        title="ADD"
                        onPress={addGoalHandler} /></View>
            </View>
        </View></Modal>)
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center'
    },
    input: {
        width: '70%',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        padding: 10,
        marginBottom: 5
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '60%'
    },
    button: {
        width: '40%'
    }
})

export default GoalInput;