interface IUseNewTask {
  params?: Partial<Task>;
  refetch?: () => void;
}

import {useState} from 'react';
import {useNavigation, CommonActions} from '@react-navigation/native';
import {Task} from '../types/Task';
import Toast from 'react-native-toast-message';
import {
  useAddTaskMutation,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
  useGetTasksQuery,
} from '../services/api';

const useNewTask = ({params = {}, refetch}: IUseNewTask) => {
  const {data: items = {tasks: []}, error} = useGetTasksQuery();
  const task = Array.isArray(items)
    ? items.find(item => item.id === params?.id)
    : null;
  const [currentTitle, setCurrentTitle] = useState(
    task?.title || params?.title,
  );
  const [currentDescription, setCurrentDescription] = useState(
    task?.description || params?.description,
  );
  const navigation = useNavigation();

  const [addTask, {isLoading: isAdding}] = useAddTaskMutation();
  const [updateTask, {isLoading: isUpdating}] = useUpdateTaskMutation();
  const [deleteTask, {isLoading: isDeleting}] = useDeleteTaskMutation();

  const isDisableButton = !currentTitle || !currentDescription;
  const handleDeleteTask = async (deleteId?: string) => {
    const taskId = deleteId || params?.id;

    if (taskId === undefined || taskId === null) {
      Toast.show({type: 'error', text1: 'ID não encontrado', position: 'top'});
      return;
    }
    try {
      await deleteTask({id: taskId}).unwrap();
      Toast.show({
        type: 'success',
        text1: 'A tarefa foi excluída. Menos uma pendência na sua lista.',
      });
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'Home'}],
        }),
      );
    } catch (err) {
      Toast.show({
        type: 'error',
        text1: 'Erro ao deletar',
        text2: String(err),
      });
    }
  };

  const handleCheckTask = async (task: Task) => {
    if (task.id === undefined || task.id === null) {
      Toast.show({type: 'error', text1: 'ID não encontrado', position: 'top'});
      return;
    }

    try {
      await updateTask({
        id: task.id,
        task: {
          title: task.title,
          description: task.description,
          completed: !task.completed,
        },
      }).unwrap();
      Toast.show({
        type: 'success',
        text1: 'Você finalizou essa tarefa. Vamos para a próxima?',
      });
      if (refetch) {
        refetch();
      }
    } catch (err) {
      Toast.show({
        type: 'error',
        text1: 'Erro ao editar',
        text2: String(err),
      });
    }
  };

  const handleEditTask = async () => {
    if (params?.id === undefined || params?.id === null) {
      Toast.show({type: 'error', text1: 'ID não encontrado', position: 'top'});
      return;
    }

    try {
      await updateTask({
        id: params?.id,
        task: {
          title: currentTitle,
          description: currentDescription,
          completed: task?.completed ?? false,
        },
      }).unwrap();
      Toast.show({
        type: 'success',
        text1: 'As alterações foram salvas. Tudo pronto!',
      });
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'Home'}],
        }),
      );
    } catch (err) {
      Toast.show({
        type: 'error',
        text1: 'Erro ao editar',
        text2: String(err),
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
      Toast.show({
        type: 'success',
        text1: 'Nova tarefa adicionada. Boa sorte na execução!',
      });

      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'Home'}],
        }),
      );
    } catch (err) {
      Toast.show({
        type: 'error',
        text1: 'Erro ao criar tarefa',
        text2: String(err),
      });
    }
  };

  const handlerButtonConfirmation = params?.id ? handleEditTask : handleSubmit;

  return {
    handlerButtonConfirmation,
    handleDeleteTask,
    currentTitle,
    currentDescription,
    setCurrentDescription,
    setCurrentTitle,
    isDisableButton,
    handleCheckTask,
    isAdding,
    isUpdating,
    isDeleting,
    error,
  };
};
export default useNewTask;
