import { createContext, useContext, useState } from "react";

const CellsData = createContext();

export function useCellsData() {
  return useContext(CellsData);
}

export function CellsDataProvider({ children }) {
  const [cellsData, setCellsData] = useState([]);

  return (
    <CellsData.Provider value={[cellsData, setCellsData]}>
      {children}
    </CellsData.Provider>
  );
}
