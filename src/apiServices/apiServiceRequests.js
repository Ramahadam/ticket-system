import { supabase } from './supabase';

export async function getServiceRequests({
  filterByStatus,
  sortBy,
  columnName,
}) {
  let query = supabase.from('service_requests').select('*');

  //Filter
  if (filterByStatus?.length > 0) query = query.in(columnName, filterByStatus);

  //Sort
  if (sortBy)
    query = query.order(sortBy.field, {
      ascending: sortBy.direction === 'asc',
    });

  const { data: serviceRequests, error } = await query;

  if (error) {
    console.error(error.message);
    throw new Error(`Couldn't load service requests data ${error.message}`);
  }

  return serviceRequests;
}

export async function getServiceRequest(id) {
  let { data: serviceRequest, error } = await supabase
    .from('service_requests')
    .select('*')
    .eq('id', id);

  if (error) {
    console.error(error);
    throw new Error("Could't load service request data");
  }

  return serviceRequest;
}

export async function updateServiceReqeust(reqeust, editId) {
  //Fetch service reqeust and update the notes before updating column since it will be overwritten
  const serviceReqeustEdit = await getServiceRequest(editId);
  const fetchedNotes = serviceReqeustEdit?.at(0).notes;

  const { data, error } = await supabase
    .from('service_requests')
    .update({
      ...reqeust,
      notes: fetchedNotes
        ? [...fetchedNotes, reqeust.notes.at(0)]
        : reqeust.notes,
    })
    .eq('id', editId)
    .select();

  if (error) {
    console.error(error);
    throw new Error("Could't load reqeust data");
  }

  return data;
}
