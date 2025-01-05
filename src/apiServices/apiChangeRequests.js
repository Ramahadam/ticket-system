import { supabase } from './supabase';

export const fetchChangeRequests = async () => {
  const { data, error } = await supabase.from('change_requests').select('*');

  if (error) {
    console.error('Error fetching change requests:', error);
    return null;
  }

  return data;
};

export const createChangeRequest = async (changeRequest) => {
  console.log(changeRequest);
  const { data, error } = await supabase
    .from('change_requests')
    .insert([changeRequest])
    .select('id');

  if (error) {
    console.error('Error creating change request:', error);
    return null;
  }

  return data[0].id;
};

export const updateChangeRequest = async (changeRequest, editId) => {
  //Fetch change requests and update the notes before updating column since it will be overwritten
  const changeRequestEdit = await fetchChangeRequestById(editId);
  const fetchedNotes = changeRequestEdit?.at(0).notes;

  const { data, error } = await supabase
    .from('change_requests')
    .update({
      ...changeRequest,
      notes: fetchedNotes
        ? [...fetchedNotes, changeRequest.notes.at(0)]
        : changeRequest.notes,
    })
    .eq('id', editId)
    .select();

  if (error) {
    console.error(error);
    throw new Error("Couldn't load change request data");
  }

  return data;
};

export const deleteChangeRequest = async (id) => {
  const { data, error } = await supabase
    .from('change_requests')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting change request:', error);
    return null;
  }

  return data;
};

export const fetchChangeRequestById = async (id) => {
  let { data: changeRequest, error } = await supabase
    .from('change_requests')
    .select('*')
    .eq('id', id);

  if (error) {
    console.error(error);
    throw new Error("Couldn't load change request data");
  }

  return changeRequest;
};
