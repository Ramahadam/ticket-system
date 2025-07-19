import { useForm } from 'react-hook-form';

import { createUserApi, resetUserPassword } from '../../apiServices/apiUsers';
import { useUpdateUser } from './useUpdateUser';
import { useCreateUser } from './useCreateUser';
import { FormUser } from '../../ui/FormUser';
import { useEffect, useState } from 'react';
import { useUserContext } from '../../Context/UserContext';
import { buildUserProfile } from '../../utils/helper';

function UserCreation() {
  const {
    editUser,
    isUpdateSession,
    filteredDefaultValues,
    showForm,
    setShowForm,
    resetPassword,
  } = useUserContext();

  const { reset, getValues, watch, ...otherFormProp } = useForm({
    defaultValues: isUpdateSession ? { ...filteredDefaultValues } : {},
  });

  // Watch password field for confirmation matching
  const password = watch('password');

  useEffect(() => {
    if (isUpdateSession) {
      reset(filteredDefaultValues);
    } else {
      reset({});
    }
  }, [isUpdateSession, reset, filteredDefaultValues]);

  const { createUserProfile } = useCreateUser();

  const { updateUserProfile } = useUpdateUser();

  async function handleCreateUser(data) {
    try {
      const newUserCredentials = {
        email: getValues('email'),
        password: getValues('password'),
        email_confirm: true,
      };

      const { user } = await createUserApi(newUserCredentials);

      const userProfile = buildUserProfile(user?.id, data);

      await createUserProfile(userProfile);
    } catch (err) {
      console.log(`Error while creating the user ${err}`);
    }
  }

  async function handleUpdateUser(data) {
    const id = editUser?.id;

    if (!id) return;
    // if password reset reqeust
    if (resetPassword && data.password) {
      await resetUserPassword(id, data.password);
    }
    // Update user details
    await updateUserProfile({ id, data });
  }

  async function onSubmit(data) {
    if (!data) return;

    if (!isUpdateSession) {
      await handleCreateUser(data);
    } else {
      await handleUpdateUser(data);
    }

    setShowForm((prev) => !prev);
  }
  return (
    showForm && (
      <FormUser
        reset={reset}
        formKey={isUpdateSession ? 'edit' : 'create'}
        onSubmit={onSubmit}
        matchedPassword={password}
        reactForm={otherFormProp}
      />
    )
  );
}

export default UserCreation;
