import * as React from "react";
import { Typography, Avatar, DatePicker, Input } from "antd";
import dayjs from "dayjs";
import { Key, Comp } from "./CellType";

export const antdCompMap: Partial<Record<Key, Comp>> = {
  userId: ({ value }) => <Typography.Text ellipsis>{value}</Typography.Text>,
  // avatar: ({ value }) => <Avatar src={value} alt={value} />,
  avatar: ({ value }) => <Avatar>{String(value).at(-1)}</Avatar>,
  birthDate: ({ value }) => <DatePicker value={dayjs(value)} disabled bordered={false} />,
  email: ({ value }) => <Input value={value} readOnly bordered={false} />,
  username: ({ value }) => <Input value={value} readOnly bordered={false} />,
  password: ({ value }) => <Input.Password value={value} readOnly bordered={false} />,
  registeredAt: ({ value }) => <DatePicker value={dayjs(value)} disabled bordered={false} />,
};
