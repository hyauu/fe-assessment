// flow
import * as React from "react";
import { useSelector } from "react-redux";
import { LineChart, XAxis, YAxis, Tooltip, Line } from "recharts";
import type { RetailSale } from "../../types/reatail.js";

type SaleItem = {
  key: number,
  mongth: string,
  sale: number,
};

const stylex = {
  contianer: {
    height: "100%",
  },
  tableContainer: {
    height: "75vh",
    overflow: "scroll",
    width: "100%",
  },
};

function toMonthName(monthNumber: number): string {
  const date = new Date();
  date.setMonth(monthNumber - 1);

  return date.toLocaleString("en-US", {
    month: "short",
  });
}

export default function MainView(): React.Node {
  const saleData: Array<RetailSale> = useSelector(
    (state) => state.retail.sales
  );
  let salesByMonth: Array<SaleItem> = [];
  saleData.forEach((sale) => {
    const key: number = parseInt(sale.weekEnding.split("-")[1]);
    const month: string = toMonthName(key);
    let item: SaleItem = salesByMonth.find((item) => item.month === month);
    if (item == null) {
      item = {
        sale: 0,
        month,
        key,
      };
    }
    item["sale"] += sale.retailSales;
    salesByMonth = salesByMonth.filter((item) => item.month !== month);
    salesByMonth.push(item);
  });
  salesByMonth.sort((a, b) => a.key - b.key);

  const saleRow: React.Node = saleData.map((data, idx) => {
    return (
      <tr key={idx}>
        <th scope="row">{data.weekEnding}</th>
        <td>{data.retailSales}</td>
        <td>{data.wholesaleSales}</td>
        <td>{data.unitsSold}</td>
        <td>{data.retailerMargin}</td>
      </tr>
    );
  });
  return (
    <div style={stylex.contianer}>
      <div className="d-flex shadow flex-column justify-content-start align-items-center">
        <div className="p2">
          <h6>Retail Sales</h6>
          <LineChart
            width={730}
            height={350}
            data={salesByMonth}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="sale" stroke="#8884d8" />
          </LineChart>
        </div>
      </div>
      <br />
      <div className="d-flex shadow flex-column justify-content-start align-items-center">
        <div className="p-2" style={stylex.tableContainer}>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">WEEK ENDING</th>
                <th scope="col">RETAIL SALES</th>
                <th scope="col">WHOLESALE SALES</th>
                <th scope="col">UNIT SOLD</th>
                <th scope="col">RETAIL MARGIN</th>
              </tr>
            </thead>
            <tbody>{saleRow}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
