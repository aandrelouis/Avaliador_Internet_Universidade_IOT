import Head from 'next/head';
import Link from 'next/link';
import Globe from '../../components/Globe';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1c1c1c] flex items-center justify-center">
      <Head>
        <title>AvaliaUfes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-[#2b825b] p-4 m-4 md:p-8 rounded-lg text-white text-center w-full max-w-lg md:h-auto ">
        <div className="w-full">
          <Globe
            className="absolute top-0 left-0 w-full h-full"
            width={300}
            height={190}
          />
        </div>
        <h1 className="text-2xl font-bold mb-4 my-3">AvaliaUFES</h1>
        <p className="mb-4 text-justify">
        Você está cansado da baixa qualidade da rede Wi-Fi Eduroam? Os estudantes Joana Venturin e André Louis Ribeiro estão trabalhando na disciplina de IoT (Internet das Coisas) e precisam da sua ajuda para avaliar a qualidade do Eduroam em diferentes áreas da Ufes!
        </p>
        <div className="mb-8">
          <h2 className="font-semibold">Instruções:</h2>
          <ul className="list-disc list-inside">
            <li>Passo 1: Escolha sua localização dentro da Ufes.</li>
            <li>Passo 2: Classifique a qualidade do sinal do Eduroam.</li>
            <li>Passo 3: Envie sua resposta! Se quiser, adicione um comentário.</li>
            <li>Atenção! É viável realizar avaliações múltiplas, inclusive do mesmo local.</li>
          </ul>
          <p className="mb-4 text-justify">
          Junte-se ao nosso grupo no <a href="https://chat.whatsapp.com/Ca9eUWwAIOFHhHu7VAxS1r">WhatsApp</a> para receber notificações e lembrar de fazer a avaliação durante esse período :D
        </p>
        </div>
            <div className="bg-[#1c1c1c] py-2 px-4 rounded">
              <Link href="/mapa">
                Avalie agora a conexão!
              </Link>
            </div>
      </div>
    </div>
  );
}
