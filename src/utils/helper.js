import { supabaseUrl } from '../apiServices/supabase';
import { addDays, addHours, format } from 'date-fns';
import * as XLSX from 'xlsx';

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

export function getTicketStatusCounts(tickets) {
  if (!tickets) return undefined;

  let data;

  const isChangeRequest = tickets[0]?.hasOwnProperty('owner');

  if (!isChangeRequest) {
    const logged = tickets.filter((ticket) => ticket.status === 'loged').length;

    const progress = tickets.filter(
      (incident) => incident.status === 'progress'
    ).length;

    const fulfilled = tickets.filter(
      (incident) => incident.status === 'fulfilled'
    ).length;

    const hold = tickets.filter(
      (incident) => incident.status === 'hold'
    ).length;
    const canceled = tickets.filter(
      (incident) => incident.status === 'canceled'
    ).length;

    data = [
      { name: 'fulfilled', total: fulfilled },
      { name: 'in progress', total: progress },
      { name: 'logged', total: logged },
      { name: 'on hold', total: hold },
      { name: 'canceled', total: canceled },
    ];
  } else {
    const requested = tickets.filter(
      (ticket) => ticket.status === 'requested'
    ).length;
    const approved = tickets.filter(
      (ticket) => ticket.status === 'approved'
    ).length;
    const canceled = tickets.filter(
      (ticket) => ticket.status === 'canceled'
    ).length;

    data = data = [
      { name: 'requested', total: requested },
      { name: 'approved', total: approved },
      { name: 'canceled', total: canceled },
    ];
  }

  return data;
}

export function exportToExcel(data, filename = 'Export.xlsx') {
  filename = `${filename}-${format(new Date(Date.now()), 'dd-MM-HH-mm-ss')}.xlsx`;
  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
  XLSX.writeFile(workbook, filename);
}
