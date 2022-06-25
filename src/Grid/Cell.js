import { normStringAndRefCells } from "../utils";

function Cell({
  handleSelect,
  cellId,
  cellSelected,
  setCellsContent,
  cellsContent,
  setCellsErrors,
  cellsErrors,
}) {
  const isSelected = cellSelected === cellId;

  function handleContent(e) {
    setCellsContent((prevState) => {
      const newState = { ...prevState };
      newState[cellId] = e.target.value;
      return newState;
    });
  }

  function handleBlur() {
    try {
      if (cellsContent[cellId]?.[0] === "=") {
        const stringToEval = normStringAndRefCells({ cellsContent, cellId });
        const result = eval(stringToEval);
        setCellsContent((prevState) => {
          const newState = { ...prevState };
          newState[cellId] = result;
          return newState;
        });
      }
      setCellsErrors((prevState) => {
        const newState = { ...prevState };
        newState[cellId] = false;
        return newState;
      });
    } catch (error) {
      setCellsErrors((prevState) => {
        const newState = { ...prevState };
        newState[cellId] = true;
        return newState;
      });
    }
  }

  return (
    <td
      className={`border-2  h-10 m-0 p-0 min-w-28 `}
      onClick={(e) => handleSelect(e)}
    >
      <input
        className={`h-full  ${
          isSelected ? "bg-sky-100" : cellsErrors[cellId] ? "bg-red-200" : ""
        }  `}
        required
        type="text"
        name={cellId}
        value={cellsContent[cellId] ?? ""}
        onChange={(e) => handleContent(e)}
        onBlur={(e) => handleBlur(e)}
      />
    </td>
  );
}
export default Cell;
