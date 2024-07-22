import React from 'react'

export default function SectionProducts({ allProducts, setAllProducts, countProducts, setCountProducts, total, setTotal }) {
  const bags = [
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
    }
  ]

  const onAddProducts = product => {

    if (allProducts.find(item => item.id === product.id)) {
      const products = allProducts.map(item => item.id === product.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
      );
      setTotal(total + product.price * product.quantity)
      setCountProducts(countProducts + product.quantity)
      return setAllProducts([...products])
    }

    setTotal(total + product.price * product.quantity)
    setCountProducts(countProducts + product.quantity)
    setAllProducts([...allProducts, product]);
  }
  console.log(allProducts);
  return (


    <div className="" style={{ borderBottom: '1px solid black' }}>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className=" text-center text-5xl tracking-tight text-gray-900 font-extralight">Bags</h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {bags.map((product) => (
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
              <button onClick={() => onAddProducts(product)}
                className='bg-black px-4 py-2 rounded-md w-full text-white my-4 transition-all hover:bg-black hover:opacity-85 hover:scale-105'>
                Add to Shopping Car</button>
            </div>
          ))}
        </div>

      </div>

    </div>


  )
}
