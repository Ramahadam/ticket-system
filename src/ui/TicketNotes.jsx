import { intlFormat } from 'date-fns';

export default function TicketNotes({ ticket }) {
  const { notes = [] } = ticket.at(0);

  return (
    <div className="mt-8 flex flex-col gap-8">
      {notes?.map((note, index) => {
        return (
          <div
            key={`${Math.random()}-${note?.noteId}`}
            className={`w-[50rem] border border-gray-200 p-4 rounded-2xl ${index % 2 === 0 ? 'translate-x-16' : ''}`}
          >
            <p className="noteDescription">{note.noteValue}</p>
            <p>
              <span className="noteAuthor">{note.createdBy}</span>
              <span className="text-light-gray">
                {intlFormat(note?.createdAt, {
                  year: 'numeric',
                  month: 'numeric',
                  day: 'numeric',
                  hour: 'numeric',
                  minute: 'numeric',
                })}
              </span>
            </p>
          </div>
        );
      })}
    </div>
  );
}
