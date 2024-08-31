import SideBar from "./mycomponents/SideBar/SideBar";
import Dashboard from "./mycomponents/Dashboard/Dashboard";
import { ThemeProvider } from "./mycomponents/ThemeProvider";
import Navbar from "./mycomponents/Navbar";
function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="App min-h-dvh w-full bg-white flex flex-col dark:bg-neutral-950 md:border-r dark:border-neutral-700/70">
        <Navbar />
        <div className="w-full h-full flex flex-col flex-1 md:flex-row">
          <SideBar />
          <Dashboard />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
