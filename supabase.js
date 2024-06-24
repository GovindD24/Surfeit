import { createClient } from "@supabase/supabase-js";
import "react-native-url-polyfill/auto";

const supabaseUrl = "https://dsszojokcqtgljjzwyqh.supabase.co";

const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRzc3pvam9rY3F0Z2xqanp3eXFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkyMjc2NDQsImV4cCI6MjAzNDgwMzY0NH0.X62Td9wxX41fNHbnu7LXs0c6YpuDk5Tzowz16Z2SUJM"


export const supabase = createClient(supabaseUrl,supabaseAnonKey)