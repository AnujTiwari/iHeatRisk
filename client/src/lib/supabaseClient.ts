import { createClient } from "@supabase/supabase-js";

const supabaseUrl="https://ydpcnzxxjdmggegbbcyw.supabase.co";
const supabaseAnonKey="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlkcGNuenh4amRtZ2dlZ2JiY3l3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU0NzIzODYsImV4cCI6MjA2MTA0ODM4Nn0.gZXqJE9LfSZuVEoFLSPVtP5O7yQs409Eb5KB0U4N5ys";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      flowType: 'pkce', // This is crucial for password reset flows
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true
    }
  });
