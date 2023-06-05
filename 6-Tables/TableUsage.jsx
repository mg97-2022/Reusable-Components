import { createColumnHelper } from "@tanstack/react-table";
import { useState } from "react";
import LangUtils from "@/utils/language";
import CustomTable from "./CustomTable";

const columnHelper = createColumnHelper();

const defaultData = [
  {
    id: 1,
    shipmentCode: "shipmentCode",
    description: "description",
    recipient: "recipient",
    originBranch: "originBranch",
    shippingFees: "shipping fees",
    storeEntitlement: "store entitlement",
  },
  {
    id: 2,
    shipmentCode: "shipmentCode",
    description: "description",
    recipient: "recipient",
    originBranch: "originBranch",
    shippingFees: "shipping fees",
    storeEntitlement: "store entitlement",
  },
  {
    id: 3,
    shipmentCode: "shipmentCode",
    description: "description",
    recipient: "recipient",
    originBranch: "originBranch",
    shippingFees: "shipping fees",
    storeEntitlement: "store entitlement",
  },
];

const columns = [
  columnHelper.accessor("id", {
    id: (info) => info.getValue(),
    cell: (info) => info.getValue(),
    header: () => <span>#</span>,
  }),
  columnHelper.accessor("shipmentCode", {
    header: () => <span>{LangUtils.FetchWord("shipmentCode")}</span>,
  }),
  columnHelper.accessor("description", {
    header: () => <span>{LangUtils.FetchWord("description")}</span>,
  }),
  columnHelper.accessor("recipient", {
    header: () => <span>{LangUtils.FetchWord("recipient")}</span>,
  }),
  columnHelper.accessor("originBranch", {
    header: () => <span>{LangUtils.FetchWord("originBranch")}</span>,
  }),
  columnHelper.accessor("shippingFees", {
    header: () => <span>{LangUtils.FetchWord("shippingFees")}</span>,
  }),
  columnHelper.accessor("storeEntitlement", {
    header: () => <span>{LangUtils.FetchWord("storeEntitlement")}</span>,
  }),
];

const TableUsage = () => {
  const [data, setData] = useState([...defaultData]);
  const [globalFilter, setGlobalFilter] = useState(""); // this is the value of search input

  return <CustomTable data={data} columns={columns} state={{ globalFilter }} />;
};

export default TableUsage;
