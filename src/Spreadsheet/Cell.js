import { normStringAndRefCells } from "../utils";
import { evaluate } from "mathjs";
import { useCellsData } from "../context/CellsDataContext";
import { useStateWithMerge } from "../hooks/useStateWithMerge";
function initialState() {
  return {
    content: "",
    setIsSelected: false,
    hasError: false,
  };
}

function Cell({ cellId }) {
  const [cellsData, setCellsData] = useCellsData();
  const [state, setState] = useStateWithMerge(initialState);
  const { content, isSelected, hasError } = state;

  function handleChange(e) {
    setState({ content: e.target.value });
  }
  function handleSelect(e) {
    setState({ isSelected: true });
  }
  function handleEnter(e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      e.target.blur();
    }
    setState({ isSelected: false });
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
        setState({ content: result });
      } else {
        setCellsData((prevState) => {
          const newState = { ...prevState };
          newState[cellId] = content;
          return newState;
        });
      }
      setState({ hasError: false, isSelected: false });
    } catch (error) {
      console.log({ error });
      setState({ hasError: true });
    }
  }
  function getClassName({ isSelected, hasError }) {
    let className = "h-full";
    if (isSelected) {
      className = `${className} bg-sky-100`;
    } else if (hasError) {
      className = `${className} bg-red-200`;
    }
    return className;
  }

  return (
    <td className={`border-2  h-10 m-0 p-0 min-w-28 `}>
      <input
        className={getClassName({ isSelected, hasError })}
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
