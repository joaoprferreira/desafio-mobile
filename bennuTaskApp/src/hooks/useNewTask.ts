interface IUseNewTask {
  params?: Partial<Task>;
}

import {useState} from 'react';
import {useNavigation, CommonActions} from '@react-navigation/native';
import {Task} from '../types/Task';
import Toast from 'react-native-toast-message';
import {
  useAddTaskMutation,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
} from '../services/api';

const useNewTask = ({params = {}}: IUseNewTask) => {
  const {id, title, description, completed} = params;
  const [currentTitle, setCurrentTitle] = useState(title || '');
  const [currentDescription, setCurrentDescription] = useState(
    description || '',
  );
  const navigation = useNavigation();

  const [addTask] = useAddTaskMutation();
  const [updateTask] = useUpdateTaskMutation();
  const [deleteTask] = useDeleteTaskMutation();

  const handleDeleteTask = async (deleteId?: string) => {
    const taskId = deleteId || id;

    if (!taskId) {
      Toast.show({type: 'error', text1: 'ID não encontrado', position: 'top'});
      return;
    }
    try {
      await deleteTask({id: taskId}).unwrap();
      Toast.show({type: 'success', text1: 'Task deletada com sucesso'});
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'Home'}],
        }),
      );
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Erro ao deletar',
        text2: String(error),
      });
    }
  };

  const handleEditTask = async () => {
    if (!id) {
      Toast.show({type: 'error', text1: 'ID não encontrado', position: 'top'});
      return;
    }
    try {
      await updateTask({
        id,
        task: {
          title: currentTitle,
          description: currentDescription,
          completed: completed ?? false,
        },
      }).unwrap();
      Toast.show({type: 'success', text1: 'Task editada com sucesso'});
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'Home'}],
        }),
      );
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Erro ao editar',
        text2: String(error),
      });
    }
  };

  const handleSubmit = async () => {
    if (!(currentTitle ?? '').trim()) {
      Toast.show({type: 'error', text1: 'O título é obrigatório'});
      return;
    }
    try {
      await addTask({
        title: currentTitle,
        description: currentDescription,
        completed: false,
      }).unwrap();
      setCurrentTitle('');
      setCurrentDescription('');
      Toast.show({type: 'success', text1: 'Tarefa criada com sucesso!'});
    } catch (error) {
      console.log('Error::', error);
      Toast.show({
        type: 'error',
        text1: 'Erro ao criar tarefa',
        text2: String(error),
      });
    }
  };

  const handlerButtonConfirmation = id ? handleEditTask : handleSubmit;

  return {
    handlerButtonConfirmation,
    handleDeleteTask,
    currentTitle,
    currentDescription,
    setCurrentDescription,
    setCurrentTitle,
  };
};
export default useNewTask;
