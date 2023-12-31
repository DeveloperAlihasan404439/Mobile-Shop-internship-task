import "./Loading.css";
const Loading = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="cube-loader">
        <div className="cube-top"></div>
        <div className="cube-wrapper">
          <span style={{ '--i': 0 }} className="cube-span"></span>
          <span style={{ '--i': 1 }} className="cube-span"></span>
          <span style={{ '--i': 2 }} className="cube-span"></span>
          <span style={{ '--i': 3 }} className="cube-span"></span>
        </div>
      </div>
    </div>
  );
};

export default Loading;
