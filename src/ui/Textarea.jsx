function Textarea({ name, cols, rows, placeholder, register, isRequired }) {
  return (
    <textarea
      {...register(name, {
        required: isRequired ? 'This field is required.' : false,
        minLength: {
          value: 5,
          message: 'Minimum 5 characters :(',
        },
      })}
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
  );
}

export default Textarea;
