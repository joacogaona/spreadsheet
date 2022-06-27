import Row from "./Row";
import Cell from "./Cell";
import { NUMBER_OF_COLUMNS, NUMBER_OF_ROWS } from "../constants";
import { intToChar } from "../utils";

function GridBody() {
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
