import ErrorMessage from './ErrorMessage';

function Select({
  name = '',
  options = {},
  register,
  defaultValue = '',
  className,
  classNameLable,
  error,
}) {
  return (
    <label className={`block w-full ${className} relative`}>
      <span
        className={`after:absolute after:content-['*'] after:ml-0.5 after:text-red-500 text-lg block ${classNameLable}`}
      >
        {/* {name?.charAt(0)?.toUpperCase() + name?.slice(1)} */}
        {name}
      </span>
      <select
        defaultValue={defaultValue}
        {...register}
        className="
            text-lg
            font-fredoka
            text-inherit
            pl-4
            h-14
            bg-white
            border
            shadow-sm
            border-slate-300
            placeholder-slate-400
            focus:outline-none
            focus:border-sky-500
            focus:ring-sky-500
            w-full
            rounded-md
            focus:ring-1
          "
      >
        <option value="" disabled>
          Select {name}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <ErrorMessage error={error} />
    </label>
  );
}

export default Select;

// function Select({
//   name = '',
//   options = {},
//   register = () => {},
//   isRequired = false,
//   defaultValue = '',
//   errors,
//   className,
// }) {
//   return (
//     <label className={`block ${className}`}>
//       <span className="after:content-['*'] after:ml-0.5 after:text-red-500 text-lg block">
//         {/* {name?.charAt(0)?.toUpperCase() + name?.slice(1)} */}
//         {name}
//       </span>
//       <select
//         defaultValue={defaultValue}
//         {...register(name, {
//           required: isRequired ? 'This field is required.' : false,
//         })}
//         className="
//             text-lg
//             font-fredoka
//             text-inherit
//             pl-4
//             h-14
//             bg-white
//             border
//             shadow-sm
//             border-slate-300
//             placeholder-slate-400
//             focus:outline-none
//             focus:border-sky-500
//             focus:ring-sky-500
//             w-full
//             rounded-md
//             focus:ring-1
//           "
//       >
//         <option value="" disabled>
//           Select an {name}
//         </option>
//         {options.map((option) => (
//           <option key={option.value} value={option.value}>
//             {option.label}
//           </option>
//         ))}
//       </select>
//       <span className="text-red-500">
//         {/* {errors[name]?.message && errors[name]?.message} */}
//       </span>
//     </label>
//   );
// }

// export default Select;
