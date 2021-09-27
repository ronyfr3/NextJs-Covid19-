import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { worldcase } from "../../redux/actions/Covid";

const World = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(worldcase());
  }, [dispatch]);

  const info = state.worldcase.worldcase.find((x) => x.country === "World");
  // active: 18875382
  // cases: 220770036
  // casesPerOneMillion: 28323
  // country: "World"
  // critical: 105894
  // deaths: 4570163
  // deathsPerOneMillion: 586
  // recovered: 197324491
  // testsPerOneMillion: 0
  // todayCases: 172889
  // todayDeaths: 3867
  return (
    <div className="world">
      <h1>World covid19 cases</h1>
      <div className="world_info">
        <p>
          Total Cases: <span>{info?.cases}</span>
        </p>
        <p>
          Critical: <span>{info?.critical}</span>
        </p>
        <p>
          Today Cases: <span>{info?.todayCases}</span>
        </p>
        <p>
          Today Deaths: <span>{info?.todayDeaths}</span>
        </p>
        <p>
          Active: <span>{info?.active}</span>
        </p>
        <p>
          recovered: <span>{info?.recovered}</span>
        </p>
      </div>
    </div>
  );
};

export default World;
