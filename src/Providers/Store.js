import React, { useState } from "react";


export const AppStateContext = React.createContext();

export default function Store({ children }) {
  const [appState, setAppState] = useState("on");

  return (
    <AppStateContext.Provider value={[appState, setAppState]}>
      { children }
    </AppStateContext.Provider>
  );
}
