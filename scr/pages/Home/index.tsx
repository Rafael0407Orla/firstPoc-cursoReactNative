import { Alert, FlatList } from 'react-native';
import { Body } from '../../components/body';
import { Container } from '../../components/container';
import { EmptyList } from '../../components/emptyListComponent';
import { Header } from '../../components/header';
import { InfoTab } from '../../components/infoTab';
import { Input } from '../../components/input';
import { Task } from '../../components/task';
import { useState } from 'react';

interface TaskItem {
  text: string;
  done: boolean;
}

export default function Home() {
  const [tasks, setTasks] = useState<TaskItem[]>([]);
  const [task, setTask] = useState('');
  const [criadas, setCriadas] = useState(0);
  const [concluidas, setConcluidas] = useState(0);
  const [feito, setFeito] = useState(false);

  function onDeleteTask(item: TaskItem) {
    setTasks(prevState => prevState.filter(task => task.text !== item.text));
    setCriadas(prevCount => prevCount - 1);
    setConcluidas(prevCount => item.done ? prevCount -1 : prevCount)
  }

  function creatTask() {
    if (setToSafe(task)) {
      return Alert.alert('OPS', `Tarefa já existe`);
    } else {
      setTasks(prevState => [...prevState, { text: task, done: false }]);
      setCriadas(prevCount => prevCount + 1);
      setTask('');
    }
  }

  function setToSafe(item: string) {
    return tasks.some(task => task.text === item) || !item;
  }

  function markDone(item: { text: string; done: boolean }) {
    const updatedItem = { ...item, done: !item.done }; // Create a new object with the updated done property
    setTasks(prevState =>
      prevState.map(task => (task.text === item.text ? updatedItem : task))
    ); // Update the tasks array with the new object
    setConcluidas(prevCount => (updatedItem.done ? prevCount + 1 : prevCount - 1)); // Update the count based on the previous state of the item.done property
  }
  
  return (
    <Body>
      <Header />
      <Container>
        <Input
          onChangeText={setTask}
          onPress={creatTask}
        />
        <InfoTab
          criadas={criadas}
          concluidas={concluidas}
        />
        <FlatList
          data={tasks}
          keyExtractor={(item, index) => `${item.text}-${index}`}
          renderItem={({ item }) => (
            <Task
              text={item.text}
              onRemove={() => onDeleteTask(item)}
              done={item.done}
              onPress={() => markDone(item)}
            />
          )}
          ListEmptyComponent={() => (
            <EmptyList />
          )}
        />
      </Container>
    </Body>
  );
}
