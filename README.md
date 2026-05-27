# My_program
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>

<script>
const supabaseUrl = 'https://oojidxnmreehgkyawaaa.supabase.co'

const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9vamlkeG5tcmVlaGdreWF3YWFhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MzgzNDEwMSwiZXhwIjoyMDg5NDEwMTAxfQ.p8DvK3XQlYuGq7Ht32rRL9LiyL102Eh0ryKcEvdIPU0'

const supabase = window.supabase.createClient(
    supabaseUrl,
    supabaseKey
)

console.log("Supabase Connected!")
</script>