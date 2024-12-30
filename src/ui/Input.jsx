function Input({ type, name, placeholder, register }) {
  const className =
    type === 'text' &&
    `text-lg
      font-fredoka text-inherit
      pl-4
      h-14
      bg-white border shadow-sm
      border-slate-300 
      placeholder-slate-400
      focus:outline-none 
      focus:border-sky-500
      focus:ring-sky-500 
      w-full rounded-md 
      focus:ring-1`;

  return (
    <input
      type={type}
      name={name}
      className={className}
      placeholder={placeholder}
      {...register(name, {
        required: 'This field is required.',
        minLength: {
          value: 5,
          message: 'Minimum 5 characters :(',
        },
      })}
    />
  );
}

export default Input;
