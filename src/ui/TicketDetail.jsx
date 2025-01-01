import FormCreateUpdate from './FormCreateUpdate';
import TicketAttachments from './TicketAttachments';
import TicketNotes from './TicketNotes';
import Loader from './Loader';

function TicketDetail({
  activeTab,
  setActiveTab,
  isLoading,
  ticket,
  updateTicket,
  tableName,
}) {
  return (
    <div className="bg-white  text-base p-6 font-normal rounded-2xl">
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
            <FormCreateUpdate
              ticket={ticket?.[0]}
              updateTicket={updateTicket}
              isLoading={isLoading}
              tableName={tableName}
            />
          )}
          {activeTab === 1 && <TicketAttachments ticket={ticket} />}
          {activeTab === 2 && <TicketNotes ticket={ticket} />}
        </div>
      )}
    </div>
  );
}

export default TicketDetail;
