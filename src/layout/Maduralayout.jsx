import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar.jsx";


export default function Maduralayout({ children }) {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar/>
      <main className="flex-1 overflow-y-auto  ">
        <Navbar/>
        {children}
      </main>
    </div>
  );
}
