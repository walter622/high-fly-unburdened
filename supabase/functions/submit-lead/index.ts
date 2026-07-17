import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';

const SPREADSHEET_ID = '1KsBUJ31hwgFbHp5X4PBeo8jWUiiBieHh2uuVmQyDQZc';
const GATEWAY_URL = 'https://connector-gateway.lovable.dev/google_sheets/v4';

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const body = await req.json();
    const nome = String(body.nome ?? '').trim().slice(0, 200);
    const email = String(body.email ?? '').trim().slice(0, 255);
    const whatsapp = String(body.whatsapp ?? '').trim().slice(0, 50);
    const situacao = Array.isArray(body.situacoes)
      ? body.situacoes.join(', ').slice(0, 1000)
      : String(body.situacao ?? '').trim().slice(0, 1000);

    if (!nome || !email || !whatsapp || !situacao) {
      return new Response(
        JSON.stringify({ error: 'Nome, e-mail, WhatsApp e situação são obrigatórios' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
      );
    }

    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    const GOOGLE_SHEETS_API_KEY = Deno.env.get('GOOGLE_SHEETS_API_KEY');
    if (!LOVABLE_API_KEY || !GOOGLE_SHEETS_API_KEY) {
      return new Response(
        JSON.stringify({ error: 'Missing gateway credentials' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
      );
    }

    const dataBR = new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });
    const row = [dataBR, nome, email, whatsapp, situacao, 'Landing PresenteMente'];

    const url = `${GATEWAY_URL}/spreadsheets/${SPREADSHEET_ID}/values/Página1!A:F:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`;
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        'X-Connection-Api-Key': GOOGLE_SHEETS_API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ values: [row] }),
    });

    if (!res.ok) {
      const details = await res.text();
      console.error(`Sheets append failed [${res.status}]: ${details}`);
      return new Response(
        JSON.stringify({ error: 'Falha ao gravar na planilha', status: res.status, details }),
        { status: res.status, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
      );
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('submit-lead error:', err);
    return new Response(
      JSON.stringify({ error: (err as Error).message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
    );
  }
});
