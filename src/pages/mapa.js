import handleSubmitForms from "@/config/supabase";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Map = dynamic(() => import("../../components/Map"), {
  ssr: false
});

export default function Mapa() {
  const [avaliacao, setAvaliacao] = useState(null);
  const [descricao, setDescricao] = useState(null);
  const [horario, setHorario] = useState("");
  const [localId, setLocalId] = useState(null);
  

  const center = { lat: -20.273712, lng: -40.304307 };

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
    
  handleSubmitForms(dados);
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
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <div className="w-full h-3/4 rounded-lg shadow-md">
        <Map 
          center={center} 
          markers={markers} 
          className="w-full h-full " 
          localId={localId}
          setLocalId={setLocalId}
        />
      </div>
      
      
      <div className="flex-1 w-full max-w-md  my-10 shadow-2xl p-3 shadow-slate-400	items-center">
          <div className="flex mb-2 content-around ">
            <h1>Avaliação</h1>
            {[1, 2, 3, 4, 5].map((value) => (
              <div key={value} className="mr-2">
                <input
                  type="checkbox"
                  name={`avaliacao${value}`}
                  value={value}
                  onChange={handleChange}
                  checked={avaliacao == value}
                  style={{
                    minWidth: '17px',
                    minHeight: '17px',
                    margin: '0 10px'
                }}
                />
                <label>{value}</label>
              </div>
            ))}
          </div>
        <div>
          <input 
            type="text" 
            placeholder="Descrição" 
            className="block w-full m-1 p-2 border border-gray-300 rounded-md" 
            onChange={(text) => setDescricao(text.target.value)}
          />
        </div>
        <div>
          <input 
            type="text" 
            placeholder="Horário" 
            className="block w-full m-1 p-2 border border-gray-300 rounded-md"
            onChange={(text) => setHorario(text.target.value)}
            />
        </div>
        <div>
          <button 
            onClick={() => handleSubmit()}
            className="bg-blue-500 m-1 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue flex-grow w-full">
              Enviar
          </button>
        </div>
      </div>
      
    </div>
  );
}
