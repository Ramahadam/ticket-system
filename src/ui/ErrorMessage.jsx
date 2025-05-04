function ErrorMessage({ error }) {
  return (
    <span className="bg-light-red text-color-orange max-w-fit rounded-md m-2">
      {error}
    </span>
  );
}

export default ErrorMessage;
