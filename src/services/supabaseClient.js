// src/services/supabaseClient.js
import { createClient } from '@supabase/supabase-js'

// Vite exposes variables that start with VITE_ through import.meta.env
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY

// Fail early with a clear message if the .env file is missing or incomplete
if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables. Check your .env file.')
}

// Single shared client: the rest of the app imports this object
export const supabase = createClient(supabaseUrl, supabaseKey)