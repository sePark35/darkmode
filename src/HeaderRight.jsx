const HeaderRight = ({ text, checked, onClick }) => {
  return (
    <span
      style={checked === text ? { borderBottom: "1px solid white" } : {}}
      onClick={() => onClick(text)}
    >
      {text}
    </span>
  );
};

export default HeaderRight;
