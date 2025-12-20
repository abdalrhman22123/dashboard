
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://ytnepcqwcmamuhbwdfxl.supabase.co'
const supabaseKey = 'sb_publishable_nGDZc7iQXHyoxBNZY_ncsw_W4zbkwas'
export const supabase = createClient(supabaseUrl, supabaseKey)