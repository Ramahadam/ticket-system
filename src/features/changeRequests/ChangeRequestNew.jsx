import Loader from '../../ui/Loader';
import ChangeRequestForm from './ChangeRequestForm';
import { useCreateChangeRequest } from './useCreateChangeRequest';

function ChangeRequestNew() {
  const { createChangeRequest, isCreating } = useCreateChangeRequest();
  return (
    <>
      {isCreating ? (
        <Loader />
      ) : (
        <div className="flex flex-col gap-4 items-center ">
          <h2 className=" place-self-auto">Create change request</h2>

          <ChangeRequestForm
            createChangeRequest={createChangeRequest}
            isCreating={isCreating}
          />
        </div>
      )}
    </>
  );
}

export default ChangeRequestNew;
