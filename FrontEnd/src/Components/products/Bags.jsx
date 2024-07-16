import React from 'react'

const bags = [
    {
      id: 1,
      name: 'Basic Tee',
      href: '#',
      imageSrc: '../../public/Bags/High-Wall.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
        id: 2,
        name: 'Basic Tee',
        href: '#',
        imageSrc: '../../public/Bags/Medium-Stuff.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Charcoal'
    },
    {
        id: 3,
        name: 'Basic Tee',
        href: '#',
        imageSrc: '../../public/Bags/Normad-Pouch.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Grey'
    },
    {
        
        id: 3,
        name: 'ArtWork Tee',
        href: '#',
        imageSrc: '../../public/Bags/Zip-High-Wall.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Grey'
        
    }
  ]
  
// todo: Terminar bags

function Bags() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 className=" text-center text-2xl tracking-tight text-gray-900 font-semibold">Bags</h2>

      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {bags.map((product) => (
          <div key={product.id} className="group relative">
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
                <p className="mt-1 text-sm font-bold text-gray-900">{product.color}</p>
              </div>
              <p className="text-sm font-medium text-gray-900">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Bags