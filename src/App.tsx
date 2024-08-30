import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import SideBar from "./mycomponents/SideBar/SideBar";
import Dashboard from "./mycomponents/Dashboard/Dashboard";
function App() {
  return (
    <div className="App h-dvh w-full bg-white flex flex-col">
      <nav className="navbar w-full h-12 border-b flex items-center justify-between px-4">
        <div className="uppercase font-bold text-accent tracking-wide text-lg">
          Streamify
        </div>
        <Avatar className="w-8 h-8">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </nav>
      <div className="w-full flex flex-1">
        <SideBar />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
