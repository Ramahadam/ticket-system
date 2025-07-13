import { createContext, useContext, useMemo, useState } from 'react';

const UserContext = createContext();

function UserProvider({ children }) {
  const [showForm, setShowForm] = useState(false);
  const [editUser, setEditUser] = useState(null);

  console.log(editUser);

  const isUpdateSession = Boolean(editUser?.id);

  const excludedDefaultValues = [
    'confirmPassword',
    'created_at',
    'file',
    'id',
    'password',
    'updated_at',
  ];

  const filteredDefaultValues = useMemo(() => {
    if (!isUpdateSession) return {};

    return Object.fromEntries(
      Object.entries(editUser).filter(
        ([key]) => !excludedDefaultValues.includes(key)
      )
    );
  }, [isUpdateSession, editUser]);

  const values = {
    showForm,
    setShowForm,
    editUser,
    setEditUser,
    isUpdateSession,
    filteredDefaultValues,
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
