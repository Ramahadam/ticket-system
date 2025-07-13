import { useForm } from 'react-hook-form';

import { createUserApi, resetUserPassword } from '../../apiServices/apiUsers';
// import { useUpdateUser } from './useUpdateUser';
import { useCreateUser } from './useCreateUser';
import { FormUser } from '../../ui/FormUser';
import { useEffect, useState } from 'react';
import { useUserContext } from '../../Context/UserContext';

function UserCreation() {
  const {
    isUpdateSession,
    editId,
    filteredDefaultValues,
    showForm,
    setShowForm,
  } = useUserContext();

  const [resetPassword, setResetPassword] = useState(true);

  const { reset, getValues, watch, ...otherForProp } = useForm({
    defaultValues: isUpdateSession ? { ...filteredDefaultValues } : {},
  });

  useEffect(() => {
    reset(filteredDefaultValues); // Populate the form with default values
  }, [filteredDefaultValues]);

  const { createUserProfile } = useCreateUser();

  // const { updateUserProfile, isUpdating } = useUpdateUser();

  // Watch password field for confirmation matching
  const password = watch('password');

  async function onSubmit(data) {
    if (!data) return;

    // Create new user session

    if (!isUpdateSession) {
      try {
        const newUserCredentials = {
          email: getValues('email'),
          password: getValues('password'),
          email_confirm: true,
        };

        const { user } = await createUserApi(newUserCredentials);

        // eslint-disable-next-line no-unused-vars
        const { confirmPassword, ...userProfileDetails } = data;
        const isActive = data.isActive?.toLowerCase() === 'true';

        const userProfile = {
          id: user.id,
          ...userProfileDetails,
          isActive,
          file: data.file[0],
        };
        await createUserProfile(userProfile);
      } catch (err) {
        console.log(`Error while creating the user ${err}`);
      } finally {
        setShowForm((prev) => !prev);
      }
    }

    // Update existing user
    if (isUpdateSession) {
      // if password reset reqeust
      if (resetPassword) {
        console.log(editId, data.password);
        await resetUserPassword(editId, data.password);
      }
      //TODO
      console.log(data);
      // await updateUserProfile(editId, data);
    }
  }

  return (
    showForm && (
      <FormUser
        setShowForm={setShowForm}
        onSubmit={onSubmit}
        matchedPassword={password}
        reactForm={otherForProp}
        defaultValues={filteredDefaultValues}
        setResetPassword={setResetPassword}
        resetPassword={resetPassword}
      />
    )
  );
}

export default UserCreation;
