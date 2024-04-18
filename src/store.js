import { createClient } from '@supabase/supabase-js'
import { reactive } from 'vue'

const supabaseUrl = 'https://psksmcprznjdhukupkhr.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBza3NtY3Byem5qZGh1a3Vwa2hyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMzNTE4MjcsImV4cCI6MjAyODkyNzgyN30.WPxof7_cLR8gceZVgtfJxTSag0ZNPKv_11LqIAF11jg'

export const store = reactive({ supabase:createClient(supabaseUrl, supabaseKey) })