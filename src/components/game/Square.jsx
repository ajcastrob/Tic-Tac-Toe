export const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = isSelected ? "is-selected" : "";

  const handleClick = () => {
    updateBoard(index);
  };

  return (
    <div onClick={handleClick} className={`square ${className}`}>
      {children}
    </div>
  );
};
