import { createContext, useContext, useState } from "react";

const CellsData = createContext();

export function useCellsData() {
  return useContext(CellsData);
}

export function CellsDataProvider({ children }) {
  const [cellsData, setCellsData] = useState([]);
  const [cellSelected, setCellSelected] = useState("");
  const [cellsErrors, setCellsErrors] = useState([]);

  return (
    <CellsData.Provider
      value={[
        cellsData,
        setCellsData,
        cellSelected,
        setCellSelected,
        cellsErrors,
        setCellsErrors,
      ]}
    >
      {children}
    </CellsData.Provider>
  );
}
