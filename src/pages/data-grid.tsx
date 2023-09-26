import * as React from "react";
import 'react-data-grid/lib/styles.css';

export interface DataGridProps {
  slogan?: React.ReactNode;
}

function DataGrid(props: React.PropsWithChildren<DataGridProps>) {
  const { children } = props;
  return (
    <>
      <div className="my-slogan">
        <p>魔法师正在进行最后的仪式，为您带来一项惊艳功能</p>
        <strong>TBD: The Brilliant Discovery!</strong>
      </div>
      {children}
      {/* This is DataGrid.tsx} */}
    </>
  );
}

export default DataGrid;
