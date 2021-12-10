import React, {useState, useRef} from 'react';
import {View, Text, TextInput, FlatList, TouchableOpacity} from 'react-native';
import {styles} from './TodoList.styles';

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');

  const addTodo = () => {
    let todoTemp = [...todos, todo];
    setTodos(todoTemp);
    setTodo('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo list</Text>
      <View style={styles.textInputContainer}>
        <TextInput
          value={todo}
          onChangeText={e => setTodo(e)}
          onSubmitEditing={addTodo}
          style={styles.textInput}
          placeholder="Enter a todo"
        />

        {todo.length > 0 && (
          <TouchableOpacity style={styles.clear} onPress={() => setTodo('')}>
            <Text style={styles.clearText}>X</Text>
          </TouchableOpacity>
        )}
      </View>

      <Text style={styles.listTitle}>My list</Text>

      {todos.length > 0 ? (
        <FlatList
          data={todos}
          renderItem={({item, index}) => {
            return (
              <View style={styles.todoContainer} key={index}>
                <Text style={styles.todo}>{item}</Text>
              </View>
            );
          }}
        />
      ) : (
        <Text style={styles.noTodo}>No todo available</Text>
      )}
    </View>
  );
}
