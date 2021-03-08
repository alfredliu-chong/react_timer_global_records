// Globals
import React, { useEffect } from "react";

// Components
import { Record } from "components/Record";

// Misc
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../services/records/action";
import { getTopRecords } from "../../services/records/selector";

// Component
function GlobalRecords() {
  const dispatch = useDispatch()
  const data = useSelector(getTopRecords())

  useEffect(() => {
    dispatch(fetchData)
  }, [])

  return (
    <div className="aura-page aura-global_records">
      <h1>Top Records of 2020</h1>

      <div className="aura-page-content">
        {data && data.map((record) => {
          return <Record key={record.id} data={record} />;
        })}
      </div>
    </div>
  );
}

export { GlobalRecords };
