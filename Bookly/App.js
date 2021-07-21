import React, { useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity
} from 'react-native';

const Book = (props) => {
  const { item, handleDelete } = props;
  const { book, id } = item;
  return (
    <View style={styles.bookWrapper}>
        <Text>{book}</Text>
        <TouchableOpacity onPress={() => handleDelete(id)}>
          <Text>delete</Text>
        </TouchableOpacity>
    </View>
  )
}

const App = () => {
  const existingBooks = [
    {
      id: 1001116,
      book: 'A TIME TO KILL BY JOHN GRISHAM'
    },
    {
      id: 1000333,
      book: 'BRAVE NEW WORLD'
    },
    {
      id: 1000445,
      book: 'ROSEMARY AND RUE'
    },
    {
      id: 1000543,
      book: 'PALE FIRE'
    }
  ]
  const [ books, setBooks ] = useState(existingBooks);
  const [ userInput, setUserInput ] = useState('');

const handleChange = (value) => {
  setUserInput(value)
}

const handleSubmit = () => {
  const id = Math.floor(Math.random() * 1000);
  setBooks([...books, {
    id,
    book: userInput
  }])

  setUserInput(' ')
}

const handleDelete = (id) => {
  setBooks(books.filter(item => item.id !== id))
}


  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.heading}>Bookly</Text>
        <TextInput onChangeText={handleChange} value={userInput} style={styles.userInput}/>
        <Button title='Add books' color='blue' onPress={handleSubmit}/>
        {
          books && books.map((item,i) => <Book key={i} handleDelete={handleDelete} item={item}/>)
        }
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '95%',
    margin: 10,
  },
  heading: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 20
  },
  userInput: {
    borderColor: 'grey',
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 7,
  },
  bookWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'grey',
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 7,
  }
});

export default App;
