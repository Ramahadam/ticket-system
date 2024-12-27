import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = 'https://ljwjpevbbljiavjherqp.supabase.co';
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxqd2pwZXZiYmxqaWF2amhlcnFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA3MTkxOTcsImV4cCI6MjAzNjI5NTE5N30.Vffu55LsP4ClSsq2cBk-EMtoCH6tij_51CDr9SlPOWI`;

export const supabase = createClient(supabaseUrl, supabaseKey);
