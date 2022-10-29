import { useEffect, useState } from "react";
import axios from "axios";
import AddTask from "../components/addTask/AddTask";
import Header from "../components/header/Header";
import TaskList from "../components/taskList/TaskList";
import Footer from "../components/footer/Footer";
import Logo from "../components/logo/Logo";

function Home() {
  const [isOpen, setIsOpen] = useState(true);
  const [tasks, setTasks] = useState([]);
  const url = "https://63518403dfe45bbd55c252f3.mockapi.io/api/tasks";

  const getTask = async () => {
    const { data } = await axios(url);
    setTasks(data);
  };

  useEffect(() => {
    getTask();
  }, []);

  return (
    <div className="container">
      <Logo />
      <div className="task-container">
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />
        {isOpen && <AddTask url={url} getTask={getTask} />}
        <TaskList url={url} tasks={tasks} getTask={getTask} />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
