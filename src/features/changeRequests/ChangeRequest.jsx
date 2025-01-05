import ChangeRequestForm from './ChangeRequestForm';

function ChangeRequest() {
  return (
    <div className="flex flex-col gap-4 items-center">
      <h2 className=" place-self-auto">Update change request</h2>

      <ChangeRequestForm />
    </div>
  );
}

export default ChangeRequest;
