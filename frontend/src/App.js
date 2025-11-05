import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    axios.get("https://to-do-app-jccq.vercel.app/api/tasks").then((res) => setTasks(res.data));
  }, []);

  const addTask = async () => {
    if (!text.trim()) return;
    const res = await axios.post("https://to-do-app-jccq.vercel.app/api/tasks", { text });
    setTasks([...tasks, res.data]);
    setText("");
  };

  const deleteTask = async (id) => {
    await axios.delete(`https://to-do-app-jccq.vercel.app/api/tasks/${id}`);
    setTasks(tasks.filter((t) => t._id !== id));
  };

  const toggleTask = async (id) => {
    const res = await axios.put(`https://to-do-app-jccq.vercel.app/api/tasks/${id}`);
    setTasks(tasks.map((t) => (t._id === id ? res.data : t)));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>📝 To-Do List</h1>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter task..."
      />
      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map((t) => (
          <li key={t._id}>
            <span
              onClick={() => toggleTask(t._id)}
              style={{
                textDecoration: t.completed ? "line-through" : "none",
                cursor: "pointer",
              }}
            >
              {t.text}
            </span>
            <button onClick={() => deleteTask(t._id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
