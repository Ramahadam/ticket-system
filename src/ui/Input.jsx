import ErrorMessage from './ErrorMessage';

function Input({
  type,
  name,
  placeholder = '',
  register,
  defaultValue = '',
  error,
  className,
}) {
  const classNameInput = `text-lg
      font-fredoka text-inherit
      pl-4
      h-14
      block
      bg-white border shadow-sm
      border-slate-300 
      placeholder-slate-400
      focus:outline-none 
      focus:border-sky-500
      focus:ring-sky-500 
      w-full rounded-md 
      focus:ring-1  ${className}`;

  return (
    <div className="w-full">
      <input
        id={name}
        type={type}
        name={name}
        defaultValue={defaultValue}
        className={classNameInput}
        placeholder={placeholder}
        {...register}
      />

      {error && <ErrorMessage error={error} />}
    </div>
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
