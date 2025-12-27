import React, { useState } from "react";
import Slider from "../components/Slider";
import { Link, useNavigate } from "react-router-dom";
import Toast from "../components/Toast";

export default function Home() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const apps = [
    { title: "Todo", desc: "Keep your tasks in check", to: "/todo", btn: "btn-todo" },
    { title: "Notes", desc: "Capture ideas quickly", to: "/notes", btn: "btn-notes" },
    { title: "MyTube", desc: "Video demo & playback", to: "/mytube", btn: "btn-mytube" },
    { title: "Store", desc: "Demo shop & cart", to: "/store", btn: "btn-store" },
  ];

  async function populateDemoData() {
    setLoading(true);
    setMsg("Populating demo data...");
    try {
      const sampleTodos = [
        { text: "Buy groceries" },
        { text: "Finish project plan" },
        { text: "Call Rishabh" }
      ];
      const sampleNotes = [
        { title: "Welcome", content: "This is your demo note." },
        { title: "Ideas", content: "Add features, auth, DB." }
      ];

      // create todos
      for (const t of sampleTodos) {
        await fetch("http://localhost:3000/api/todos", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(t),
        });
      }
      // create notes
      for (const n of sampleNotes) {
        await fetch("http://localhost:3000/api/notes", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(n),
        });
      }

      setMsg("Demo data added. Opening Todo page...");
      setTimeout(() => {
        setLoading(false);
        setMsg("");
        navigate("/todo");
      }, 900);
    } catch (err) {
      console.error(err);
      setLoading(false);
      setMsg("Failed to populate demo data.");
      setTimeout(() => setMsg(""), 2000);
    }
  }

  return (
    <main className="space-y-6 animate-fadeIn">
      <Slider />

      <section>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-2xl font-semibold">Open an app</h2>
          <div className="flex items-center gap-3">
            <button className="btn btn-ghost" onClick={() => navigate("/about")}>About</button>
            <button className="btn btn-ghost" onClick={() => { navigator.clipboard?.writeText(location.href); }}>
              Share
            </button>
            <button
              className="btn btn-primary"
              onClick={populateDemoData}
              disabled={loading}
            >
              {loading ? "Populating..." : "Populate Demo Data"}
            </button>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {apps.map((a) => (
            <article key={a.to} className="card hover:shadow-lg transition">
              <h3 className="font-semibold">{a.title}</h3>
              <p className="text-sm text-slate-500 mt-1">{a.desc}</p>
              <div className="mt-4 flex gap-2">
                <Link to={a.to} className={`${a.btn} px-3 py-1`}>
                  Open
                </Link>
                <button className="btn btn-ghost ml-auto">Details</button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="text-sm text-slate-600">
        <p>Tip: click “Populate Demo Data” to create sample todos & notes automatically.</p>
      </section>

      <Toast message={msg} show={!!msg} onClose={() => setMsg("")} />
    </main>
  );
}
