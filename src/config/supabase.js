import { createClient } from '@supabase/supabase-js';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    return "Erro ao inserir dados"
  }
  else{
    return "Dados inseridos com sucesso"
  }
}

export default handleSubmitForms;


