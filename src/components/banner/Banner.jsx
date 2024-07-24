import "./banner.scss";

const Banner = ({img}) => {
  return (
    <div className="banner">
        <img src={img} alt="" />
      <h1>Chez vous, partout et ailleurs</h1>
    </div>
  );
};

export default Banner;
