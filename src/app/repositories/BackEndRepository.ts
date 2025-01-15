import ApiRepository from "./ApiRepository";

class BackEndRepository {
  private baseUrl: ApiRepository;

  constructor() {
    this.baseUrl = new ApiRepository(
      process.env.BACKEND_URL ?? "http://localhost:3001"
    );
  }

  getCategories() {
    const url = `/categories`;

    return this.baseUrl.get(url);
  }
}

const repoGetCategories = () => {
  return new BackEndRepository().getCategories();
};

export { repoGetCategories };
