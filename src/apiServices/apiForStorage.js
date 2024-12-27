import { supabase } from './supabase';

export const downloadFile = async (fileName) => {
  const { data, error } = await supabase.storage
    .from('files')
    .download(fileName);

  if (error) {
    console.error('Error downloading file:', error.message);
    return;
  }

  const url = URL.createObjectURL(data);
  const a = document.createElement('a');
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};
