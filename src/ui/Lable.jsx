function Lable({ htmlFor, labelText }) {
  return (
    <label
      htmlFor={htmlFor}
      className="after:content-['*'] after:ml-0.5 after:text-red-500  text-lg "
    >
      {labelText}
    </label>
  );
}

export default Lable;
