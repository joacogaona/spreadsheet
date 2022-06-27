import Row from "./Row";
import Cell from "./Cell";
import { NUMBER_OF_COLUMNS, NUMBER_OF_ROWS } from "../constants";
import { intToChar } from "../utils";

function RowIndexCell({ rowIndex }) {
  return (
    <td className="bg-stone-200 border-gray-300 border-2 text-center min-w-20 font-extralight text-sm ">
      {rowIndex}
    </td>
  );
}

function GridBody() {
  return (
    <tbody>
      {Array.from({ length: NUMBER_OF_ROWS }, (_, xIndex) => {
        const rowIndex = xIndex + 1;
        return (
          <Row key={rowIndex} className="flex">
            <RowIndexCell rowIndex={rowIndex} />
            {Array.from({ length: NUMBER_OF_COLUMNS }, (_, yIndex) => {
              const columnIndex = yIndex + 1;
              return (
                <Cell
                  key={`${intToChar(columnIndex)}${rowIndex}`}
                  cellId={`${intToChar(columnIndex)}${rowIndex}`}
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
