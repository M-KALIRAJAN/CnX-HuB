import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar.jsx";


export default function Maduralayout({ children }) {
  return (
    <div className="flex h-screen  ">
      <Sidebar/>
      <main className="flex-1 overflow-y-auto no-scrollbar ">
        <Navbar/>
        {children}
      </main>
    </div>
  );
}
