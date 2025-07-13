import { create_file_name_for_upload } from '../utils/helper';
import { supabase, supabaseUrl } from './supabase';

async function uploadFile(bucket, filePath, file) {
  const { error: storageError } = await supabase.storage
    .from(bucket)
    .upload(filePath, file);

  return { storageError };
}

//////////// CREATE UESR IN AUTHENTICATION TABLE ///////

export async function createUserApi(user) {
  console.log(user);
  const { data: authUser, error } = await supabase.auth.admin.createUser(user);

  if (error) throw new Error(`Oops! couldn\t create new user ${error.message}`);

  return authUser;
}

////////////// CREATE USER PROFILE.  ////////////////ß

export async function createUserProfile(userProfile) {
  const { fileURL, filePath } = create_file_name_for_upload(
    userProfile,
    supabaseUrl
  );

  let query = supabase.from('profiles');

  if (!userProfile.file) {
    query = await query.insert([userProfile]).select('id');
  }

  if (userProfile.file) {
    // create the user along with URL for the photo
    query = await query.insert([{ ...userProfile, file: fileURL }]);

    // 2. Upload the photo to the files sotrage
    const { storageError } = await uploadFile(
      'files',
      filePath,
      userProfile.file
    );

    // 3. Delete the user if there was an error uploading the file
    if (storageError) {
      await deleteUser(query.data.id);
      await query.delete().eq('id', query.data.id);
      throw new Error(
        'File could not be uploaded and user could not be created'
      );
    }
  }

  const { data, error } = query;

  if (error) throw new Error('Could not create incident due to an error');

  return data;
}

// FETCH ALL USERS FROM PROFILE TABLE
export async function getUsers() {
  const { data: users, error } = await supabase.from('profiles').select('*');

  if (error) {
    console.error(error.message);
    throw new Error(`Couldn't load users data ${error.message}`);
  }

  return users;
}

// DELETE USER FROM PROFILES TABLE

export async function deleteUser(id) {
  const { errorDeleteUser } = await supabase.auth.admin.deleteUser(id);
  const { errorDeleteProfile } = await supabase
    .from('profiles')
    .delete()
    .eq('id', id);

  const error = errorDeleteProfile || errorDeleteUser;

  if (error) {
    console.error(error.message);
    throw new Error(`Couldn't delete user  ${error.message}`);
  }

  return null;
}

// Update user
export async function updateUser(updatedProfile, id) {
  // Update user profile in profile table
  const { data, error } = await supabase
    .from('profiles')
    .update({ ...updatedProfile })
    .eq('id', id)
    .select();

  if (error) {
    console.error(error.message);
    throw new Error(`Couldn't update the user Error ${error.message}`);
  }

  return data;
}

export async function resetUserPassword(id, newPassword) {
  const { error } = await supabase.auth.admin.updateUserById(id, {
    password: newPassword,
  });

  if (error) {
    console.error(error.message);
    throw new Error(`Couldn't reset user password ${error.message}`);
  }

  return null;
}

// export async function resetUserPassword(email, newPassword) {
//   const { data, error } = await supabase.auth.admin.updateUserById(userId, {
//     password: newPassword,
//   });
// }

// DEACTIVATE USER
export async function deactivateUser(id) {}
/***
 * 
 * 
 * I am creating admin dashbaord for creating/updating/deleting users should i do this on auth.users or on the profile table?
ChatGPT said:
ChatGPT
When creating an admin dashboard for managing users, the key question is whether the admin should interact with the auth.users table directly or the profiles table. Here's how you should approach this:

1. Direct Interaction with auth.users Table:
Pros:
The auth.users table contains core user authentication and system-related information (e.g., user credentials like email, password, etc.).
Admins can perform actions such as creating, updating, or deleting users' authentication details (like email and password).
Cons:
This table doesn't contain additional user-specific details like the user's full profile, which you might want to maintain separately.
2. Direct Interaction with profiles Table:
Pros:
The profiles table holds more detailed user-specific information (e.g., profile picture, bio, address, etc.) and is closely tied to the user’s broader profile.
You can manage the overall user experience, including their extra information, from a single table.
Cons:
The auth.users table, which handles core authentication data, might not get updated immediately or accurately if done only from the profiles table.
Best Approach:
Recommended Approach: Create an Admin Dashboard that interacts with BOTH:

auth.users: For managing authentication, email updates, and account security.
profiles: For managing additional user-specific data (like profile details).
This way, you have a clear separation:

The auth.users table is used to manage core account settings and authentication.
The profiles table is used for additional, detailed user information.
How to Structure Actions:
Create User: Insert a new user into auth.users, then immediately insert their profile into profiles.
Update User: Update auth.users and the corresponding profile in profiles (triggered by a BEFORE UPDATE or through admin actions).
Delete User: Delete the user from auth.users and their related profile in profiles.
Workflow Example:
Admin Panel should expose separate sections:
Authentication: For managing email, password, and login details (auth.users).
User Details: For managing additional information like name, address, profile picture, etc. (profiles).
This combined approach ensures both tables are kept in sync properly, while still enabling admins to manage the full user lifecycle.














 */
