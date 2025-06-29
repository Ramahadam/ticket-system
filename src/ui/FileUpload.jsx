function FileUpload({ name, register, acceptFileType, errors }) {
  return (
    <div className="w-[30rem] justify-self-center col-span-2 border border-dashed border-bg-gray p-2 rounded-full text-center">
      <label className="block">
        <span className="sr-only text-3xl">Choose file</span>
        <input
          type="file"
          {...register(name)}
          accept={acceptFileType}
          className="
            block
            w-full
            text-xl
            text-slate-500
            file:mr-4
            file:py-2
            file:px-4
            file:rounded-full
            file:border-0
            file:text-sm
            file:font-semibold
            file:bg-violet-50
            file:text-violet-700
            hover:file:bg-violet-100
          "
        />
      </label>
      {errors[name] && (
        <span className="text-red-500">{errors[name]?.message}</span>
      )}
    </div>
  );
}

export default FileUpload;
