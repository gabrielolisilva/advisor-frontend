const Home = () => {
  return (
    <div>
      <header className="flex justify-between items-center w-full p-4">
        <div className="text-2xl font-bold text-green-600">Trippadvisor</div>
        <nav className="flex space-x-4">
          <a href="#" className="text-black">
            Descobrir
          </a>
          <a href="#" className="text-black">
            Viagens
          </a>
          <a href="#" className="text-black">
            Avaliar
          </a>
          <a href="#" className="text-black">
            Mais
          </a>
        </nav>
        <div className="flex items-center space-x-2">
          <span className="text-black">BRL</span>
          <button className="bg-black text-white px-4 py-2 rounded-3xl text-sm">
            Fazer login
          </button>
        </div>
      </header>
      <main className="flex flex-col items-center mt-14">
        <h1 className="text-4xl font-bold mb-4">Aonde você quer ir?</h1>
        <div className="flex space-x-4 mb-8">
          <button className="flex items-center gap-2">
            <p className="text-black">Pesquisar tudo</p>
          </button>
          <button className="flex flex-col items-center">
            <span className="text-black">Hotéis</span>
          </button>
          <button className="flex flex-col items-center">
            <span className="text-black">O que fazer</span>
          </button>
          <button className="flex flex-col items-center">
            <span className="text-black">Restaurantes</span>
          </button>
          <button className="flex flex-col items-center">
            <span className="text-black">Voos</span>
          </button>
        </div>
        <div className="flex items-center border rounded-full px-4 py-2 shadow-md w-3/5">
          <input
            type="text"
            placeholder="Lugares para ir, o que fazer, hotéis..."
            className="flex-grow outline-none"
          />
          <button className="bg-green-500 text-white px-4 py-2 rounded-full">
            Buscar
          </button>
        </div>
      </main>
    </div>
  );
};

export default Home;
