import { useForm } from 'react-hook-form';
import { calcualteDeadline, createNotes } from '../utils/helper';
import { useId as generateUniqID } from 'react';
import Loader from './Loader';

import { useNavigate } from 'react-router-dom';
import Input from './Input';
import Textarea from './Textarea';
import Select from './Select';
import FileUpload from './FileUpload';

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

      // console.log(ticket);

      createTicket(ticket);
    }
  }

  if (isLoading) return <Loader />;

  return (
    <form
      onSubmit={handleSubmit(handleForm)}
      className="grid grid-cols-2 gap-8 "
    >
      <div className="flex flex-col gap-4">
        <label className="block">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500  text-lg ">
            Subject
          </span>

          <Input
            type="text"
            name="subject"
            placeholder="short description of the issue"
            register={register('subject', {
              required: 'subject field is required',
              minLength: {
                value: 5,
                message: 'subject must be at least 5 characters',
              },
            })}
            error={errors?.subject?.message}
          />
        </label>

        <p>
          <label className="block">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500  text-lg block ">
              Summary
            </span>

            <Textarea
              register={register('summary', {
                required: 'This field is required.',
                minLength: {
                  value: 5,
                  message: 'Minimum 5 characters :(',
                },
              })}
              name="summary"
              cols="30"
              rows="10"
              placeholder="Problem summary"
              error={errors?.summary?.message}
            />
          </label>
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <p>
          <Select
            options={[
              { value: 3, label: 'Normal' },
              { value: 1, label: 'High' },
              { value: 4, label: 'Low' },
              { value: 2, label: 'Medium' },
            ]}
            name="priority"
            defaultValue={getValues().priority}
            register={register('priority', {
              required: 'priority is required',
            })}
            error={errors?.priority?.message}
          />

          <Select
            options={[
              { value: 'loged', label: 'Loged' },
              { value: 'fulfiled', label: 'Fulfiled' },
              { value: 'progress', label: 'Progress' },
              { value: 'hold', label: 'On hold' },
            ]}
            name="status"
            register={register('status', {
              required: 'status is required',
            })}
            error={errors?.status?.message}
            defaultValue={getValues().status}
          />
        </p>

        <p>
          {tableName !== 'requests' && (
            <>
              <Select
                options={[
                  { value: 'one', label: '1 User' },
                  { value: 'two', label: '2 users' },
                  { value: 'many', label: 'Many users' },
                ]}
                name="impact"
                register={register('impact', {
                  required: 'impact is required',
                })}
                error={errors?.impact?.message}
                defaultValue={getValues().impact}
              />
            </>
          )}
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <p>
          <label className="block">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500  text-lg ">
              Requester
            </span>
            <Input
              type="text"
              name="requester"
              placeholder="Ticket requester"
              register={register('requester', {
                required: 'requester field is required',
                minLength: {
                  value: 5,
                  message: 'requester must be at least 5 characters',
                },
              })}
              error={errors?.requester?.message}
            />
          </label>
        </p>
        <p>
          <label className="block">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500  text-lg block ">
              Solution
            </span>

            <Textarea
              name="solution"
              cols="30"
              rows="10"
              placeholder="Problem summary"
              isRequired={false}
              error={errors?.solution?.message}
            />
          </label>
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <p>
          <Select
            options={[
              { value: 'john', label: 'John' },
              { value: 'peter', label: 'Peter' },
              { value: 'adam', label: 'Adam' },
            ]}
            isRequired={true}
            name="engineer"
            register={register('engineer', {
              required: 'engineer is required',
            })}
            error={errors?.engineer?.message}
            defaultValue={getValues().engineer}
          />
        </p>
        <p>
          <label className="block">
            <span className="  text-lg block ">Add internal note</span>
            <Textarea
              name="notes"
              cols="10"
              rows="10"
              placeholder="Problem summary"
              isRequired={false}
            />
          </label>
        </p>
      </div>

      <FileUpload
        name="file"
        register={register}
        acceptFileType="image/*,.pdf"
        errors={errors}
      />
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
