# Setup Supabase Baru

1. Buat project baru di Supabase.
2. Jalankan file [supabase_users_auth.sql](supabase_users_auth.sql) di SQL Editor.
3. Salin URL project dan anon key baru ke file HTML yang memakai Supabase.
4. Jangan simpan service role key di README atau file publik.

Template konfigurasi:

```html
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
<script>
const supabaseUrl = 'https://YOUR-PROJECT.supabase.co'
const supabaseKey = 'YOUR-ANON-KEY'

const supabase = window.supabase.createClient(supabaseUrl, supabaseKey)
</script>
```