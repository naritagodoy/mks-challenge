 import React, { ReactNode, createContext, useState } from "react";

// interface carrinhoContextType {
//   carrinho: CarrinhoItem[];
//   addCarrinho: (product: product) => void;
//   removeCarrinho: (id: number) => void;
// }

// export carrinhoContext = createContext<carrinhoContextType | undefined>(undefined)

// export const carrinhoProvider: React.FC<{ Children: ReactNode }> = ({ Children }) => {
//   [carrinho, setCarrinho] = useState<CarrinhoItem>([]);

//   const adicionarItem =
    
//     (product: Product) => {
//     setCarrinho(prevCarrinho => {
//       const ItemDoCarrinho = prevCarrinho.find(item => item.id === product.id);

//       if (ItemDoCarrinho) {
//         return prevCarrinho.map(item => item.id === product.id ?
//           { ...item, quantify: item.quantify + 1 }
//           : item
//         );
//       }

//       return [...prevCarrinho, { ...product, quantify: 1 }];
      

//     }

//     )
//   }

// }