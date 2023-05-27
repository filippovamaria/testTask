import React from "react";
import data from "./data.json";

interface IName {
  first: string;
  last: string;
}

interface IRow {
  _id: string;
  name: IName;
  type: string;
}

interface IData {
  data: IRow[];
}

const Table: React.FC<{ filterSign: string }> = ({ filterSign }) => {
  const dataObj: IData = JSON.parse(JSON.stringify(data));

  const getNecessaryData = () => {
    return dataObj.data.filter((item: IRow) => item.type === filterSign);
  };

  return (
    <div>
      <table className="min-w-full text-center table-fixed columns-1 w-40 mt-10">
        <thead>
          <tr className="border-b border-grey">
            <th>Name</th>
            <th>Account</th>
          </tr>
        </thead>
        <tbody>
          {getNecessaryData().map((elem: IRow) => (
            <tr key={elem._id} className="border-b border-grey">
              <td>
                {elem.name.first} {elem.name.last}
              </td>
              <td>{Math.floor(Math.random() * 999) + 1}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
