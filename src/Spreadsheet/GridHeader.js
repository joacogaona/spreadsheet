import { NUMBER_OF_COLUMNS } from "../constants";
import { intToChar } from "../utils";

const listHeaderCells = Array.from(
  { length: NUMBER_OF_COLUMNS },
  (_, index) => {
    return (
      <th
        className="bg-stone-200 border-gray-300 border-2 font-light text-sm"
        key={index + 1}
      >
        {index + 1 > 0 ? intToChar(index + 1) : ""}
      </th>
    );
  }
);

function GridHeader() {
  return (
    <thead>
      <tr>
        <th />
        {listHeaderCells}
      </tr>
    </thead>
  );
}

export default GridHeader;
