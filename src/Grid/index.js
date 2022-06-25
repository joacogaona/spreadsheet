import Row from "./Row";
import Cell from "./Cell";
import { NUMBER_OF_COLUMNS, NUMBER_OF_ROWS } from "../constants";
import { intToChar } from "../utils";
import { useState, useEffect } from "react";

const cellsContentLocal = JSON.parse(localStorage.getItem("cellsContent"));
const cellsErrorsLocal = JSON.parse(localStorage.getItem("cellsErrors"));

function GridHeaderRow() {
  return (
    <tr>
      <th />
      {Array.from({ length: NUMBER_OF_COLUMNS }, (_, index) => {
        return (
          <th key={index + 1}>{index + 1 > 0 ? intToChar(index + 1) : ""}</th>
        );
      })}
    </tr>
  );
}
function GridBody() {
  const [cellSelected, setCellSelected] = useState([]);
  const [cellsContent, setCellsContent] = useState(cellsContentLocal);
  const [cellsErrors, setCellsErrors] = useState(cellsErrorsLocal);

  function handleSelect(e) {
    setCellSelected(e.target.name);
  }
  useEffect(() => {
    localStorage.setItem("cellsContent", JSON.stringify(cellsContent));
    localStorage.setItem("cellsErrors", JSON.stringify(cellsErrors));
  }, [cellsContent, cellsErrors]);

  return (
    <tbody>
      {Array.from({ length: NUMBER_OF_ROWS }, (_, index) => {
        const rowIndex = index + 1;
        return (
          <Row key={rowIndex}>
            <td>{rowIndex}</td>
            {Array.from({ length: NUMBER_OF_COLUMNS }, (_, index) => {
              const columnIndex = index + 1;

              return (
                <Cell
                  key={`${intToChar(columnIndex)}${rowIndex}`}
                  cellId={`${intToChar(columnIndex)}${rowIndex}`}
                  handleSelect={handleSelect}
                  cellSelected={cellSelected}
                  cellsContent={cellsContent}
                  setCellsContent={setCellsContent}
                  setCellsErrors={setCellsErrors}
                  cellsErrors={cellsErrors}
                />
              );
            })}
          </Row>
        );
      })}
    </tbody>
  );
}

function Grid() {
  return (
    <table>
      <thead>
        <GridHeaderRow />
      </thead>
      <GridBody />
    </table>
  );
}

export default Grid;
