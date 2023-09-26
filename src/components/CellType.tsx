import * as React from "react";
import { User } from "../common/fakedata";
import { Typography, Avatar, DatePicker, Input } from "antd";
import dayjs from "dayjs";

type Key = keyof User;

export interface CellTypeProps {
  typeKey: Key
  value: any
}

type Comp = React.FC<CellTypeProps>;

const map: Partial<Record<Key, Comp>> = {
  userId: ({ value }) => <Typography.Text ellipsis>{value}</Typography.Text>,
  // avatar: ({ value }) => <Avatar src={value} alt={value} />,
  avatar: ({ value }) => <Avatar>{String(value).at(-1)}</Avatar>,
  birthDate: ({ value }) => <DatePicker value={dayjs(value)} disabled bordered={false} />,
  email: ({ value }) => <Input value={value} readOnly bordered={false} />,
  username: ({ value }) => <Input value={value} readOnly bordered={false} />,
  password: ({ value }) => <Input.Password value={value} readOnly bordered={false} />,
  registeredAt: ({ value }) => <DatePicker value={dayjs(value)} disabled bordered={false} />,
}

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
  const C = map[props.typeKey] ?? FallBack

  return (
    <C {...props} />
  )
}

export default CellType;
