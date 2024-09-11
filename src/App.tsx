import SideBar from "./mycomponents/SideBar";
import Dashboard from "./mycomponents/Dashboard/Dashboard";
import { ThemeProvider } from "./mycomponents/ThemeProvider";
import Navbar from "./mycomponents/Navbar";
import { useState } from "react";
import SearchPopup from "./mycomponents/SearchPopup";
import { CurrencyProvider } from "./mycomponents/CurrencyProvider";

function App() {
  const [currentlyInView, setCurrentlyInView] = useState<string>("");
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <SearchPopup />
      <CurrencyProvider>
        <div className="App min-h-dvh w-full bg-white flex flex-col dark:bg-neutral-950 lg:border-r dark:border-neutral-700/70 items-center">
          <Navbar />
          <div className="w-full h-full flex flex-col flex-1 lg:flex-row">
            <SideBar currentlyInView={currentlyInView} />
            <Dashboard setCurrentlyInView={setCurrentlyInView} />
          </div>
        </div>
      </CurrencyProvider>
    </ThemeProvider>
  );
}

export default App;
