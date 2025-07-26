import { PAGE_SIZE } from '../utils/constant';
import { supabase, supabaseUrl } from './supabase';

export async function getServiceRequests({
  filterByStatus,
  sortBy,
  columnName,
  page,
}) {
  let query = supabase.from('service_requests').select('*', { count: 'exact' });

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

  const { data, count, error } = await query;

  if (error) {
    console.error(error.message);
    throw new Error(`Couldn't load service requests data ${error.message}`);
  }

  return { data, count };
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

export async function createServiceRequest(servicRequest) {
  const fileName = `${Math.random()}-${servicRequest?.file?.name}`.replaceAll(
    '/',
    ''
  );

  const filePath = `/${fileName}`;
  const fileURL = `${supabaseUrl}/storage/v1/object/public/files/${filePath}`;

  let query = supabase.from('service_requests');

  if (!servicRequest.file) {
    console.log(servicRequest);
    query = await query.insert([servicRequest]).select('id');
  }

  if (servicRequest.file) {
    query = await query
      .insert([{ ...servicRequest, file: fileURL }])
      .select('id');
    // 2. Upload the file
    const { error: storageError } = await supabase.storage
      .from('files')
      .upload(filePath, servicRequest.file);

    // 3. Delete the servicRequest if there was an error uploading the file
    if (storageError) {
      await query.delete().eq('id', data[0].id);
      console.error(storageError);
      throw new Error(
        'File could not be uploaded and service request could not be created'
      );
    }
  }

  const { data, error } = query;

  if (error) throw new Error('Could not create servicRequest due to an error');

  return data[0].id;
}
