import { faTruck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FormCreateUpdate from '../../ui/FormCreateUpdate';
import Loader from '../../ui/Loader';
import { useCreateServiceRequest } from './useCreateServiceRequest';

function ServiceRequestNew() {
  const { createServiceRequest, isCreating } = useCreateServiceRequest();

  return (
    <div className={`container`}>
      {isCreating ? (
        <Loader />
      ) : (
        <div
          className=" bg-white
                    w-full
                    text-base
                    p-6
                    font-normal
                    rounded-2xl
                    border-collapse"
        >
          <header>
            <FontAwesomeIcon icon={faTruck} />
            <h2>Create new service request</h2>
          </header>

          <FormCreateUpdate
            createTicket={createServiceRequest}
            isCreating={isCreating}
            tableName="serviceRequest"
          />
        </div>
      )}
    </div>
  );
}

export default ServiceRequestNew;
