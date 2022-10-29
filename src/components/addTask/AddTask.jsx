import axios from "axios";
import { useState } from "react";

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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setAddNewTask(e.target.value)}
          placeholder="Task"
        />
        <input type="date" onChange={(e) => setDate(e.target.value)} />
        <input type="submit" value="Save" />
      </form>
    </div>
  );
}

export default AddTask;
