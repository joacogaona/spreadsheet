import { normStringAndRefCells } from "../utils";

function Cell({
  handleSelect,
  cellId,
  cellSelected,
  setCellsContent,
  cellsContent,
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
    if (cellsContent[cellId]?.[0] === "=") {
      console.log(normStringAndRefCells({ cellsContent, cellId }), "AKAAAA");
      setCellsContent((prevState) => {
        const newState = { ...prevState };
        newState[cellId] = eval(
          normStringAndRefCells({ cellsContent, cellId })
        );
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
        className={`h-full  ${isSelected ? "bg-orange-100" : ""}  `}
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
