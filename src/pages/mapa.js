const Map = dynamic(() => import("../../components/Map"), {
  ssr: false
});
import handleSubmitForms from "@/config/supabase";
import { Rating } from "@mui/material";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

//animcao de toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function Mapa() {
  const [avaliacao, setAvaliacao] = useState(null);
  const [descricao, setDescricao] = useState(null);
  const [horario, setHorario] = useState("");
  const [localId, setLocalId] = useState(null);
  

  const center = { lat: -20.273017,lng: -40.305748 };

  function handleChange(event) {
    setAvaliacao(event.target.value);
  }

  async function handleSubmit(){
    const dados = {
      avaliacao,
      localId,
      descricao,
      horario
    }
  const result = await handleSubmitForms(dados);

  if(result == "Dados inseridos com sucesso"){
    toast.success(result, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      theme: "dark",
      });
  }
  else{
    toast.error(result, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      });
  }
  cleanInputs();
}

  function cleanInputs(){
    setAvaliacao("");
    setDescricao("");
    setHorario("");
  }

  const markers = [
    {
      id: 1,
      lat: -20.273017,
      lng: -40.305748,
      name: "CT 1 - Engenharia Civil",
      description: "Universidade Federal do Espírito Santo",
    },
    {
      id: 2,
      lat: -20.272619,
      lng: -40.306078,
      name: "CT 2 - Engenharia Elétrica",
      description: "Universidade Federal do Espírito Santo",
    },
    {
      id: 3,
      lat: -20.273344,
      lng: -40.305351,
      name: "CT 3 - Engenharia Mecânica",
      description: "Universidade Federal do Espírito Santo",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#1c1c1c]">
      <div className="w-full h-3/4 rounded-lg shadow-md">
        <Map 
          center={center} 
          markers={markers} 
          className="w-full h-full " 
          localId={localId}
          setLocalId={setLocalId}
        />
      </div>
      
      
      <div className="flex-1 w-full max-w-md my-10 p-3 m-3 items-center bg-[#2b825b] rounded-lg">
          <div className="flex w-full justify-between p-3">
            <h1 className="text text-2xl">Qual a nota ?</h1>
            <Rating
              name="simple-controlled"
              value={avaliacao}
              onChange={(event, newValue) => {
                setAvaliacao(newValue);
              }}
              size="large"
            />
          </div>
        <div>
          <input 
            type="text" 
            value={descricao}
            placeholder="Descrição" 
            className="block text-black w-full m-1 mb-1.5 p-2 outline-0 rounded-md" 
            onChange={(text) => setDescricao(text.target.value)}
          />
        </div>
        <div>
          <input 
            type="text" 
            value={horario}
            placeholder="Horário" 
            className="block text-black w-full m-1  p-2 outline-0 rounded-md"
            onChange={(text) => setHorario(text.target.value)}
            />
        </div>
        <div>
          <button 
            onClick={() => handleSubmit()}
            className="bg-[#1c1c1c] m-1 text-white py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue flex-grow w-full">
              Enviar
          </button>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />


    </div>
  );
}
