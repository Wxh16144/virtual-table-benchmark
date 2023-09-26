import * as React from "react";

import { Table } from 'antd'
import type { ColumnType } from 'antd/es/table';
import fakeData, { User, genSingleUser } from "../common/fakedata";
import CellType from "../components/CellType";

const columns = Object.keys(genSingleUser()).map<ColumnType<User>>(key => ({
  title: key.toLocaleUpperCase(),
  dataIndex: key,
  key: key,
  render: (value) => (
    <CellType typeKey={key as keyof User} value={value} />
  ),
  onCell: () => ({
    style: {
      padding: '0 8px'
    }
  }),
}))

function AntdTableDemo() {
  const [rows] = React.useState(fakeData);

  return (
    <Table<User>
      bordered
      virtual
      pagination={false}
      columns={columns}
      dataSource={rows}
      rowKey={v => v.userId}
      scroll={{
        y: window.innerHeight
      }}
      onRow={(record) => ({
        style: {
          maxHeight: 35,
        }
      })}
    />
  );
}

export default AntdTableDemo;
