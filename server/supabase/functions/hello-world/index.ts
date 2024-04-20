// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

// Setup type definitions for built-in Supabase Runtime APIs
// import { createClient } from 'npm:@supabase/supabase-js@2'

// const supabaseUrl = 'https://psksmcprznjdhukupkhr.supabase.co'
// const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBza3NtY3Byem5qZGh1a3Vwa2hyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMzNTE4MjcsImV4cCI6MjAyODkyNzgyN30.WPxof7_cLR8gceZVgtfJxTSag0ZNPKv_11LqIAF11jg'

// let supabase = createClient(supabaseUrl, supabaseKey)

// import { SMTPClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts";
import { SmtpClient } from "https://deno.land/x/smtp/mod.ts";

const client = new SmtpClient();

const connectConfig = {
  hostname: "smtp.gmail.com",
  // port: 465,
  username: "hasanur23910@gmail.com",
  password: "8119114h",
};
await client.connectTLS(connectConfig);

// const client = await smpt.connect({
//   hostname: "smartoutfit.example.com",
//   port: 587,
//   username: "hasanur23910@gmail.com",
//   password: "8119114h",
// });
console.log("Hello from Functions!");

Deno.serve(async (req) => {
  try {
    const email = await req.json();
    await client.send(email || {
      from: "hasanur23910@gmail.com",
      to: "hasnain.rajshahi@gmail.com",
      subject: "Test Email",
      content: "This is a test email from Deno using denomailer."
    });
    
  } catch (error) {
    return new Response(
      JSON.stringify({data:"failed",error:error.message}),
      { headers: { "Content-Type": "application/json" } },
    );  
  }
  return new Response(
    JSON.stringify({data:"done"}),
    { headers: { "Content-Type": "application/json" } },
  );
});

/* To invoke locally:

  1. Run `supabase start` (see: https://supabase.com/docs/reference/cli/supabase-start)
  2. Make an HTTP request:

  curl -i --location --request POST 'http://127.0.0.1:54321/functions/v1/hello-world' \
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
    --header 'Content-Type: application/json' \
    --data '{"name":"Functions"}'

*/
