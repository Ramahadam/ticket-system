function Button({ children, onClick = () => {}, isDisabled, className }) {
  const handleClick = (e) => {
    e.preventDefault();
    console.log('clicked');
    onClick();
  };

  const disabledClasses = isDisabled ? 'cursor-not-allowed' : '';

  return (
    <button
      className={`flex items-center gap-1 font-medium   rounded-lg p-4 cursor-pointer ${disabledClasses} ${className}`}
      onClick={handleClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
}

export default Button;
