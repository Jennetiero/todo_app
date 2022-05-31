import { useEffect, useState } from 'react'
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography
} from '@mui/material'
import {
  doc,
  updateDoc,
  deleteDoc,
  collection,
  FirestoreDataConverter,
  QueryDocumentSnapshot,
  SnapshotOptions,
  WithFieldValue,
  DocumentData
} from 'firebase/firestore'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { db } from '../src/firebase'
import ToDo from './components/ToDo'
import ToDoForm from './components/ToDoForm'
import NavBar from './components/NavBar'
import { Task } from './interfaces/task'
import { Scrollbars } from 'react-custom-scrollbars'

const converter: FirestoreDataConverter<Task> = {
  toFirestore(task: WithFieldValue<Task>): DocumentData {
    return {
      completed: task.completed,
      created: task.created,
      userInput: task.userInput
    }
  },
  fromFirestore(snapshot: QueryDocumentSnapshot, options: SnapshotOptions) {
    const data = snapshot.data(options)
    return {
      completed: data.completed,
      id: snapshot.id,
      ref: snapshot.ref,
      created: data.created.toDate().toLocaleString(),
      userInput: data.userInput
    }
  }
}

function App() {
  const ref = collection(db, 'tasks').withConverter(converter)
  const [tasks, loading, error] = useCollectionData(ref)
  const [completedTasks, setCompletedTasks] = useState([])
  const [pendingTasks, setPendingTasks] = useState([])

  const handleComplete = async (todo) => {
    await updateDoc(doc(db, 'tasks', todo.id), { completed: !todo.completed })
  }

  const removeTask = async (id: any) => {
    await deleteDoc(doc(db, 'tasks', id))
  }

  useEffect(() => {
    if (tasks) {
      const complTasks = tasks.filter((task) => task.completed)
      setCompletedTasks(complTasks)

      const pendTasks = tasks.filter((task) => !task.completed)
      setPendingTasks(pendTasks)
    }
  }, [tasks])

  return (
    <Grid container>
      {tasks && (
        <>
          <NavBar total={tasks.length} />
          <Grid xs={12} item marginTop={5}>
            <Box sx={mainBox} className="App">
              <ToDoForm />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box
              display={'flex'}
              flexDirection={'row'}
              justifyContent="space-around"
              padding={10}
            >
              <Card sx={card} variant="outlined">
                <CardHeader sx={cardHeader} title="To Be Done" />
                <Scrollbars autoHeight={true} style={{ width: '100%' }}>
                  <CardContent>
                    {pendingTasks.length > 0 ? (
                      pendingTasks.map((todo) => (
                        <ToDo
                          todo={todo}
                          key={todo.id}
                          removeTask={removeTask}
                          handleComplete={handleComplete}
                        />
                      ))
                    ) : (
                      <Typography>No Pending Tasks. All Good!</Typography>
                    )}
                  </CardContent>
                </Scrollbars>
              </Card>
              <Card sx={card} variant="outlined">
                <CardHeader
                  sx={{ ...cardHeader, backgroundColor: '#2dd36f' }}
                  title="Completed Tasks"
                />
                <Scrollbars autoHeight={true} style={{ width: '100%' }}>
                  <CardContent sx={center}>
                    {completedTasks.length > 0 ? (
                      completedTasks.map((todo) => (
                        <ToDo
                          todo={todo}
                          key={todo.id}
                          removeTask={removeTask}
                          handleComplete={handleComplete}
                        />
                      ))
                    ) : (
                      <Typography>No Tasks Completed yet</Typography>
                    )}
                  </CardContent>
                </Scrollbars>
              </Card>
            </Box>
          </Grid>
        </>
      )}
    </Grid>
  )
}

// Styles
const center = {
  alignItems: 'center',
  justifyContent: 'center'
}

const mainBox = {
  display: 'flex',
  flexDirection: 'column',
  ...center
}

const card = {
  borderRadius: 2,
  width: '40%',
  height: '100%'
}

const cardHeader = {
  backgroundColor: '#3880ff',
  color: '#fff'
}

export default App
