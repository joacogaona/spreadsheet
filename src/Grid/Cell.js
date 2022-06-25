import { useState } from "react";

function Cell({ onSelect, cellId, isSelected }) {
  const [content, setContent] = useState("");
  function handleContent(e) {
    setContent(e.target.value);
  }

  function handleBlur() {
    if (content[0] == "=") {
      const trimmedContent = content.replace(/\s+/g, "");
      const contentWithoutEqual = trimmedContent.substring(
        1,
        trimmedContent.length
      );

      setContent(eval(contentWithoutEqual));
    }
  }

  return (
    <td
      className={`border-2  h-10 m-0 p-0 min-w-28${
        isSelected ? "border-teal-500" : ""
      }  `}
      onClick={onSelect}
    >
      <input
        className="h-full"
        type="text"
        name={cellId}
        value={content}
        onChange={(e) => handleContent(e)}
        onBlur={handleBlur}
      />
    </td>
  );
}
export default Cell;
