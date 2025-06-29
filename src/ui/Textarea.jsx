import ErrorMessage from './ErrorMessage';

function Textarea({ name, cols, rows, placeholder, register, error = '' }) {
  return (
    <>
      <textarea
        {...register}
        id={name}
        cols={cols}
        rows={rows}
        placeholder={placeholder}
        className="
      w-full
          text-lg
          font-fredoka
          text-inherit
          h-[18rem]
          outline-none
          p-6
          border
          border-bg-gray
          rounded-md
          "
      ></textarea>
      <ErrorMessage error={error} />
    </>
  );
}

export default Textarea;
