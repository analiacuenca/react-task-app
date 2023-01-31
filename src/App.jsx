import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  // devuelve un arreglo con el elemento eliminado indicado
  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  return (
    <main className="bg-zinc-900 h-screen">
      <div className="container mx-auto p-10">
        <TaskForm />
        <TaskList />
      </div>
    </main>
  );
}

export default App;
