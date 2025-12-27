import React from "react";

export default function About(){
  return (
    <section className="space-y-4 animate-fadeIn page-wrap">
      <h2 className="text-2xl font-semibold">About</h2>

      <div className="card">
        <h3 className="font-semibold">Developer</h3>
        <p className="mt-2"><strong>Name:</strong> Rishabh Patel</p>
        <p><strong>Mobile:</strong> 9026818592</p>
        <p className="text-sm text-slate-500 mt-2">This demo Mega App contains a Todo, Notes, MyTube, and E-Commerce module.</p>
      </div>

      <div className="text-sm text-slate-600">
        <p>Need enhancements? I can add authentication, database persistence, file uploads, or payment demo flows.</p>
      </div>
    </section>
  );
}
