import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  async function getProducts() {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/products");
      const { products } = await response.json();
      // podemos usar o código abaixo também
      // const products.data = await response.json();

      setProducts(products);

      console.log(products);
    } catch (erro) {
      console.log("Erro ao buscar dados");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <h1>Produtos</h1>
      {loading == true ? "Carregando..." : null}

      {loading == false && products.length < 1
        ? "Nenhum produto foi encontrado"
        : null}

      <ul>
        {products.map((product) => (
          <li
            key={product.id}
            style={{ border: "1px solid red", marginBottom: 20 }}
          >
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <img
              src={product.thumbnail}
              width={200}
              height={100}
              alt=""
              className="src"
            />
          </li>
        ))}
      </ul>
      {/* <p>{JSON.stringify(products)}</p> */}
    </div>
  );
}

export default App;
