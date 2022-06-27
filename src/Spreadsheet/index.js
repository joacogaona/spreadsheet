import GridHeader from "./GridHeader";
import GridBody from "./GridBody";
import { CellsDataProvider } from "../CellsDataContext";

function Grid() {
  return (
    <table>
      <GridHeader />
      <CellsDataProvider>
        <GridBody />
      </CellsDataProvider>
    </table>
  );
}

export default Grid;
