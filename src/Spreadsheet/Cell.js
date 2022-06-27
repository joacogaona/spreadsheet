import { normStringAndRefCells } from "../utils";
import { evaluate } from "mathjs";
import { useCellsData } from "../CellsDataContext";
import { useState } from "react";

function Cell({ cellId }) {
  const [
    cellsData,
    setCellsData,
    cellSelected,
    setCellSelected,
    cellsErrors,
    setCellsErrors,
  ] = useCellsData();
  const [content, setContent] = useState("");

  function handleChange(e) {
    setContent(e.target.value);
  }
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
  function handleBlur() {
    try {
      if (content[0] === "=") {
        const stringToEval = normStringAndRefCells({ cellsData, content });
        const result = evaluate(stringToEval);
        setCellsData((prevState) => {
          const newState = { ...prevState };
          newState[cellId] = result;
          return newState;
        });
        setContent(result);
      } else {
        setCellsData((prevState) => {
          const newState = { ...prevState };
          newState[cellId] = content;
          return newState;
        });
      }

      setCellsErrors((prevState) => {
        const newState = { ...prevState };
        newState[cellId] = false;
        return newState;
      });
    } catch (error) {
      console.log({ error });
      setCellsErrors((prevState) => {
        const newState = { ...prevState };
        newState[cellId] = true;
        return newState;
      });
    }
  }

  return (
    <td className={`border-2  h-10 m-0 p-0 min-w-28 `}>
      <input
        className={`h-full  ${
          cellSelected === cellId
            ? "bg-sky-100"
            : cellsErrors[cellId]
            ? "bg-red-200"
            : ""
        }  `}
        type="text"
        name={cellId}
        value={content}
        onChange={handleChange}
        onBlur={handleBlur}
        onKeyDown={handleEnter}
        onClick={handleSelect}
      />
    </td>
  );
}
export default Cell;
