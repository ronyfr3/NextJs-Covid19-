import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cases } from "../../redux/actions/Covid";
import { AiFillWarning } from "react-icons/ai";

const CountryWise = () => {
  const [inV, setInV] = useState("");
  const casesInfo = useSelector((state) => state.cases.cases);
  // console.log(casesInfo);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(cases(inV));
  }, [dispatch]);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(cases(inV));
  };

  return (
    <div className="Cwrapper">
      <form onSubmit={handleSubmit}>
        <label htmlFor="Country Cases">country based covid19 situation</label>
        <input
          type="text"
          placeholder="Search any country..."
          value={inV}
          onChange={(e) => setInV(e.target.value)}
        />
        <button>Search</button>
      </form>
      {casesInfo.length > 1 ? (
        ""
      ) : (
        <div className="country_case">
          <h2>{casesInfo?.country} covid19 cases</h2>
        </div>
      )}
      {/* covid data */}
      {casesInfo.length > 1 ? (
        ""
      ) : (
        <>
          <div className="info_container">
            <p>
              Active: <span>{casesInfo?.active}</span>
            </p>
            <p>
              critical: <span>{casesInfo?.critical}</span>
            </p>
            <p>
              deaths: <span>{casesInfo?.deaths}</span>
            </p>
            <p>
              recovered: <span>{casesInfo?.recovered}</span>
            </p>
            <p>
              todayCases: <span>{casesInfo?.todayCases}</span>
            </p>
            <p>
              totalTests: <span>{casesInfo?.totalTests}</span>
            </p>
          </div>
        </>
      )}
      {casesInfo === "Country not found" && (
        <div className="Countrfd">
          <span>
            <AiFillWarning className="warn" />
          </span>
          <span>Invalid country name!</span>
        </div>
      )}
    </div>
  );
};

export default CountryWise;
