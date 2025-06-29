import ChangeRequestForm from './ChangeRequestForm';
import useChangeRequestById from './useChangeRequestById';
import Loader from '../../ui/Loader';
import useUpdateChangeRequest from './useUpdateChangeRequest';
import TicketAttachments from '../../ui/TicketAttachments';
import TicketNotes from '../../ui/TicketNotes';
import { useState } from 'react';
function ChangeRequest() {
  const [activeTab, setActiveTab] = useState(0);

  const { changeRequest, isLoading } = useChangeRequestById();

  const { updateChangeRequest, isPending: isUpdating } =
    useUpdateChangeRequest();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="text-base p-6 font-normal rounded-2xl">
      <menu className="border-b border-bg-gray w-full flex gap-4">
        <button
          className={`text-lg font-medium p-2 bg-transparent border-none cursor-pointer ${activeTab === 0 ? 'text-color-secondary border-b-2 border-color-secondary' : ''}`}
          onClick={() => setActiveTab(0)}
        >
          Ticket
        </button>
        <button
          className={`text-lg font-medium p-2 bg-transparent border-none cursor-pointer ${activeTab === 1 ? 'text-color-secondary border-b-2 border-color-secondary' : ''}`}
          onClick={() => setActiveTab(1)}
        >
          Attachments
        </button>
        <button
          className={`text-lg font-medium p-2 bg-transparent border-none cursor-pointer ${activeTab === 2 ? 'text-color-secondary border-b-2 border-color-secondary' : ''}`}
          onClick={() => setActiveTab(2)}
        >
          Notes
        </button>
      </menu>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {activeTab === 0 && (
            <div className="flex flex-col gap-4 items-center">
              <h2>Update change request</h2>
              <ChangeRequestForm
                currentChangeRequest={changeRequest}
                updateChangeRequest={updateChangeRequest}
                isUpdating={isUpdating}
              />
            </div>
          )}
          {activeTab === 1 && <TicketAttachments ticket={changeRequest} />}
          {activeTab === 2 && <TicketNotes ticket={changeRequest} />}
        </div>
      )}
    </div>
  );
}

export default ChangeRequest;
