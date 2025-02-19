import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';

import Input from '../../ui/Input';
import Select from '../../ui/Select';

function UserForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  // Watch password field for confirmation matching
  const password = watch('password');

  async function onSubmit(data) {
    console.log(data);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-16 shadow-2xl p-4 rounded-md max-w-[80%]"
    >
      <header className="flex justify-between items-center">
        <h2>Create user</h2>
        <button type="button" onClick={console.log('')}>
          <FontAwesomeIcon
            icon={faTimes}
            className="text-color-orange h-6 w-6 border border-color-orange rounded-sm p-1"
          />
        </button>
      </header>

      <div className="space-y-4">
        <div className="flex gap-4">
          <Input
            name="firstname"
            register={register('firstname', {
              required: 'First name is required',
            })}
            type="text"
            placeholder="First name"
            error={errors?.firstname?.message}
          />{' '}
          <Input
            register={register('lastname', {
              required: 'Last name is required',
            })}
            type="text"
            placeholder="Last name"
            error={errors?.lastname?.message}
          />
        </div>
        <div className="flex gap-4">
          <Input
            name="mobile"
            register={register('mobile', {
              required: 'Mobile number is required',
            })}
            type="number"
            placeholder="+097165353"
            error={errors?.mobile?.message}
          />{' '}
          <Input
            register={register('file')}
            type="file"
            placeholder="upload file"
            error={errors?.file?.message}
            className="border-none flex items-center justify-center bg-white border shadow-sm
                      focus:outline-none 
                      focus:border-none
                      focus:ring-0 "
          />
        </div>
        <div className="flex items-center gap-4">
          <Input
            register={register('email', {
              required: 'Email is required',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Please enter a valid email',
              },
            })}
            type="email"
            placeholder="Email"
            error={errors?.email?.message}
          />

          <Select
            options={[
              { value: 'standard', label: 'standard' },
              { value: 'analyst', label: 'analyst' },
            ]}
            isRequired={true}
            name="role"
            errors={errors}
            register={register('role', { required: 'Role is required' })}
            error={errors?.role?.message}
            classNameLable="hidden  h-4 w-4"
          />
        </div>
        <div className="flex gap-4">
          <Input
            register={register('password', {
              required: 'Password is required',
              minLength: {
                value: 8,
                message: 'Password must be at least 8 characters',
              },
            })}
            type="password"
            placeholder="Password"
            error={errors?.password?.message}
          />
          <Input
            register={register('confirmPassword', {
              required: 'Please confirm your password',
              validate: (value) =>
                value === password || 'Passwords does not match',
            })}
            type="password"
            placeholder="Confirm password"
            error={errors?.confirmPassword?.message}
          />
        </div>
      </div>

      <button type="submit" className="btn btn--primary mt-4">
        create
      </button>
    </form>
  );
}

export default UserForm;
