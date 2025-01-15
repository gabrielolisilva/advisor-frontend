"use client";

import { useEffect, useState } from "react";
import { repoGetCategories } from "./repositories/BackEndRepository";
import { ICategories } from "./interfaces/globals.interfaces";
import { respectiveCategoriesIcons } from "./globals/variables";
import { HomeIcon } from "@heroicons/react/24/solid";
import _ from "lodash";

const inputPlaceholder: { [key: string]: string } = {
  "Pesquisar tudo": "Lugares para ir, o que fazer, hotéis...",
  Hotéis: "Lugares para dormir...",
  "O que fazer": "O que fazer...",
  Restaurantes: "Restaurantes...",
  Voos: "Voos...",
};

const Home = () => {
  const [categories, setCategories] = useState<ICategories[]>([]);
  const [categorySelected, setCategorySelected] = useState<{
    category: ICategories;
    inputPlaceholder: string;
  }>({
    category: {} as ICategories,
    inputPlaceholder: "",
  });

  useEffect(() => {
    const getCategories = async () => {
      const categoriesResponse = await repoGetCategories();

      if (categoriesResponse.success) {
        const { data } = categoriesResponse;
        const categoriesSorted = _.orderBy(data, "name", "asc");

        setCategories(categoriesSorted);
        setCategorySelected({
          category: categoriesSorted[0],
          inputPlaceholder: inputPlaceholder[categoriesSorted[0].name],
        });
      }
    };

    getCategories();
  }, []);

  const handleSelectCategory = (category: ICategories) => {
    setCategorySelected({
      category,
      inputPlaceholder: inputPlaceholder[category.name],
    });
  };

  return (
    <div>
      <header className="flex justify-between items-center w-full p-4">
        <div className="text-2xl font-bold text-green-600">Trippadvisor</div>
        {/* <nav className="flex space-x-4">
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
        </nav> */}
        <div className="flex items-center space-x-2">
          <span className="text-black">BRL</span>
          <button className="bg-black text-white px-4 py-2 rounded-3xl text-sm">
            Fazer login
          </button>
        </div>
      </header>
      <main className="flex flex-col items-center mt-14">
        <h1 className="text-4xl font-bold mb-4 text-center">
          Aonde você quer ir?
        </h1>
        {categories.length > 0 && (
          <div className="w-[400px] max-sm:overflow-x-scroll md:w-full">
            <div className="flex justify-center items-center gap-4 w-fit px-5 md:w-full">
              {categories.map((category) => {
                const IconComponent =
                  respectiveCategoriesIcons[category.name] ?? HomeIcon;

                return (
                  <button
                    key={category.id}
                    className={`flex justify-center items-center gap-1 py-2 ${
                      categorySelected.category.id === category.id
                        ? "border-b-2 border-green-500"
                        : ""
                    }`}
                    onClick={() => handleSelectCategory(category)}
                  >
                    <IconComponent className="h-6" />
                    <p className="text-black whitespace-nowrap">
                      {category.name}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        )}
        <div className="flex flex-col border rounded-md px-4 py-2 shadow-md w-3/4 mt-5 md:flex-row md:items-center md:w-3/5 md:rounded-full">
          <input
            type="text"
            placeholder={categorySelected.inputPlaceholder}
            className="flex-grow outline-none"
          />
          <button className="bg-green-500 text-white px-4 py-2 rounded-full max-md:mt-5">
            Buscar
          </button>
        </div>
      </main>
    </div>
  );
};

export default Home;
