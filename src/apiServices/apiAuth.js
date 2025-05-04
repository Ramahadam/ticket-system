import { supabase } from './supabase';

export async function login(loginDetails) {
  const { data, error } = await supabase.auth.signInWithPassword(loginDetails);

  if (error) throw new Error('Wrong username or password');

  console.log(data);
}

// get current logged in user details this is required for the protected route

export async function getCurrentUser() {
  // Check if there is active session auth.getSession()
  // auth.getSession will get active session from the local sotrage.

  const { data: session } = await supabase.auth.getSession();
  //If there is no session return null
  if (!session.session) return null;

  //Get the JSON object for the logged in user.
  const { data, error } = await supabase.auth.getUser();
  if (error) throw new Error(error.message);

  return data?.user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}

export async function createUserApi(user) {
  const { data: authUser, error } = await supabase.auth.admin.createUser(user);

  if (error) throw new Error(`Oops! couldn\t create new user ${error.message}`);

  return authUser;
}

export async function createUserProfile(userProfile) {
  const { data, error } = await supabase.from('profiles').insert([userProfile]);

  if (error) throw new Error('Oops! couldn\t create the user profile');

  return data;
}
