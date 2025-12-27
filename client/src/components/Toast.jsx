import { useEffect, useState } from "react";
export default function Toast({ message, show, onClose }){
  const [visible, setVisible] = useState(show);
  useEffect(()=>{ setVisible(show); if(show){ const t=setTimeout(()=>{setVisible(false); onClose?.();}, 2000); return ()=>clearTimeout(t);} },[show]);
  if(!visible) return null;
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2">
      <div className="bg-ink text-white px-4 py-2 rounded-xl shadow-soft animate-pop">{message}</div>
    </div>
  );
}
