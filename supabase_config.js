import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

export const SUPABASE_URL = 'https://hasprqcleqmievotmeik.supabase.co';
export const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhhc3BycWNsZXFtaWV2b3RtZWlrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIyODg5MzgsImV4cCI6MjA5Nzg2NDkzOH0.LEaTyBbtcN9l371fOU3SpSbkx3RfgP2q0z2__tyf7yg';

export function createSupabaseClient() {
  return createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}
