import { createClient } from '@supabase/supabase-js';


const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);


async function handleSubmitForms({avaliacao, localId, descricao, horario}){
  const { error } = await supabase
  .from('testes')
  .insert({
    avaliacao,
    localId,
    descricao,
    horario })

  if (error) {
    alert(error.message)
    return
  }
  else{
    alert("Dados inseridos com sucesso!")
  }
}

export default handleSubmitForms;


