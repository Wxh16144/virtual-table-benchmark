import * as React from "react";
import { User } from "../common/fakedata";
import { antdCompMap } from "./antdCompMap";
import { muiCompMap } from "./muiCompMap";

export type Key = keyof User;

export interface CellTypeProps {
  typeKey: Key
  value: any
}

export type Comp = React.FC<CellTypeProps>;

const FallBack: Comp = ({ value, typeKey }) => {
  const tryValue = React.useMemo(() => {
    try {
      return JSON.stringify(value);
    } catch (error) {
      return String(value);
    }
  }, [value, typeKey]);

  return (
    <div style={{ color: 'red' }} data-type={typeKey}>{tryValue}</div>
  )
}

function CellType(props: CellTypeProps) {
  const C = muiCompMap[props.typeKey] ?? FallBack

  return (
    <C {...props} />
  )
}

export default CellType;
