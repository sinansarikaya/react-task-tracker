import axios from "axios";
import { useState, useEffect } from "react";
import AddTaskStyle from "../../scss/addTask.module.scss";
import AlertStyle from "../../scss/alert.module.scss";

function AddTask({ url, getTask, setAlert }) {
  const [addNewTask, setAddNewTask] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { task: addNewTask, date };
    addTask(newTask);
    setAddNewTask("");
    setDate("");
  };

  const addTask = async (newTask) => {
    try {
      await axios.post(url, newTask);
    } catch (e) {}
    getTask();
    setAlert({ type: "success", title: "Successfull!", status: true });

    const interval = setInterval(() => {
      setAlert({ type: "", title: "", status: false });
    }, 3000);
    return () => clearInterval(interval);
  };
  console.log(AlertStyle.alert);
  return (
    <form className={AddTaskStyle.addTaskSection} onSubmit={handleSubmit}>
      <input
        type="text"
        className={AddTaskStyle.input}
        onChange={(e) => setAddNewTask(e.target.value)}
        placeholder="Task"
        value={addNewTask}
      />
      <input
        type="date"
        className={AddTaskStyle.input}
        onChange={(e) => setDate(e.target.value)}
        value={date}
      />
      <input type="submit" className={AddTaskStyle.btn} value="Save" />
    </form>
  );
}

export default AddTask;
