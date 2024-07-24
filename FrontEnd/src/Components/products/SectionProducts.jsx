import React, { useState } from 'react';

export default function SectionProducts({ allProducts, setAllProducts, countProducts, setCountProducts, total, setTotal }) {
  const products = [
    {
      id: 1,
      name: 'High Wall',
      href: '#',
      imageSrc: '../../public/Bags/High-Wall.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: 210,
      color: 'Black and Orange',
      quantity: 1
    },
    {
      id: 2,
      name: 'Medium Stuff',
      href: '#',
      imageSrc: '../../public/Bags/Medium-Stuff.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: 220,
      color: 'Blue',
      quantity: 1
    },
    {
      id: 3,
      name: 'Normad Pouch',
      href: '#',
      imageSrc: '../../public/Bags/Normad-Pouch.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: 50,
      color: 'White and Black',
      quantity: 1
    },
    {
      id: 4,
      name: 'Zip High Wall',
      href: '#',
      imageSrc: '../../public/Bags/Zip-High-Wall.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: 150,
      color: 'White and Blue',
      quantity: 1
    },
    {
      id: 5,
      name: 'Zip High Wall',
      href: '#',
      imageSrc: '../../public/Bags/Zip-Tote-Basket.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: 140,
      color: 'Washed Black',
      quantity: 1
    },
    {
      id: 6,
      name: 'Zip High Wall',
      href: '#',
      imageSrc: '../../public/Bags/Zip-Tote-Basket-2.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: 140,
      color: 'White and Black',
      quantity: 1
    },
    {
      id: 7,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: 35,
      color: 'Black',
      quantity: 1
    },
    {
      id: 8,
      name: 'Basic Tee',
      href: '#',
      imageSrc: '../../public/Shirts/Basic-Tee_Charcoal.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: 35,
      color: 'Charcoal',
      quantity: 1
    },
    {
      id: 9,
      name: 'Basic Tee',
      href: '#',
      imageSrc: '../../public/Shirts/Basic-Tee_Aspen-White.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: 35,
      color: 'Grey',
      quantity: 1
    },
    {
      id: 10,
      name: 'ArtWork Tee',
      href: '#',
      imageSrc: '../../public/Shirts/Artwork-Tee_Iso-Dots.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: 35,
      color: 'Grey',
      quantity: 1
    }
  ];

  const [clickedProducts, setClickedProducts] = useState({});

  const onAddProducts = (product) => {
    if (allProducts.find((item) => item.id === product.id)) {
      const updatedProducts = allProducts.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setTotal(total + product.price * product.quantity);
      setCountProducts(countProducts + product.quantity);
      setAllProducts([...updatedProducts]);
    } else {
      setTotal(total + product.price * product.quantity);
      setCountProducts(countProducts + product.quantity);
      setAllProducts([...allProducts, { ...product }]);
    }
  };

  const handleClick = (productId) => {
    setClickedProducts({ ...clickedProducts, [productId]: true });
    const productToAdd = products.find((product) => product.id === productId);
    onAddProducts(productToAdd);
  };

  return (
    <div className="" style={{ borderBottom: '1px solid black' }}>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-5xl tracking-tight text-gray-900 font-extralight">Products</h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="">
              <div className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
              </div>

              <button
                onClick={() => handleClick(product.id)}
                className={`flex items-center justify-center gap-x-2 bg-black px-4 py-2 rounded-md w-full text-white my-4 transition-all hover:bg-black hover:opacity-85 hover:scale-105 ${clickedProducts[product.id] ? 'bg-green-500 text-white' : ''
                  }`}
              >
                {clickedProducts[product.id] ? '✔️ Added' : 'Add to Shopping Cart'}

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
