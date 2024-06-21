import React, { useEffect, useState } from "react";
import { fetchData } from "../Api/apiService";
import {
  ContainerProducts,
  LinkComprar,
  ListProducts,
  ProductInfo,
  ProductStyle,
} from "../Pages/Styles/GlobalStyles";

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

const Produtos: React.FC = () => {
  const [data, setData] = useState<Product[]>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const LoadDados = async () => {
      try {
        const result = await fetchData(1, 8, "id", "ASC");
        setData(result.products);
      } catch (error: any) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("Erro desconhecido");
        }
      } finally {
        setLoading(false);
      }
    };

    LoadDados();
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }
  if (error) {
    return <div> Erro: {error} </div>;
  }

  if (!data) {
    return <div>Sem dados...</div>;
  }

  return (
    <div>
      <ContainerProducts>
        <ListProducts>
          {data.map((item) => (
            <ProductStyle key={item.id}>
              <img src={item.photo} alt={item.name} />
              <h2>
                <strong>{item.name}</strong>
              </h2>
              <ProductInfo>
                <p>{item.brand}</p>
                <p>{item.price}</p>
              </ProductInfo>

              <p>{item.description}</p>

              <LinkComprar>
                <a href="#">Comprar</a>
              </LinkComprar>
            </ProductStyle>
          ))}
        </ListProducts>
      </ContainerProducts>
    </div>
  );
};

export default Produtos;
