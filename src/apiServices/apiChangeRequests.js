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
  const { data, error } = await supabase
    .from('change_requests')
    .insert([changeRequest]);

  if (error) {
    console.error('Error creating change request:', error);
    return null;
  }

  return data;
};

export const updateChangeRequest = async (id, changeRequest) => {
  const { data, error } = await supabase
    .from('change_requests')
    .update(changeRequest)
    .eq('id', id);

  if (error) {
    console.error('Error updating change request:', error);
    return null;
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
