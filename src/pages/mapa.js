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
  const [avaliacao, setAvaliacao] = useState(0);
  const [descricao, setDescricao] = useState("");
  const [horario, setHorario] = useState("");
  const [localId, setLocalId] = useState(0);
  const [nameTemp, setNameTemp] = useState("");
  const center = { lat: -20.273017,lng: -40.305748 };

  useEffect(() => {
    function loadHour(){
      const date = new Date();
      const hour = date.getHours();
      const minute = date.getMinutes();

      if(hour < 10){
        if(minute < 10){
          setHorario(`0${hour}:0${minute}h`);
        }
        else{
          setHorario(`0${hour}:${minute}h`);
        }
      }
      else{
        if(minute < 10){
          setHorario(`${hour}:0${minute}h`);
        }
        else{
          setHorario(`${hour}:${minute}h`);
        }
      }
    }
    loadHour();
  }, []);


  useEffect(() => {
    function loadName(){
      let local = markers.filter((marker) => marker.id == localId);
      
      if(local.length > 0){
        setNameTemp(local[0].name);
      }
    }
    loadName();
  }, [localId]);


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

    cleanInputs();
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
}

  function cleanInputs(){
    setAvaliacao(0);
    setDescricao("");
    setHorario("");
    setLocalId(0);
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
    {
      id: 4,
      lat: -20.272961,
      lng: -40.304597,
      name: "CT 4 - Administração do CT",
      description: "Universidade Federal do Espírito Santo",
    },
    {
      id: 5,
      lat: -20.272307,
      lng: -40.305426,
      name: "CT 5 - Instituto de Tecnologia da Ufes - ITUFES",
      description: "Universidade Federal do Espírito Santo",
    },
    {
      id: 6,
      lat: -20.272423,
      lng: -40.306301,
      name: "CT 6 - Programas de Pós-graduação do CT",
      description: "Universidade Federal do Espírito Santo",
    },
    {
      id: 7,
      lat: -20.273371,
      lng: -40.305914,
      name: "CT 7 - Informática",
      description: "Universidade Federal do Espírito Santo",
    },
    {
      id: 8,
      lat: -20.271811,
      lng: -40.305871,
      name: "CT 8 - Engenharia Ambiental",
      description: "Universidade Federal do Espírito Santo",
    },
    {
      id: 9,
      lat: -20.273608,
      lng: -40.305874,
      name: "CT 9 - Informática",
      description: "Universidade Federal do Espírito Santo",
    },
    {
      id: 10,
      lat: -20.273776,
      lng: -40.305735,
      name: "CT 10 - Engenharia de Produção",
      description: "Universidade Federal do Espírito Santo",
    },
    {
      id: 11,
      lat: -20.272951,
      lng: -40.30655,
      name: "CT 11 - Engenharia Elétrica",
      description: "Universidade Federal do Espírito Santo",
    },
    {
      id: 12,
      lat: -20.273927,
      lng: -40.305372,
      name: "CT 12 - Salas de Aula",
      description: "Universidade Federal do Espírito Santo",
    },
    {
      id: 13,
      lat: -20.273454,
      lng: -40.306228,
      name: "CT 13 - Informática",
      description: "Universidade Federal do Espírito Santo",
    },
    {
      id: 14,
      lat: -20.273072,
      lng: -40.303554,
      name: "Centro de Línguas",
      description: "Universidade Federal do Espírito Santo",
    },
    {
      id: 15,
      lat: -20.273313,
      lng: -40.304257,
      name: "Biblioteca setorial do CT",
      description: "Universidade Federal do Espírito Santo",
    },
    {
      id: 16,
      lat: -20.276858,
      lng: -40.304501,
      name: "Biblioteca Central",
      description: "Universidade Federal do Espírito Santo",
    },
    {
      id: 17,
      lat: -20.277611,
      lng: -40.307094,
      name: "Planetário Vitória",
      description: "Universidade Federal do Espírito Santo",
    },
    {
      id: 18,
      lat: -20.276486,
      lng: -40.302886,
      name: "Administração Central",
      description: "Universidade Federal do Espírito Santo",
    },
    {
      id: 19,
      lat: -20.277548,
      lng: -40.302028,
      name: "Teatro Universitário",
      description: "Universidade Federal do Espírito Santo",
    },
    {
      id: 20,
      lat: -20.277231,
      lng: -40.302087,
      name: "Prograd",
      description: "Universidade Federal do Espírito Santo",
    },
    {
      id: 21,
      lat: -20.277799,
      lng: -40.302376,
      name: "Cinemetropolis",
      description: "Universidade Federal do Espírito Santo",
    },
    {
      id: 22,
      lat: -20.277983,
      lng: -40.304112,
      name: "Restaurante Universitário",
      description: "Universidade Federal do Espírito Santo",
    },
    {
      id: 23,
      lat: -20.2756,
      lng: -40.304112,
      name: "IC 1",
      description: "Universidade Federal do Espírito Santo",
    },
    {
      id: 24,
      lat: -20.275248,
      lng: -40.304026,
      name: "IC 2",
      description: "Universidade Federal do Espírito Santo",
    },
    {
      id: 25,
      lat: -20.274873,
      lng: -40.304364,
      name: "IC 3",
      description: "Universidade Federal do Espírito Santo",
    },
    {
      id: 26,
      lat: -20.274456,
      lng: -40.3046,
      name: "IC 4",
      description: "Universidade Federal do Espírito Santo",
    },
    {
      id: 27,
      lat: -20.276328,
      lng: -40.305936,
      name: "Cantina CCJE",
      description: "Universidade Federal do Espírito Santo",
    },
    {
      id: 28,
      lat: -20.276043,
      lng: -40.305075,
      name: "ED 1",
      description: "Universidade Federal do Espírito Santo",
    },
    {
      id: 29,
      lat: -20.275799,
      lng: -40.305212,
      name: "ED 2",
      description: "Universidade Federal do Espírito Santo",
    },
    {
      id: 30,
      lat: -20.276826,
      lng: -40.306625,
      name: "ED 3",
      description: "Universidade Federal do Espírito Santo",
    },
    {
      id: 31,
      lat: -20.27705,
      lng:  -40.306459,
      name: "ED 4",
      description: "Universidade Federal do Espírito Santo",
    },
    {
      id: 32,
      lat: -20.276841,
      lng: -40.305008,
      name: "ED 5",
      description: "Universidade Federal do Espírito Santo",
    },
    {
      id: 33,
      lat: -20.275668,
      lng: -40.30537,
      name: "ED 6",
      description: "Universidade Federal do Espírito Santo",
    },
    {
      id: 34,
      lat: -20.276652,
      lng: -40.306794,
      name: "ED 7",
      description: "Universidade Federal do Espírito Santo",
    },
    {
      id: 35,
      lat: -20.279286,
      lng: -40.303913,
      name: "Cemuni 1",
      description: "Universidade Federal do Espírito Santo",
    },
    {
      id: 36,
      lat: -20.27985,
      lng: -40.303342,
      name: "Cemuni 2",
      description: "Universidade Federal do Espírito Santo",
    },
    {
      id: 37,
      lat: -20.278869,
      lng: -40.303237,
      name: "Cemuni 3",
      description: "Universidade Federal do Espírito Santo",
    },
    {
      id: 38,
      lat: -20.279422,
      lng: -40.302663,
      name: "Cemuni 4",
      description: "Universidade Federal do Espírito Santo",
    },
    {
      id: 39,
      lat: -20.278441,
      lng: -40.302559,
      name: "Cemuni 5",
      description: "Universidade Federal do Espírito Santo",
    },
    {
      id: 40,
      lat: -20.276652,
      lng: -40.302902,
      name: "Cemuni 6",
      description: "Universidade Federal do Espírito Santo",
    },
    {
      id: 41,
      lat: -20.277754,
      lng: -40.303795,
      name: "Centro Educação Física",
      description: "Universidade Federal do Espírito Santo",
    },
    {
      id: 42,
      lat: -20.271764,
      lng: -40.305429,
      name: "DADF",
      description: "Universidade Federal do Espírito Santo",
    },
  ];



  
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#1c1c1c]">
      <div className="w-full h-3/4 rounded-lg shadow-md">
        <Map 
          center={center} 
          markers={markers} 
          className="w-full h-full" 
          localId={localId}
          setLocalId={setLocalId}
        />
      </div>
      
      
      <div className="w-full max-w-md my-4 p-4 mx-2 items-center bg-[#2b825b] rounded-lg md:h-auto">
          
          {
            localId !== 0 ? (
              <>
                {localId !== 0 && (
                  <h1 className="text text-white text-center">{nameTemp}</h1>
                )}
                <div className="flex w-full justify-between p-3">
                  <h1 className="text text-2xl">Qual a nota?</h1>
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
                placeholder="Descrição (ex. número da sala, qualidade)" 
                className="block text-black w-full m-1 mb-1.5 p-2 outline-0 rounded-md" 
                onChange={(text) => setDescricao(text.target.value)}
              />
            </div>
            <div>
              <input 
                type="text" 
                maxLength={4}
                value={horario.toString().replace(/(\d{2})(\d{2})/, "$1:$2h")}
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
              </>
              ) : (
                <div className="flex flex-col items-center justify-center">
                  <h1 className="text text-2xl">Selecione um local no Mapa</h1>
                </div>
            )
          }

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
