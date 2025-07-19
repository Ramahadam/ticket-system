import { supabaseUrl } from '../apiServices/supabase';
import { addDays, addHours } from 'date-fns';
import { useUserContext } from '../Context/UserContext';

export function calcualteDeadline(priority) {
  /***
   * P1: 4 hours    // const result = addHours(new Date(), 4)
   * P2: 1 day
   * P3: 3 days
   *
   * const result3 = addDays(new Date(2014, 8, 1), 10);
   */

  const currentDate = new Date();

  if (priority === 1) return addHours(currentDate, 4);
  if (priority === 2) return addDays(currentDate, 1);
  if (priority === 3) return addDays(currentDate, 3);
  if (priority === 4) return addDays(currentDate, 4);
}

export function createNotes(data, uniqID) {
  const notes = [
    {
      noteId: uniqID,
      noteValue: data.notes,
      createBy: data.engineer,
      createdAt: new Date(),
    },
  ];

  return notes;
}

export function replaceFileFormats(str) {
  return str.replace(/\b(.pdf|.jpg|.jpeg)\b/gi, '');
}

export function create_file_name_for_upload(name, isUpdateSession = false) {
  const fileName = `${Math.random()}-${name}`.replaceAll('/', '');

  const filePath = isUpdateSession ? `${fileName}` : `/${fileName}`;
  const fileURL = `${supabaseUrl}/storage/v1/object/public/files/${filePath}`;

  return { fileURL, filePath };
}

export function buildUserProfile(id, data) {
  if (!id && !data) return;
  const { confirmPassword, ...userProfileDetails } = data;
  const isActive = data.isActive?.toLowerCase() === 'true';

  const userProfile = {
    id: id,
    ...userProfileDetails,
    isActive,
    file: data.file[0],
  };

  return userProfile;
}
