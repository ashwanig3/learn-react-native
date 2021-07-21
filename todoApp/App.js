import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  Button,
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet
} from 'react-native';


function Todo(props) {
  const {todo, onDelete} = props;
  
  const {value, id} = todo

  return (
    <View style={todoStyles.container}>
      <Text>{value}</Text>
      <TouchableOpacity onPress={() => onDelete(id)}>
        <Text>
          Delete
        </Text>
      </TouchableOpacity>
    </View>
  )
}


const todoStyles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderRadius: 5
  },
  todoInput: {
    borderColor: 'red',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 20
  }
})


const App = () => {
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState('')
  
  function handleChange(value) {
    setTodo(value)
  }

  function handleAddTodo() {
    const randomId = Math.floor(Math.random() * 1000)
    
    setTodos([...todos, {
      id: randomId,
      value: todo
    }])

    setTodo('')
  }

  function handleDelete(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <SafeAreaView>
      <TextInput onChangeText={handleChange} style={todoStyles.todoInput}
        value={todo}
      />
      <Button title="Add Todo" onPress={handleAddTodo}/>
      {
        todos.map(todo => <Todo todo={todo} onDelete={handleDelete} key={todo.id}/>)
      }
    </SafeAreaView>
  );
};

export default App;
