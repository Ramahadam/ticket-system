import { supabase, supabaseUrl } from './supabase';

export async function getIncidents() {
  let { data: incidents, error } = await supabase.from('incidents').select('*');

  if (error) {
    console.error(error.message);
    throw new Error(`Could\t load incidents data ${error.message}`);
  }

  return incidents;
}

export async function getIncident(id) {
  let { data: incident, error } = await supabase
    .from('incidents')
    .select('*')
    .eq('id', id);

  if (error) {
    console.error(error);
    throw new Error("Could't load incidents data");
  }

  return incident;
}

export async function deleteIncident(id) {
  const { error } = await supabase.from('incidents').delete().eq('id', id);

  if (error) {
    console.error(error);
    throw new Error('Could\t load incidents data');
  }
}

export async function updateIncident(incident, editId) {
  const { data, error } = await supabase
    .from('incidents')
    .update(incident)
    .eq('id', editId)
    .select();

  if (error) {
    console.error(error);
    throw new Error("Could't load incident data");
  }

  console.log(data);
  return data;
}

export async function createIncident(incident) {
  const fileName = `${Math.random()}-${incident.file.name}`.replaceAll('/', '');
  const filePath = `/${fileName}`;
  const fileURL = `${supabaseUrl}/storage/v1/object/public/files/${filePath}`;
  console.log(fileURL);

  // 1. Create incident
  const { data, error } = await supabase
    .from('incidents')
    .insert([{ ...incident, file: fileURL }])
    .select('id');

  console.log(data);

  if (error) {
    console.error(error);
    throw new Error('Could not load incidents data');
  }

  // 2. Upload the file
  const { error: storageError } = await supabase.storage
    .from('files')
    .upload(filePath, incident.file);

  // 3. Delete the incident if there was an error uploading the file
  if (storageError) {
    await supabase.from('incidents').delete().eq('id', data[0].id);
    console.error(storageError);
    throw new Error(
      'File could not be uploaded and incident could not be created'
    );
  }

  console.log(data);

  return data[0].id;
}
