import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#282F44',
    flex: 1,
    padding: 20,
  },
  title: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  listTitle: {
    fontSize: 17,
    marginVertical: 10,
    color: 'white',
    fontWeight: 'bold',
  },
  textInput: {
    paddingHorizontal: 20,

    fontSize: 16,
    fontWeight: 'bold',
    color: '#545454',
    flex: 1,
  },
  textInputContainer: {
    backgroundColor: 'white',
    borderRadius: 4,
    flexDirection: 'row',
    marginVertical: 15,
  },
  clear: {
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    width: 25,
    height: 25,
    borderRadius: 15,
    alignSelf: 'center',
    padding: 2,
    marginRight: 10,
  },
  clearText: {fontWeight: 'bold', fontSize: 13},
  todoContainer: {
    backgroundColor: '#99b8cc',
    padding: 12,
    borderRadius: 5,
    marginBottom: 14,
  },
  todo: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 14,
  },
  noTodo: {
    color: 'orange',
    // alignSelf: 'center',
  },
});
