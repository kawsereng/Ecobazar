import { useRef, useState } from "react";
import { useOutside } from "../Hooks/Outside";
import { Container } from "./Container";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const sidebarRef = useRef(null);

  useOutside(sidebarRef, setOpen, open);

  return (
    <>
        <Container>
            <div className="relative">
      
      <button
        onClick={() => setOpen(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Open Sidebar
      </button>

      
      <div
        className={`transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

     
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white p-5 transform transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <h2 className="text-xl font-bold mb-4">Sidebar</h2>

        <ul className="">
          <li className="hover:text-blue-400 cursor-pointer">Home</li>
          <li className="hover:text-blue-400 cursor-pointer">About</li>
          <li className="hover:text-blue-400 cursor-pointer">Contact</li>
        </ul>

        <button
          onClick={() => setOpen(false)}
          className="mt-6 bg-red-500 px-3 py-1 rounded"
        >
          Close
        </button>
      </div>
    </div>
    </Container>
    </>


  );
}