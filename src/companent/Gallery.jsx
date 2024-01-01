const Gallery = () => {
  return (
    <div>
      <h1 className="text-center text-3xl font-medium">Gallery</h1>
      <section className="py-6">
        <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
          <img
            src="https://i.dummyjson.com/data/products/7/thumbnail.jpg"
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 aspect-square"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 aspect-square"
            src="https://i.dummyjson.com/data/products/5/thumbnail.jpg"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 aspect-square"
            src="https://i.dummyjson.com/data/products/5/3.jpg"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 aspect-square"
            src="https://i.dummyjson.com/data/products/13/thumbnail.webp"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 aspect-square"
            src="https://i.dummyjson.com/data/products/7/thumbnail.jpg"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 aspect-square"
            src="https://i.dummyjson.com/data/products/7/thumbnail.jpg"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 aspect-square"
            src="https://i.dummyjson.com/data/products/13/4.jpg"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 aspect-square"
            src="https://i.dummyjson.com/data/products/11/thumbnail.jpg"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 aspect-square"
            src="https://i.dummyjson.com/data/products/13/2.png"
          />
          <img
            src="https://i.dummyjson.com/data/products/11/2.jpg"
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 aspect-square"
          />
        </div>
      </section>
    </div>
  );
};

export default Gallery;
