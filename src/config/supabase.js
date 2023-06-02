import { createClient } from '@supabase/supabase-js';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);


async function handleSubmitForms({avaliacao, localId, descricao, horario}){
  
  if(avaliacao == 0 || localId == 0){
    return "Preencha todos os campos"
  }

  const { error } = await supabase
  .from('IOT_UFES')
  .insert({
    avaliacao,
    localid:localId,
    descricao,
    horario: horario.toString().replace(/(\d{2})(\d{2})/, "$1:$2h")
  })

  if (error) {
    alert(error.message)
    return "Erro ao inserir dados"
  }
  else{
    return "Dados inseridos com sucesso"
  }
}

export default handleSubmitForms;


