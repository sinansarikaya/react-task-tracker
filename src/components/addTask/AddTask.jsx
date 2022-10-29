import axios from "axios";
import { useState } from "react";
import AddTaskStyle from "../../scss/addTask.module.scss";

function AddTask({ url, getTask }) {
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
  };

  return (
    <form className={AddTaskStyle.addTaskSection} onSubmit={handleSubmit}>
      <input
        type="text"
        className={AddTaskStyle.input}
        onChange={(e) => setAddNewTask(e.target.value)}
        placeholder="Task"
      />
      <input
        type="date"
        className={AddTaskStyle.input}
        onChange={(e) => setDate(e.target.value)}
      />
      <input type="submit" className={AddTaskStyle.btn} value="Save" />
    </form>
  );
}

export default AddTask;
