import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import Input from './Input';
import Select from './Select';
import FileInputButton from './FileInputButton';
import { useUserContext } from '../Context/UserContext';

export function FormUser({
  reactForm,
  onSubmit,
  setShowForm,
  matchedPassword,
  setResetPassword,
  resetPassword,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = reactForm;

  const { editId } = useUserContext();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-16 shadow-2xl p-4 rounded-md max-w-[80%] min-h-[30rem]"
    >
      <header className="flex justify-between items-center">
        <h2>Create user</h2>
        <button type="button" onClick={() => setShowForm((show) => !show)}>
          <FontAwesomeIcon
            icon={faTimes}
            className="text-color-orange h-6 w-6 border border-color-orange rounded-sm p-1"
          />
        </button>
      </header>

      <div className="space-y-4">
        <div className="hidden-form"></div>
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
            defaultValue="345678909876543"
          />{' '}
          <FileInputButton
            register={register('file')}
            lableText="Choose profile photo"
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
            disabled={Boolean(editId)}
            type="email"
            placeholder="Email"
            error={errors?.email?.message}
          />

          <Select
            options={[
              { value: true, label: 'active' },
              { value: false, label: 'inactive' },
            ]}
            isRequired={true}
            name="isActive"
            errors={errors}
            register={register('isActive', {
              required: 'Account status is required',
            })}
            error={errors?.isActive?.message}
            defaultValue="active"
            classNameLable="hidden  h-4 w-4"
          />
          <Select
            options={[
              { value: 'standard', label: 'standard' },
              { value: 'analyst', label: 'analyst' },
            ]}
            isRequired={true}
            name="userrole"
            errors={errors}
            register={register('userrole', { required: 'Role is required' })}
            error={errors?.userrole?.message}
            classNameLable="hidden  h-4 w-4"
            defaultValue="standard"
          />
        </div>
        {editId && (
          <fieldset>
            <legend> Do you want to reset the password?</legend>

            <div>
              <input
                type="checkbox"
                id="resetPassword"
                name="scales"
                checked={resetPassword}
                onChange={() => setResetPassword((prev) => !prev)}
              />
            </div>
          </fieldset>
        )}

        {resetPassword && (
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
              placeholder=""
              error={errors?.password?.message}
              defaultValue=""
            />
            <Input
              register={register('confirmPassword', {
                required: 'Please confirm your password',
                validate: (value) =>
                  value === matchedPassword || 'Passwords does not match',
              })}
              type="password"
              placeholder="Confirm password"
              error={errors?.confirmPassword?.message}
              defaultValue=""
            />
          </div>
        )}
      </div>

      <button type="submit" className="btn btn--primary mt-4">
        {editId ? 'Update' : 'Create'}
      </button>
    </form>
  );
}
