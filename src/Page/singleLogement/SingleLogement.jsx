import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Gallery from "../../components/Gallery/Gallery";
import "./singleLogement.scss";
import Rates from "../../components/rates/Rates";
import Accordion from "../../components/Accordion/Accordion";
import Error404 from "../404/Error404";

const SingleLogement = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [error, setError] = useState();

  const filterData = (datas) => {
    let filteredData;
    filteredData = datas.filter((d) => d.id === id);
    if (filteredData.length === 0) {
      setError(true);
    } else {
      return filteredData;
    }

    return filteredData;
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("../logement.json");
        const datas = await res.json();
        setData(filterData(datas));
      } catch (err) {
        setError(true);
      }
    };
    getData();
  }, );

  const space = (name) => {
    return name.replace(" ", "\n");
  };

  if (error) {
    return <Error404 />;
  } else if (data) {
    return (
      <>
        <div className="singleLog">
          <Gallery data={data} />
          <div className="logContainer">
            <div className="logLeft">
              <div className="logTitle">
                <h1>{data[0].title}</h1>
                <p>{data[0].location}</p>
              </div>
              <ul className="tags">
                {data[0].tags.map((tag, i) => {
                  return (
                    <li key={i} className="tag">
                      {tag}
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="logRight">
              <div className="host">
                <p>{space(data[0].host.name)}</p>
                <img
                  src={data[0].host.picture}
                  alt={`Profil : ${data[0].host.name}`}
                />
              </div>
              <Rates rates={data[0].rating} />
            </div>
          </div>
          <div className="accordeonContainer">
            <Accordion data={data} title="Description">
              <p>{data[0].description}</p>
            </Accordion>
            <Accordion data={data} title="Équipements">
              <ul>
                {data[0].equipments.map((equipment, index) => {
                  return <li key={index}>{equipment}</li>;
                })}
              </ul>
            </Accordion>
          </div>
        </div>
      </>
    );
  }

  
};

export default SingleLogement;
