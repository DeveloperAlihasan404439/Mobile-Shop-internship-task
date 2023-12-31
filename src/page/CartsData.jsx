import useCrats from "../Shera/Hooks/useCrats";
import Loading from "../Shera/Loading/Loading";
import brand from '../assets/images/cart.png'
const CartsData = () => {
  const { crat, loading } = useCrats();
  const totalPrices = crat.reduce((total, item) => total + item.price, 0);
  return (
    <div className="mb-10">
        <img src={brand} alt="" className="w-full h-[60vh]"/>
      {loading ? (
        <Loading />
      ) : (
        <div className="md:w-9/12 lg:w-7/12 mx-auto mt-5 border rounded">
          <div
            className="flex justify-between items-center px-10 py-5 text-white rounded-t"
            style={{
              background:
                "radial-gradient(circle, rgb(243, 23, 23) 0%, rgb(27, 27, 27) 100%)",
            }}
          >
            <h1 className="text-lg md:text-xl font-bold">Total Products : {crat.length}</h1>
            <h1 className="text-lg md:text-xl font-bold">Total Price : ${totalPrices}</h1>
          </div>
          <div>
            <div className="py-2 flex justify-between text-white text-xl px-10" style={{
              background:
                "radial-gradient(circle, rgb(243, 23, 23) 0%, rgb(27, 27, 27) 100%)",
            }}>
            <h1>Name</h1>
            <h1>Brand</h1>
            <h1>Price</h1>
            </div>
          {
            crat?.map((data,index) => <div key={index} className="w-full py-2 border-b border-red-600 flex justify-between px-10">
                <h1>{data.title}</h1>
                <h1>{data.brand}</h1>
                <h1>${data.price}</h1>
            </div>)
          }
          </div>
        </div>
      )}
    </div>
  );
};

export default CartsData;
