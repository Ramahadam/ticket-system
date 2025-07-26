import { PAGE_SIZE } from '../utils/constant';
import { supabase, supabaseUrl } from './supabase';

export const fetchChangeRequests = async ({
  filterByStatus,
  sortBy,
  columnName,
  page,
}) => {
  let query = supabase.from('change_requests').select('*', { count: 'exact' });

  //Filter
  if (filterByStatus?.length > 0) query = query.in(columnName, filterByStatus);

  //Sort
  if (sortBy)
    query = query.order(sortBy.field, {
      ascending: sortBy.direction === 'asc',
    });

  //Pagination
  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;

  if (error) {
    console.error(error.message);
    throw new Error(`Couldn't load service requests data ${error.message}`);
  }

  return { data, count };
};

export const createChangeRequest = async (changeRequest) => {
  ///
  const fileName = `${Math.random()}-${changeRequest?.file?.name}`.replaceAll(
    '/',
    ''
  );

  const filePath = `/${fileName}`;
  const fileURL = `${supabaseUrl}/storage/v1/object/public/files/${filePath}`;

  let query = supabase.from('change_requests');

  if (!changeRequest.file) {
    query = await query.insert([changeRequest]).select('id');
  }

  if (changeRequest.file) {
    query = await query
      .insert([{ ...changeRequest, file: fileURL }])
      .select('id');
    // 2. Upload the file
    const { error: storageError } = await supabase.storage
      .from('files')
      .upload(filePath, changeRequest.file);

    // 3. Delete the change Request if there was an error uploading the file
    if (storageError) {
      await query.delete().eq('id', data[0].id);
      console.error(storageError);
      throw new Error(
        'File could not be uploaded and change Request could not be created'
      );
    }
  }

  const { data, error } = query;

  if (error) throw new Error('Could not create change Request due to an error');

  return data[0].id;

  // const { data, error } = await supabase
  //   .from('change_requests')
  //   .insert([changeRequest])
  //   .select('id');

  // if (error) {
  //   console.error('Error creating change request:', error);
  //   return null;
  // }

  // return data[0].id;
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
