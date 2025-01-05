import Input from '../../ui/Input';
import Lable from '../../ui/Lable';
import Select from '../../ui/Select';
import Textarea from '../../ui/Textarea';
import Button from '../../ui/Button';
import FileUpload from '../../ui/FileUpload';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';

function ChangeRequestForm({ createChangeRequest }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function handleForm(data) {
    console.log(data);
  }

  return (
    <div className="w-[80%] mx-auto ">
      <form
        className="grid grid-cols-2 gap-8 mt-6 w-full"
        onSubmit={handleSubmit(handleForm)}
      >
        <div className="form-group">
          <Lable htmlFor="requester" labelText="Requester" />
          <Input
            type="text"
            name="requester"
            placeholder="Update requester"
            register={register}
            errors={errors}
          />
          <span className="text-red-500">
            {errors['requester']?.message && errors['requester']?.message}
          </span>
        </div>

        <div className="form-group">
          <Select
            name="category"
            options={[
              { value: 'software', label: 'Software' },
              { value: 'hardware', label: 'Hardware' },
              { value: 'network', label: 'Network' },
              { value: 'servers', label: 'Servers' },
              { value: 'storage', label: 'Storage' },
              { value: 'exchange', label: 'Exchange' },
            ]}
            register={register}
            isRequired={true}
            defaultValue="John"
            errors="errors from React hook form"
          />
        </div>

        <div className="form-group">
          <Lable htmlFor="summary" labelText="Summary" />
          <Input
            type="text"
            name="summary"
            placeholder="Update summary"
            register={register}
            errors={errors}
          />

          <span className="text-red-500">
            {errors['summary']?.message && errors['summary']?.message}
          </span>
        </div>

        <div className="form-group">
          <Select
            name="status"
            options={[
              { value: 'requested', label: 'Requested' },
              { value: 'pending approval', label: 'Pending approval' },
              { value: 'approved', label: 'Approved' },
              { value: 'canceled', label: 'Canceled' },
              { value: 'implemented', label: 'Implemented' },
            ]}
            register={register}
            isRequired={true}
            defaultValue="John"
            errors="errors from React hook form"
          />
        </div>

        <div className="form-group">
          <Lable htmlFor="analyst" labelText="Analyst" />
          <Input
            type="text"
            name="analyst"
            placeholder="Update analyst"
            register={register}
            errors={errors}
          />
          <span className="text-red-500">
            {errors['analyst']?.message && errors['analyst']?.message}
          </span>
        </div>

        <div className="form-group">
          <Select
            name="classification"
            options={[
              { value: 'standard', label: 'Requested' },
              { value: 'pending approval', label: 'Pending approval' },
              { value: 'approved', label: 'Approved' },
              { value: 'canceled', label: 'Canceled' },
              { value: 'implemented', label: 'Implemented' },
            ]}
            register={register}
            isRequired={true}
            defaultValue="John"
            errors="errors from React hook form"
          />
        </div>

        <div className="form-group">
          <Lable
            htmlFor="description"
            labelText="Description"
            className="after:content-['*'] after:ml-0.5 after:text-red-500  text-lg block "
          />

          <Textarea
            name="description"
            register={register}
            cols="30"
            rows="10"
            placeholder="description"
            isRequired={true}
            errors={errors}
          />
          <span className="text-red-500">
            {errors['description']?.message && errors['description']?.message}
          </span>
        </div>

        <div className="form-group">
          <Lable
            htmlFor="rollbackPlan"
            labelText="Rollback Plan"
            className="after:content-['*'] after:ml-0.5 after:text-red-500  text-lg block "
          />

          <Textarea
            name="rollbackPlan"
            register={register}
            cols="30"
            rows="10"
            placeholder="rollbackPlan"
            isRequired={true}
            errors={errors}
          />
          <span className="text-red-500">
            {errors['rollbackPlan']?.message && errors['rollbackPlan']?.message}
          </span>
        </div>

        <div className="form-group">
          <Lable
            htmlFor="notes"
            labelText="Add note"
            className="after:content-['*'] after:ml-0.5 after:text-red-500  text-lg block "
          />

          <Textarea
            name="notes"
            register={register}
            cols="30"
            rows="5"
            placeholder="Add note"
            isRequired={false}
          />
          <span className="text-red-500">
            {errors['notes']?.message && errors['notes']?.message}
          </span>
        </div>

        <div className="flex items-start">
          <div className="form-group flex items-center">
            <Lable
              htmlFor="associatedIncidents"
              labelText="Associated Incidents"
            />
            <Button onClick={() => ''}>
              <FontAwesomeIcon
                icon={faSquarePlus}
                className="text-dark-green"
              />
            </Button>
          </div>
        </div>

        <FileUpload
          name="file"
          register={register}
          acceptFileType="image/*,.pdf"
          errors={'error'}
        />

        <div className="form-group flex justify-end mb-6 gap-4">
          <input
            type="submit"
            className="btn btn--primary mr-8 text-white"
            value="Submit"
          />
          <a className="btn btn--rounded">Cancel</a>
        </div>
      </form>
    </div>
  );
}

export default ChangeRequestForm;
