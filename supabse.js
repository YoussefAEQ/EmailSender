const { createClient } =require('@supabase/supabase-js');

const supabaseUrl = 'https://bxvwtucjmqnvmeyvctlp.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ4dnd0dWNqbXFudm1leXZjdGxwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTczOTkzNDcsImV4cCI6MjAxMjk3NTM0N30.udJzJXhsJL6XhWatzcX9P5ZX_atrTRzrTdvkbLy2aZY';
 
const supabase = createClient(supabaseUrl, supabaseKey);

module.exports=supabase;