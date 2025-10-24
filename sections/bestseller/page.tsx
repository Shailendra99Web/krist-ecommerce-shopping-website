import ProductCard from "@/components/cards/page";

function Bestseller() {
  const Products = [
    {
      id: 1,
      title: "Roadstar",
      description: "Printed Cotton T-Shirt",
      price: 38.0,
      realPrice: 40.0,
      imageUrl: "/images/tshirt.jpg"
    },
    {
      id: 2,
      title: "Allen Solly ",
      description: "Womem Textured Handheld Bag",
      price: 80.0,
      realPrice: 100.0,
      imageUrl: "/images/bag.jpg"
    },
    {
      id: 3,
      title: "Louis Philippe Sport",
      description: "Polo Collar T-Shirt",
      price: 50.0,
      realPrice: 55.0,
      imageUrl: "/images/fulltshirt.jpg"
    },
    {
      id: 4,
      title: "Adidas",
      description: "Men adi-dash Running Shoes",
      price: 60.0,
      realPrice: 75.0,
      imageUrl: "/images/adidas.jpg"
    },
    {
      id: 5,
      title: "Trendyol",
      description: "Floral Embroidered Maxi Dress",
      price: 35.0,
      realPrice: 45.0,
      imageUrl: "/images/maxi.jpg"
    },
    {
      id: 6,
      title: "YK Disney",
      description: "Girls Pink Moana Printed Dress",
      price: 80.0,
      realPrice: 100.0,
      imageUrl: "/images/girl_dress.jpg"
    },
    {
      id: 7,
      title: "US Polo",
      description: "Tailored Cotton Casual Shirt",
      price: 40.0,
      realPrice: 50.0,
      imageUrl: "/images/shirt.jpg"
    },
    {
      id: 8,
      title: "Zyla",
      description: "Women Sandals",
      price: 35.0,
      realPrice: 40.0,
      imageUrl: "/images/sandals.jpg"
    }
  ];
  return (
    <section className="flex flex-wrap items-center justify-between">
      <div className="title text-4xl mb-13 mx-auto">Our Bestsellers</div>
      <div className="w-full flex flex-wrap justify-between items-center">
        {/* Items */}
        {Products.map((product, index) => (
          <ProductCard key={index} product={product}/>

          // <div
          //   key={product.id}
          //   className="item mb-6 inline-block h-110 w-[262px] rounded-sm bg-amber-200"
          // >
          //   <img
          //     src={product.imageUrl}
          //     alt={product.title}
          //     className="item-image h-82 w-full bg-gray-50"
          //   />
          //   <div className="item-info p-4">
          //     <div className="item-title text-lg font-medium">
          //       {product.title}
          //     </div>
          //     <div className="item-description text-gray-700">
          //       {product.description}
          //     </div>
          //     <div className="item-price mt-2 flex gap-2">
          //       <div className="current-price font-bold text-black">
          //         ${product.price.toFixed(2)}
          //       </div>
          //       <div className="real-price text-gray-500 line-through">
          //         ${product.realPrice.toFixed(2)}
          //       </div>
          //     </div>
          //   </div>
          // </div>
        ))}
      </div>
    </section>
  );
}

export default Bestseller;
