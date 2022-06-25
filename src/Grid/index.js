import Cell from "./Cell";
import Row from "./Row";
import Column from "./Column";
import { NUMBER_OF_COLUMNS, NUMBER_OF_ROWS } from "../constants";
import { intToChar } from "../utils";

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
                <Column key={`${rowIndex}-${columnIndex}`}>
                  <Cell key={`${rowIndex}-${columnIndex}`} />
                </Column>
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
      <thead className="">
        <GridHeaderRow />
      </thead>
      <GridBody />
    </table>
  );
}

export default Grid;
