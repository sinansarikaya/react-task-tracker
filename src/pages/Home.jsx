import { useEffect, useState } from "react";
import axios from "axios";
import AddTask from "../components/addTask/AddTask";
import Header from "../components/header/Header";
import TaskList from "../components/taskList/TaskList";
import Footer from "../components/footer/Footer";
import Logo from "../components/logo/Logo";
import Alert from "../components/alert/Alert";
import Social from "../components/social/Social";

function Home() {
  const [isOpen, setIsOpen] = useState(true);
  const [tasks, setTasks] = useState([]);
  const [alert, setAlert] = useState({
    type: "",
    title: "",
    status: false,
  });
  const url = "https://63518403dfe45bbd55c252f3.mockapi.io/api/tasks";

  const getTask = async () => {
    const { data } = await axios(url);
    setTasks(data);
  };

  useEffect(() => {
    getTask();
  }, []);

  const showAlert = (alertType, message) => {
    console.log(alertType, message);
    setAlert({
      type: alertType,
      title: message,
      status: true,
    });
    const interval = setInterval(() => {
      setAlert({ type: "", title: "", status: false });
    }, 3000);
    return () => clearInterval(interval);
  };

  return (
    <div className="container">
      <Social />
      <Logo />
      <Alert alert={alert} />
      <div className="task-container">
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />
        {isOpen && (
          <AddTask url={url} getTask={getTask} showAlert={showAlert} />
        )}
        <TaskList
          url={url}
          tasks={tasks}
          getTask={getTask}
          showAlert={showAlert}
        />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
