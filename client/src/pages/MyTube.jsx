import { useState } from "react";

export default function MyTube() {
  const [videos] = useState([
    { id: 1, title: "Learn React", views: "1M" },
    { id: 2, title: "Tailwind Tips", views: "500k" },
  ]);

  return (
    <section className="space-y-4 animate-fadeIn theme-mytube page-wrap">
      <h2 className="text-2xl font-semibold accent-mytube">MyTube</h2>

      <div className="grid md:grid-cols-2 gap-4">
        {videos.map((v) => (
          <article
            key={v.id}
            className="card-mytube hover:translate-y-[-2px] hover:shadow-lg transition"
          >
            <h3 className="font-medium">{v.title}</h3>
            <p className="text-sm text-gray-500">{v.views} views</p>
          </article>
        ))}
      </div>
    </section>
  );
}
