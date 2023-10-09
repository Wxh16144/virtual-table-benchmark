import { Key, Comp } from "./CellType";
import { Typography, Avatar, Input } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from "dayjs";

export const muiCompMap: Partial<Record<Key, Comp>> = {
  userId: ({ value }) => <Typography >{value}</Typography>,
  avatar: ({ value }) => <Avatar src={value} alt={value} />,
  birthDate: ({ value }) => <DatePicker value={dayjs(value)} disabled />,
  email: ({ value }) => <Input value={value} readOnly />,
  username: ({ value }) => <Input value={value} readOnly />,
  password: ({ value }) => <Input type="password" value={value} readOnly />,
  registeredAt: ({ value }) => <DatePicker value={dayjs(value)} disabled />,
};
