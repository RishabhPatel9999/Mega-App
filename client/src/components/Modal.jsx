export default function Modal({ open, title, children, onClose }){
    if(!open) return null;
    return (
      <div className="fixed inset-0 z-50 grid place-items-center bg-black/30">
        <div className="card w-[min(95vw,520px)] animate-fadeIn">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">{title}</h3>
            <button className="btn-ghost" onClick={onClose}>Close</button>
          </div>
          <div className="mt-4">{children}</div>
        </div>
      </div>
    );
  }
  