import "./App.css";

function App() {
  const products = [
    {
      id: "P101",
      name: "Bilavita ocean perfume",
      price: 299,
      image: "https://m.media-amazon.com/images/I/71Rt86TIqhL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      id: "P102",
      name: "Sauvage Eau de Toilette perfume",
      price: 349,
      image: "https://cdn.shopify.com/s/files/1/0554/2998/8522/files/33_480x480.jpg?v=1672391447"
    },
    {
      id: "P103",
      name: "men's cotton shirt",
      price: 6077,
      image: "https://cdn.shopify.com/s/files/1/0427/9140/3673/files/6clothingstylesphoto3_600x600.png?v=1686577957"
    },
    {
      id: "P104",
      name: "Kerastase Genesis Bain Hydra-Fortifiant Shampoo, 250 ml",
      price: 399,
      image: "https://images-static.nykaa.com/media/catalog/product/2/0/20f29e3KERAS00000015_3.jpg?tr=w-500"
    },
    
  ];

  return (
    <div className="container">
      <h1 className="title">Product Listing 2500031407</h1>

      <div className="grid">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>ID: {product.id}</p>
            <p className="price">₹ {product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
