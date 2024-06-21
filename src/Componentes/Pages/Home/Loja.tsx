import React, { useState } from "react";
import { Banner } from "../Styles/GlobalStyles";
import Produtos from "../../Produtos/produtos";
import Footer from "../Footer/Footer";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

const LojaProducts: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  return (
    <div>
      <Banner>
        <h1>MKSsistemas</h1>
      </Banner>
      <Produtos/>
      <Footer />
    </div>
  );
};

export default LojaProducts;
