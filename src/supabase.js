import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://haabfhwoqnnddbverzme.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhhYWJmaHdvcW5uZGRidmVyem1lIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQxNjQ4MjEsImV4cCI6MTk5OTc0MDgyMX0.eJSdLSYXSHdJ8FO2nDJj55EASeaLM7GTNA9xxag0c3Q";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;