import Row from "./Row";
import Cell from "./Cell";
import { NUMBER_OF_COLUMNS, NUMBER_OF_ROWS } from "../constants";
import { intToChar } from "../utils";
import { useState } from "react";

function GridBody() {
  const [cellSelected, setCellSelected] = useState("");
  const [cellsContent, setCellsContent] = useState({});
  const [cellsErrors, setCellsErrors] = useState({});

  function handleSelect(e) {
    setCellSelected(e.target.name);
  }
  function handleEnter(e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      e.target.blur();
    }
    setCellSelected("");
  }
  console.count("body");
  return (
    <tbody>
      {Array.from({ length: NUMBER_OF_ROWS }, (_, index) => {
        const rowIndex = index + 1;
        return (
          <Row key={rowIndex} className="flex">
            <td className="bg-stone-200 border-gray-300 border-2 text-center min-w-20 font-extralight text-sm ">
              {rowIndex}
            </td>
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
                  handleEnter={handleEnter}
                />
              );
            })}
          </Row>
        );
      })}
    </tbody>
  );
}

export default GridBody;
