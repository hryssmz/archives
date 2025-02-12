// components/mui-x-date/date-calendar/DateCalendarValue.tsx
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";

export default function DateCalendarValue() {
  const [value, setValue] = useState<Dayjs | null>(dayjs("2022-04-17"));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DateCalendar", "DateCalendar"]}>
        <DemoItem label="Uncontrolled calendar">
          <DateCalendar defaultValue={dayjs("2022-04-17")} />
        </DemoItem>
        <DemoItem label="Controlled calendar">
          <DateCalendar
            value={value}
            onChange={newValue => setValue(newValue)}
          />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
}
