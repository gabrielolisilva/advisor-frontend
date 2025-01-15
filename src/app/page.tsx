"use client";

import { useEffect, useState } from "react";
import { repoGetCategories } from "./repositories/BackEndRepository";
import { ICategories } from "./interfaces/globals.interfaces";

const Home = () => {
  const [categories, setCategories] = useState<ICategories[]>([]);

  useEffect(() => {
    const getCategories = async () => {
      const categoriesResponse = await repoGetCategories();

      if (categoriesResponse.success) {
        const { data } = categoriesResponse;
        setCategories(data);
      }
    };

    getCategories();
  }, []);

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
        {categories.length > 0 && (
          <div className="flex justify-center items-center gap-4">
            {categories.map((category) => (
              <button key={category.id} className="flex flex-col items-center">
                <p className="text-black">{category.name}</p>
              </button>
            ))}
          </div>
        )}
        <div className="flex items-center border rounded-full px-4 py-2 shadow-md w-3/5 mt-5">
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
