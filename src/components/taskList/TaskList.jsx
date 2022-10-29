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
            await axios.delete(`${url}/${id}`);
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
          <div className={TaskListStyle.task} key={id}>
            <div>
              <h3
                onClick={() => changeStatus(id)}
                className={completed && TaskListStyle.completed}
              >
                {task}
              </h3>
              <p className={completed && TaskListStyle.completed}>{date}</p>
            </div>
            <MdDelete
              className={TaskListStyle.delete}
              onClick={() => deleteTask(id)}
            />
          </div>
        );
      })}
    </div>
  );
}
