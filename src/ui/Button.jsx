function Button({ children, type = '', onClick = () => '', isDisabled }) {
  const handleClick = (e) => {
    e.preventDefault();
    onClick();
  };

  const baseClasses =
    'flex items-center gap-1 font-medium text-sm bg-transparent outline-none border-none rounded-lg p-4 cursor-pointer';
  const disabledClasses = isDisabled ? 'cursor-not-allowed' : '';
  const typeClasses = {
    btnPrimary: 'bg-[#8664fc]',
    btnAccent: 'bg-[#dff0ff]',
    btnOutline: 'border border-bg-gray',
  };

  return (
    <button
      className={`${baseClasses} ${typeClasses[type]} ${disabledClasses}`}
      onClick={handleClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
}

export default Button;
