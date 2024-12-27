function ErrorMessage({ error }) {
  return (
    <div className="bg-light-red text-color-orange max-w-fit rounded-md p-1">
      {error.message}
    </div>
  );
}

export default ErrorMessage;
