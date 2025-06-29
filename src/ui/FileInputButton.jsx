function FileInputButton({ className, lableText, register }) {
  return (
    <label
      className=" flex items-center justify-center  bg-white border shadow-sm
      border-slate-300 
      placeholder-slate-400
      focus:outline-none 
      focus:border-sky-500
      focus:ring-sky-500 
      w-full rounded-md 
      focus:ring-1  "
    >
      <span className="sr-only">{lableText}</span>
      <input
        type="file"
        {...register}
        className={`block ml-4   w-full rounded-md text-sm text-slate-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-violet-50 file:text-violet-700
                    hover:file:bg-violet-100 ${className}
    `}
      />
    </label>
  );
}

export default FileInputButton;
