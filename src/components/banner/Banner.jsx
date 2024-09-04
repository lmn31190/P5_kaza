import "./banner.scss";

const Banner = ({img, aboutBanner, homeBanner}) => {
  return (
    <div className="banner">
        <img src={img} alt="" />
        
      <h1>{aboutBanner || homeBanner}</h1>
      
    </div>
  );
};

export default Banner;
