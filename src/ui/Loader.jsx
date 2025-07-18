function Loader() {
  return (
    <div
      className=" mx-auto flex flex-col mt-16 items-center h-16 w-16 animate-spin rounded-full border-4 border-solid border-indigo-500 border-e-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
      role="status"
    >
      <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
        Loading...
      </span>
    </div>
  );
}

export default Loader;
