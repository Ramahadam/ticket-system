import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

function UserProvider({ children }) {
  const [showForm, setShowForm] = useState(false);
  const [editUser, setEditUser] = useState(null);
  // To conditionally show password reset input and also update password based on reset password state
  const [resetPassword, setResetPassword] = useState(true);

  let isUpdateSession = Boolean(editUser?.id);

  const excludedDefaultValues = [
    'confirmPassword',
    'created_at',
    'file',
    'id',
    'password',
    'updated_at',
  ];

  // Exlude some valuse from the form defaultvalues
  //   let filteredDefaultValues = useMemo(() => {
  //     if (!isUpdateSession) return {};

  //     return Object.fromEntries(
  //       Object.entries(editUser).filter(
  //         ([key]) => !excludedDefaultValues.includes(key)
  //       )
  //     );
  //   }, [isUpdateSession, editUser]);
  let filteredDefaultValues = isUpdateSession
    ? Object.fromEntries(
        Object.entries(editUser).filter(
          ([key]) => !excludedDefaultValues.includes(key)
        )
      )
    : {};

  // Reset the defaultvalues if the form is closed

  // Context values

  const values = {
    showForm,
    setShowForm,
    editUser,
    setEditUser,
    isUpdateSession,
    filteredDefaultValues,
    resetPassword,
    setResetPassword,
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
}

function useUserContext() {
  const context = useContext(UserContext);

  if (context === undefined)
    throw new Error('User context is used outside of the context');

  return context;
}

export { UserProvider, useUserContext };
