// import styles from './FormCreateUpdate.module.css';
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
            register={register}
          />
          <span className="text-red-500">
            {errors['subject']?.message && errors['subject']?.message}
          </span>
        </label>

        <p>
          <label className="block">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500  text-lg block ">
              Summary
            </span>

            <Textarea
              name="summary"
              register={register}
              cols="30"
              rows="10"
              placeholder="Problem summary"
            />
            <span className="text-red-500">
              {errors['summary']?.message && errors['summary']?.message}
            </span>
          </label>
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <p>
          <Select
            name="priority"
            options={[
              { value: 3, label: 'Normal' },
              { value: 1, label: 'High' },
              { value: 4, label: 'Low' },
              { value: 2, label: 'Medium' },
            ]}
            register={register}
            isRequired={true}
            defaultValue={getValues().priority}
            errors={errors}
          />

          <Select
            name="status"
            options={[
              { value: 'loged', label: 'Loged' },
              { value: 'fulfiled', label: 'Fulfiled' },
              { value: 'progress', label: 'Progress' },
              { value: 'hold', label: 'On hold' },
            ]}
            register={register}
            isRequired={true}
            defaultValue={getValues().status}
            errors={errors}
          />
        </p>

        <p>
          {tableName !== 'requests' && (
            <>
              <Select
                name="impact"
                options={[
                  { value: 'one', label: '1 User' },
                  { value: 'two', label: '2 users' },
                  { value: 'many', label: 'Many users' },
                ]}
                register={register}
                isRequired={true}
                defaultValue={getValues().impact}
                errors={errors}
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
              name="requester"
              type="text"
              placeholder="Entity"
              register={register}
            />

            <span className="text-red-500">
              {errors['requester']?.message && errors['requester']?.message}
            </span>
          </label>
        </p>
        <p>
          <label className="block">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500  text-lg block ">
              Solution
            </span>

            <Textarea
              name="solution"
              register={register}
              cols="30"
              rows="10"
              placeholder="Problem summary"
              isRequired={false}
            />
            <span className="text-red-500">
              {errors['summary']?.message && errors['summary']?.message}
            </span>
          </label>
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <p>
          <Select
            name="engineer"
            options={[
              { value: 'john', label: 'John' },
              { value: 'peter', label: 'Peter' },
              { value: 'adam', label: 'Adam' },
            ]}
            register={register}
            isRequired={true}
            defaultValue={getValues().engineer}
            errors={errors}
          />
        </p>
        <p>
          <label className="block">
            <span className="  text-lg block ">Add internal note</span>
            <Textarea
              name="notes"
              register={register}
              cols="10"
              rows="10"
              placeholder="Problem summary"
              isRequired={false}
            />
            <span className="text-red-500">
              {errors['summary']?.message && errors['summary']?.message}
            </span>
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
