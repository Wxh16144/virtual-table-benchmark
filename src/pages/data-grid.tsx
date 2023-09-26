import * as React from "react";
import 'react-data-grid/lib/styles.css';
import fakeData, { User, genSingleUser } from "../common/fakedata";
import DataGrid, { Column } from 'react-data-grid';
import CellType from "../components/CellType";


const columns = Object.keys(genSingleUser()).map<Readonly<Column<User>>>(key => ({
  key,
  name: key.toLocaleUpperCase(),
  renderCell: ({ row }) => <CellType typeKey={key as keyof User} value={row[key as keyof User]} />
}))

const style: React.CSSProperties = {
  height: '100vh',
}

function DataGridDemo() {
  const [rows] = React.useState(fakeData);

  return (
    <DataGrid style={style} rows={rows} columns={columns} rowKeyGetter={v => v.userId} />
  );
}

export default DataGridDemo;
