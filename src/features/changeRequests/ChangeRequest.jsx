import ChangeRequestForm from './ChangeRequestForm';
import useChangeRequestById from './useChangeRequestById';
import Loader from '../../ui/Loader';
import useUpdateChangeRequest from './useUpdateChangeRequest';
function ChangeRequest() {
  const { changeRequest, isLoading } = useChangeRequestById();

  const { updateChangeRequest, isPending: isUpdating } =
    useUpdateChangeRequest();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="flex flex-col gap-4 items-center">
      <h2>Update change request</h2>
      <ChangeRequestForm
        currentChangeRequest={changeRequest}
        updateChangeRequest={updateChangeRequest}
        isUpdating={isUpdating}
      />
    </div>
  );
}

export default ChangeRequest;
