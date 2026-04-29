import { useEffect } from "react";

export function useOutsude (ref, callback, enabled = true){
useEffect(()=>{
   if (!enabled) return;

  function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClick);

  return () => document.removeEventListener("mousedown", handleClick);

},[ref, callback, enabled])
}