import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Input from '../../ui/Input';
import Select from '../../ui/Select';

function UserForm() {
  return (
    <form className="mt-16 shadow-2xl p-4 rounded-md max-w-[80%]">
      <header className="flex justify-between items-center">
        <h2>Create user</h2>
        <button onClick={console.log('')}>
          <FontAwesomeIcon
            icon={faTimes}
            className="text-color-orange h-6 w-6 border border-color-orange rounded-sm p-1"
          />
        </button>
      </header>

      <div className=" p-4 ">
        <div className="flex gap-4 mb-4">
          <>
            <Input
              type="text"
              name="firstname"
              placeholder="Enter firstname"
              defaultValue="firstname"
              label="Firstname"
            />
          </>
          <Input
            type="text"
            name="lastname"
            placeholder="Enter lastname"
            defaultValue="lastname"
          />
        </div>
        <div className="flex gap-4 mb-4">
          <Input type="email" name="email" placeholder="someone@email.com" />
          <Select
            className=" w-full "
            options={[
              { value: 'analyst', label: 'Analyst' },
              { value: 'normal', label: 'Normal' },
              { value: 'helpdesk', label: 'Helpdesk' },
            ]}
            isRequired={true}
            name="role"
            id="role"
          />
        </div>
        <div className="">
          <Input
            type="password"
            placeholder="password"
            name="password"
            id="password"
          />
          <Input
            type="password"
            placeholder="confirm password"
            name="confrimPassword"
            id="confrimPassword"
          />
        </div>
      </div>
      <button className="btn btn--primary">Create </button>
    </form>
  );
}

export default UserForm;
