import { useState } from "react";

export default function Notes() {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);

  const add = () => {
    if (!input.trim()) return;
    setNotes([...notes, { id: Date.now(), text: input }]);
    setInput("");
    setOpen(false);
  };

  return (
    <section className="space-y-4 animate-fadeIn theme-notes page-wrap">
      <h2 className="text-2xl font-semibold accent-notes">Notes</h2>

      <button className="btn-notes" onClick={() => setOpen(true)}>
        New Note
      </button>

      {open && (
        <div className="card-notes space-y-2">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Write note..."
            className="w-full border rounded p-2"
          />
          <button className="btn-notes" onClick={add}>
            Save
          </button>
        </div>
      )}

      <div className="grid gap-2">
        {notes.map((n) => (
          <article
            key={n.id}
            className="card-notes hover:shadow-lg transition"
          >
            {n.text}
          </article>
        ))}
      </div>
    </section>
  );
}
