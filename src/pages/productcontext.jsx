/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [womensProducts, setWomensProducts] = useState([]);
  const [perfumeProducts, setPerfumeProducts] = useState([]);
  const [hotOffers, setHotOffers] = useState([]);

  // Load products from localStorage when the app starts
  useEffect(() => {
    const storedWomens = JSON.parse(localStorage.getItem("womensProducts")) || [];
    const storedPerfumes = JSON.parse(localStorage.getItem("perfumeProducts")) || [];
    const storedHotOffers = JSON.parse(localStorage.getItem("hotOffers")) || [];

    setWomensProducts(storedWomens);
    setPerfumeProducts(storedPerfumes);
    setHotOffers(storedHotOffers);
  }, []);

  // Function to add products and store them in localStorage
  const addProduct = (product) => {
    if (product.category === "womens") {
      const updatedProducts = [...womensProducts, { ...product, id: Date.now() }];
      setWomensProducts(updatedProducts);
      localStorage.setItem("womensProducts", JSON.stringify(updatedProducts));
    } else if (product.category === "perfumes") {
      const updatedProducts = [...perfumeProducts, { ...product, id: Date.now() }];
      setPerfumeProducts(updatedProducts);
      localStorage.setItem("perfumeProducts", JSON.stringify(updatedProducts));
    } else if (product.category === "hot-offers") {
      const updatedProducts = [...hotOffers, { ...product, id: Date.now() }];
      setHotOffers(updatedProducts);
      localStorage.setItem("hotOffers", JSON.stringify(updatedProducts));
    }
  };

  return (
    <ProductContext.Provider value={{ womensProducts, perfumeProducts, hotOffers, addProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
