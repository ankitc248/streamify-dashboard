import SideBar from "./mycomponents/SideBar";
import Dashboard from "./mycomponents/Dashboard/Dashboard";
import { ThemeProvider } from "./mycomponents/ThemeProvider";
import Navbar from "./mycomponents/Navbar";
import { useState } from "react";

function App() {
  const [currentlyInView, setCurrentlyInView] = useState<string>("");
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="App min-h-dvh w-full bg-white flex flex-col dark:bg-neutral-950 lg:border-r dark:border-neutral-700/70 items-center">
        <Navbar />
        <div className="w-full h-full flex flex-col flex-1 lg:flex-row max-w-screen-2xl">
          <SideBar
            currentlyInView={currentlyInView}
          />
          <Dashboard
            setCurrentlyInView={setCurrentlyInView}
          />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
