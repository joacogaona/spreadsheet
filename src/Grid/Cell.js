import { useState, useEffect } from "react";
function Cell() {
  const [content, setContent] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      {isEditing ? (
        <input
          className="box-border"
          type="text"
          name="cell"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      ) : (
        <p>{content}</p>
      )}
    </>
  );
}

export default Cell;
