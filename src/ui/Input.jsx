import ErrorMessage from './ErrorMessage';

function Input({
  type,
  name,
  placeholder = '',
  register,
  defaultValue = '',
  error,
  label,
  className,
  disabled = false,
}) {
  const classNameInput = `text-[1.4rem]
      font-fredoka text-inherit
      pl-4
      h-16
      block
      bg-white border shadow-sm
      border-slate-300 
      placeholder-slate-400
      placeholder:text-[1.4rem]
      focus:outline-none 
      focus:border-sky-500
      focus:ring-sky-500 
      w-full rounded-md 
      focus:ring-1  ${className} ${disabled && 'text-slate-400'}`;

  return (
    <span className="w-full">
      <label htmlFor={name} className="text-left block mb-2">
        {label}
      </label>
      <input
        disabled={disabled}
        id={name}
        type={type}
        name={name}
        defaultValue={defaultValue}
        className={classNameInput}
        placeholder={placeholder}
        {...register}
      />

      {error && <ErrorMessage error={error} />}
    </span>
  );
}

export default Input;

// function Input({
//   type,
//   name,
//   placeholder = '',
//   register = () => {},
//   defaultValue = '',
// }) {
//   const className = `text-lg
//       font-fredoka text-inherit
//       pl-4
//       h-14
//       bg-white border shadow-sm
//       border-slate-300
//       placeholder-slate-400
//       focus:outline-none
//       focus:border-sky-500
//       focus:ring-sky-500
//       w-full rounded-md
//       focus:ring-1`;

//   return (
//     <input
//       id={name}
//       type={type}
//       name={name}
//       defaultValue={defaultValue}
//       className={className}
//       placeholder={placeholder}
//       {...register(name, {
//         required: 'This field is required.',
//         minLength: {
//           value: 5,
//           message: 'Minimum 5 characters :(',
//         },
//       })}
//     />
//   );
// }

// export default Input;
