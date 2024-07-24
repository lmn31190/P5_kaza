import "./home.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Banner from "../../components/banner/Banner";
import homeImg from '../../assets/images/banner.webp'

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
     const getData = async () => {
        const response = await fetch("../logement.json");
        const data = await response.json();
        setData(data); 
    }
    getData();
  }, []);

       
    
    return (
    <div className="home">
      <Banner img={homeImg}/>

      <div className="logementList">
        <div className="container">
          <div className="wrapper">
          {data &&
            data.length > 0 &&
            data.map((logement) => (
              <Link className="card" key={`/logement/${logement.id}`} to={`/logement/${logement.id}`}>
                <img src={logement.cover} alt="" />
                <div className="opacityCard"></div>
                <h3>{logement.title}</h3>
              </Link>
            ))}

          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;
