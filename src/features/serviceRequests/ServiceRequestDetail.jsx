import { useState } from 'react';
import TicketDetail from '../../ui/TicketDetail';
import { useServiceRequest } from './useServiceRequest';
import useUpdateServiceRequest from './useUpdateServiceRequest';

function ServiceRequestDetail() {
  const [activeTab, setActiveTab] = useState(0);
  const { serviceRequest, isLoading } = useServiceRequest();

  const { updateServiceReqeust, isPending } = useUpdateServiceRequest();

  return (
    <TicketDetail
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      ticket={serviceRequest}
      isLoading={isLoading || isPending}
      updateTicket={updateServiceReqeust}
      tableName="requests"
    />
  );
}

export default ServiceRequestDetail;
