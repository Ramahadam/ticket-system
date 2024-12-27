// import styles from './FormCreateUpdate.module.css';
import { useForm } from 'react-hook-form';
import { calcualteDeadline, createNotes } from '../utils/helper';
import { useId as generateUniqID } from 'react';
import Loader from './Loader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function FormCreateUpdate({
  createTicket,
  updateTicket,
  isLoading,
  ticket = {},
  tableName,
}) {
  const navigate = useNavigate();

  const { id: editId, ...editValues } = ticket;
  const isUpdateSession = Boolean(editId);

  const uniqID = generateUniqID();

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm({
    defaultValues: isUpdateSession ? { ...editValues, notes: '' } : {},
  });

  function handleForm(data) {
    if (!data) return;

    const notes = createNotes(data, uniqID);
    const lastUpdate = new Date();

    //Update ticket
    if (editId) {
      reset(data);
      const ticket = { ...data, notes, lastUpdate };
      updateTicket({ ticket, editId });
    }

    //Create ticket
    if (!editId) {
      const ticket = {
        ...data,
        file: data.file[0],
        notes,
        lastUpdate,
        priority: Number(data.priority),
        deadline: calcualteDeadline(Number(data.priority)),
      };

      createTicket(ticket);
    }
  }

  if (isLoading) return <Loader />;

  return (
    <form
      onSubmit={handleSubmit(handleForm)}
      className="grid grid-cols-2 gap-4"
    >
      <div className="flex flex-col gap-4">
        <p>
          <label htmlFor="subject" className="mandatory">
            Subject
          </label>
          <input
            type="text"
            {...register('subject', {
              required: 'This field is required.',
              minLength: {
                value: 5,
                message: 'Minimum 5 characters :(',
              },
            })}
            placeholder="short description of the issue"
            className="text-lg font-fredoka text-inherit max-w-[30rem] h-[5rem] outline-none p-6 border border-bg-gray rounded-md"
          />
          <span className="text-red-500">
            {errors['subject']?.message && errors['subject']?.message}
          </span>
        </p>

        <p>
          <label htmlFor="summary" className="mandatory">
            Summary
          </label>
          <textarea
            {...register('summary', {
              required: 'This field is required.',
              minLength: {
                value: 5,
                message: 'Minimum 5 characters :(',
              },
            })}
            cols="30"
            rows="10"
            placeholder="Problem summary"
            className="text-lg font-fredoka text-inherit max-w-[30rem] h-[18rem] outline-none p-6 border border-bg-gray rounded-md"
          ></textarea>
          <span className="text-red-500">
            {errors['summary']?.message && errors['summary']?.message}
          </span>
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <p>
          <label htmlFor="priority" className="mandatory">
            Priority
          </label>
          <select
            defaultValue={getValues().priority}
            name="priority"
            {...register('priority', {
              required: 'This field is required.',
            })}
            className="text-lg font-fredoka text-inherit max-w-[30rem] h-[5rem] outline-none p-6 border border-bg-gray rounded-md"
          >
            <option value={3}>Normal</option>
            <option value={1}>High</option>
            <option value={4}>Low</option>
            <option value={2}>Medium</option>
          </select>
          <span className="text-red-500">
            {errors['priority']?.message && errors['priority']?.message}
          </span>
        </p>
        <p>
          <label htmlFor="status" className="mandatory">
            Status
          </label>
          <select
            defaultValue={getValues().status}
            {...register('status', {
              required: 'This field is required.',
            })}
            className="text-lg font-fredoka text-inherit max-w-[30rem] h-[5rem] outline-none p-6 border border-bg-gray rounded-md"
          >
            <option value="loged">Loged</option>
            <option value="fulfiled">Fulfiled</option>
            <option value="progress">Progress</option>
            <option value="hold">On hold</option>
          </select>
          <span className="text-red-500">
            {errors['status']?.message && errors['status']?.message}
          </span>
        </p>
        <p>
          {tableName !== 'requests' && (
            <>
              <label htmlFor="impact" className="mandatory">
                Affected users
              </label>
              <select
                defaultValue={getValues().impact}
                {...register('impact', {
                  required: 'This field is required.',
                })}
                className="text-lg font-fredoka text-inherit max-w-[30rem] h-[5rem] outline-none p-6 border border-bg-gray rounded-md"
              >
                <option value="one">1 User</option>
                <option value="tow">2 users</option>
                <option value="many">Many users</option>
              </select>
              <span className="text-red-500">
                {errors['impact']?.message && errors['impact']?.message}
              </span>
            </>
          )}
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <p>
          <label htmlFor="requester" className="mandatory">
            Requester
          </label>
          <input
            type="text"
            placeholder="Entity"
            {...register('requester', {
              required: 'This field is required.',
              minLength: {
                value: 5,
                message: 'Minimum 5 characters :(',
              },
            })}
            className="text-lg font-fredoka text-inherit max-w-[30rem] h-[5rem] outline-none p-6 border border-bg-gray rounded-md"
          />
          <span className="text-red-500">
            {errors['requester']?.message && errors['requester']?.message}
          </span>
        </p>
        <p>
          <label htmlFor="solution">Solution</label>
          <textarea
            {...register('solution')}
            className="text-lg font-fredoka text-inherit max-w-[30rem] h-[18rem] outline-none p-6 border border-bg-gray rounded-md"
          ></textarea>
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <p>
          <label htmlFor="engineer" className="mandatory">
            Assign to
          </label>
          <select
            defaultValue={getValues().engineer}
            {...register('engineer', {
              required: 'This field is required.',
            })}
            className="text-lg font-fredoka text-inherit max-w-[30rem] h-[5rem] outline-none p-6 border border-bg-gray rounded-md"
          >
            <option value="john">John</option>
            <option value="peter">Peter</option>
            <option value="adam">Adam</option>
          </select>
          <span className="text-red-500">
            {errors['engineer']?.message && errors['engineer']?.message}
          </span>
        </p>
        <p>
          <label htmlFor="notes">Add internal note</label>
          <textarea
            {...register('notes')}
            className="text-lg font-fredoka text-inherit max-w-[30rem] h-[18rem] outline-none p-6 border border-bg-gray rounded-md"
          ></textarea>
        </p>
      </div>

      <div className="w-[60rem] justify-self-center col-span-2 border border-dashed border-bg-gray p-6 rounded-full text-center">
        <div className="relative z-[999]">
          <FontAwesomeIcon icon={faFolderOpen} />
          <label htmlFor="fileInput">
            <span className="text-primary cursor-pointer">Browse Files </span>or
            Drag files here &#91; Max size: 10 MB. &#93;
          </label>
          <input
            type="file"
            {...register('file')}
            placeholder="Browse Files"
            accept="image/*,.pdf"
            id="fileInput"
            className="hidden"
          />
        </div>
      </div>
      <footer className="text-center col-span-2 mt-8">
        <input
          type="submit"
          className="btn btn--primary mr-8 text-white"
          value="Submit"
        />
        <a onClick={() => navigate(-1)} to="/" className="btn btn--rounded">
          Cancel
        </a>
      </footer>
    </form>
  );
}

export default FormCreateUpdate;
