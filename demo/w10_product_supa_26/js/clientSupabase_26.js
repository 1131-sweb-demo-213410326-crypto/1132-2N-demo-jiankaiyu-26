const SUPABASE_URL = 'https://olisoltnaeqafilzslxr.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9saXNvbHRuYWVxYWZpbHpzbHhyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYzNjMyMjcsImV4cCI6MjA2MTkzOTIyN30.jXvekMslIxSbisj-ejEQ07M7wmuQQl42nPUeV2usTmI';
export const _supabase = supabase.createClient(
    SUPABASE_URL, SUPABASE_ANON_KEY);