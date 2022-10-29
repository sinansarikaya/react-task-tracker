import { MdDelete } from "react-icons/md";
import axios from "axios";
import TaskListStyle from "../../scss/taskList.module.scss";

export default function TaskList({ tasks, url, getTask }) {
  return (
    <div className={TaskListStyle.taskList}>
      {tasks.map((item) => {
        const { id, task, date, completed } = item;

        const deleteTask = async (id) => {
          try {
            await axios.post(`${url}/${id}`);
          } catch (e) {
            console.log(e);
          }
          getTask();
        };

        const changeStatus = async (id) => {
          console.log(`${url}/${id}`);
          try {
            await axios.put(`${url}/${id}`, { completed: !completed });
          } catch (e) {}
          getTask();
        };

        return (
          <div key={id}>
            <h3 onClick={() => changeStatus(id)}>
              {task} {completed ? "Completed" : "Prgressing"}
            </h3>
            <p>{date}</p>
            <MdDelete onClick={() => deleteTask(id)} />
            <hr />
          </div>
        );
      })}
    </div>
  );
}
