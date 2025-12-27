import { useState } from "react";

export default function Todo() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const add = () => {
    if (!input.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: input }]);
    setInput("");
  };

  return (
    <section className="space-y-4 animate-fadeIn theme-todo page-wrap">
      <h2 className="text-2xl font-semibold accent-todo">Todo</h2>

      <div className="card-todo space-y-3">
        <div className="flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter task..."
            className="flex-1 border rounded px-2 py-1"
          />
          <button className="btn-todo" onClick={add}>
            Add
          </button>
        </div>

        <ul className="space-y-1">
          {tasks.map((t, i) => (
            <li key={t.id} className="flex justify-between">
              <span>{t.text}</span>
              <span className="text-gray-400 text-sm">#{i + 1}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
