import * as React from "react";
import 'react-data-grid/lib/styles.css';
import fakeData, { User, genSingleUser } from "../common/fakedata";
import DataGrid, { Column } from 'react-data-grid';
import CellType from "../components/CellType";
import useStyle from "../common/style";


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
  const { styles } = useStyle();

  return (
    <DataGrid
      className={styles.container} // 这里的样式仿 antd table 风格
      style={style}
      rows={rows}
      columns={columns}
      rowKeyGetter={v => v.userId}
    />
  );
}

export default DataGridDemo;
