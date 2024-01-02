const Accordion = () => {
  return (
    <div
      className="w-full h-screen md:h-[80vh] relative bg-fixed"
      style={{
        backgroundImage:
          "url(https://img.freepik.com/premium-photo/seller-man-mobile-phone-professional-consultant-tech-store-shop-check-new-smart-watches_151355-12521.jpg?size=626&ext=jpg&ga=GA1.1.1339526423.1701975357&semt=ais)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute top-0 w-full h-full bg-black/60 py-10">
        <div className="w-11/12 lg:w-10/12 mx-auto md:flex justify-between items-center gap-5 h-full">
          <div className="md:w-[50%]">
            <img
              src="https://img.freepik.com/premium-photo/mobile-phones-store-generative-ai_220873-21825.jpg?size=626&ext=jpg&ga=GA1.1.1339526423.1701975357&semt=ais"
              alt="" 
            />
          </div>
          <div className="md:w-[50%]">
            <div className="collapse collapse-plus text-white border rounded-none rounded-t-lg mb-1 ">
              <input type="radio" name="my-accordion-3" checked="checked" />
              <div className="collapse-title text-sm md:text-xl font-medium">
              TechHub Mobile Emporium Where Choices Unfold
              </div>
              <div className="collapse-content">
                <p>Step into the TechHub Mobile Emporium, your gateway to an expansive world of smartphones. Sort through our extensive collection by specifications,</p>
              </div>
            </div>
            <div className="collapse collapse-plus text-white border rounded-none rounded-t-lg mb-1 ">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-sm md:text-xl font-medium">
              PocketTech Central: Navigating Your Mobile World
              </div>
              <div className="collapse-content">
                <p>Embark on a mobile journey at PocketTech Central, where innovation meets convenience. Sort through our array of smartphones by brand, price range, </p>
              </div>
            </div>
            <div className="collapse collapse-plus text-white border rounded-none rounded-t-lg mb-1 ">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-sm md:text-xl font-medium">
              Where Your Tech Dreams Take Flight
              </div>
              <div className="collapse-content">
                <p>Embark on a tech adventure at SmartMobile Haven, your haven for the latest in mobile innovation! Sort through our collection of smartphones by brand, price point,  </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
