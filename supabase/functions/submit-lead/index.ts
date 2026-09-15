import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';
import { z } from 'npm:zod@3.25.76';

const SPREADSHEET_ID = '1KsBUJ31hwgFbHp5X4PBeo8jWUiiBieHh2uuVmQyDQZc';
const GATEWAY_URL = 'https://connector-gateway.lovable.dev/google_sheets/v4';

const BodySchema = z.object({
  nome: z.string().trim().min(2).max(200),
  email: z.string().trim().email().max(255),
  whatsapp: z.string().trim().min(8).max(50),
  cidadeEstado: z.string().trim().min(2).max(150),
  cargo: z.string().trim().min(2).max(150),
  empresaSegmento: z.string().trim().min(2).max(200),
  situacoes: z.array(z.string().trim().min(1).max(100)).min(1).max(9),
  duracao: z.string().trim().min(1).max(100),
  impacto: z.coerce.number().int().min(0).max(10),
  objetivo: z.string().trim().min(10).max(1500),
});

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });
  if (req.method !== 'POST') return new Response(JSON.stringify({ error: 'Método não permitido' }), { status: 405, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });

  try {
    const parsed = BodySchema.safeParse(await req.json());
    if (!parsed.success) return new Response(JSON.stringify({ error: parsed.error.flatten().fieldErrors }), { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });

    const lovableApiKey = Deno.env.get('LOVABLE_API_KEY');
    const googleSheetsApiKey = Deno.env.get('GOOGLE_SHEETS_API_KEY');
    if (!lovableApiKey || !googleSheetsApiKey) return new Response(JSON.stringify({ error: 'Configuração de envio indisponível' }), { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });

    const dataBR = new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });
    const data = parsed.data;
    const row = [dataBR, data.nome, data.email, data.whatsapp, data.cidadeEstado, data.cargo, data.empresaSegmento, data.situacoes.join(', '), data.duracao, data.impacto, data.objetivo, 'Landing PresenteMente'];
    const url = `${GATEWAY_URL}/spreadsheets/${SPREADSHEET_ID}/values/Página1!A:L:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`;
    const response = await fetch(url, { method: 'POST', headers: { Authorization: `Bearer ${lovableApiKey}`, 'X-Connection-Api-Key': googleSheetsApiKey, 'Content-Type': 'application/json' }, body: JSON.stringify({ values: [row] }) });

    if (!response.ok) {
      const details = await response.text();
      console.error(`Sheets append failed [${response.status}]: ${details}`);
      return new Response(JSON.stringify({ error: 'Falha ao registrar solicitação', status: response.status, details }), { status: response.status, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
    }

    return new Response(JSON.stringify({ ok: true }), { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
  } catch (error) {
    console.error('submit-lead error:', error);
    return new Response(JSON.stringify({ error: 'Não foi possível processar a solicitação' }), { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
  }
});