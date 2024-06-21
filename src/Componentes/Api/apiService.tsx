interface ApiResponse {
  products: Product[];
}

interface Product {
  id: number;
  name: string;
  brand: string;
  description: string;
  price: number;
  count: number;
  photo: string;
  createdAt: string;
  updatedAt: string;
}
const API_URL =
  "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products";

export async function fetchData(
  page: number,
  rows: number,
  sortBy: string,
  orderBy: string
): Promise<ApiResponse> {
  const url = `${API_URL}?page=${page}&rows=${rows}&sortBy=${sortBy}&orderBy=${orderBy}`;

  try {
    const response = await fetch(url, {
      headers: { Accept: "application/json" },
    });
    if (!response.ok) {
      throw new Error("Erro ao buscar dados da API");
    }

    return response.json();
  } catch (error) {
    console.error("erro ao buscar dados:", error);
    throw error;
  }
}
