// components/mui-x-date/date-calendar/DateCalendarReferenceDate.tsx
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";

export default function DateCalendarReferenceDate() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DateCalendar"]}>
        <DateCalendar
          referenceDate={dayjs("2022-04-17")}
          views={["year", "month", "day"]}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
