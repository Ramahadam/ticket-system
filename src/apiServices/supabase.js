import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
// const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabaseServiceRoleKey = import.meta.env.VITE_SUPABASE_SERVICE_ROLE_KEY;

// export const supabase = createClient(supabaseUrl, supabaseKey);
// I was not able to create a user error was  403 Forbidden error indicates that your request to the Supabase Admin API is being blocked due to insufficient permissions
export const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);
