import Head from "next/head";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Dashboard Acadêmico</title>
      </Head>
      <header className="bg-blue-600 text-white p-4 text-center text-xl font-semibold">
        Dashboard Acadêmico
      </header>
      <main className="p-6">
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-xl font-bold">Bem-vindo ao painel acadêmico!</h2>
          <p className="text-gray-600">Aqui você acompanha suas notas e desempenho.</p>
        </div>
      </main>
    </div>
  );
}
