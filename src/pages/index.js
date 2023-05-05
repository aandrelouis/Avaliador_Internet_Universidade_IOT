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
        O avaliaUfes é uma aplicação desenvolvida  para a UFES com o objetivo de avaliar a qualidade da conexão de internet disponível nas dependências da instituição. A ferramenta foi criada para garantir que estudantes, professores e funcionários possam relatar a qualidade da conexão.
        </p>
        <div className="mb-8">
          <h2 className="font-semibold">Instruções:</h2>
          <ul className="list-disc list-inside">
            <li>Passo 1: Faça isso e aquilo e aquilo</li>
            <li>Passo 2: Faça aquilo e depois marque isso</li>
            <li>Passo 3: Siga estas etapas e avalie o sistema</li>
          </ul>
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
