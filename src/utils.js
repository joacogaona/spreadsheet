function intToChar(int) {
  return String.fromCharCode(64 + int);
}

function normStringAndRefCells({ cellsData, content }) {
  try {
    const trimmedContent = content.replace(/\s+/g, "");
    const contentWithoutEqual = trimmedContent
      .substring(1, trimmedContent.length)
      .toUpperCase();

    let detectCellRef = [];
    let chain = "";
    for (let i = 0; i < contentWithoutEqual.length; i++) {
      if (contentWithoutEqual[i] === "+" || contentWithoutEqual[i] === "-") {
        detectCellRef.push(chain);
        detectCellRef.push(contentWithoutEqual[i]);
        chain = "";
      } else if (i === contentWithoutEqual.length - 1) {
        chain = `${chain}${contentWithoutEqual[i]}`;
        detectCellRef.push(chain);
      } else {
        chain = `${chain}${contentWithoutEqual[i]}`;
      }
    }
    let normalizedString = "";
    detectCellRef.forEach((item) => {
      let storedValue = cellsData[item];
      if (!isNaN(item) || item === "+" || item === "-") {
        normalizedString = `${normalizedString}${item}`;
      } else if (storedValue) {
        normalizedString = `${normalizedString}${storedValue}`;
      } else {
        normalizedString = `${normalizedString}${0}`;
      }
    });
    return normalizedString;
  } catch (error) {
    return error;
  }
}

export { intToChar, normStringAndRefCells };
