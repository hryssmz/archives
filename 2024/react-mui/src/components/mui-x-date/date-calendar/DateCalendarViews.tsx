// components/mui-x-date/date-calendar/DateCalendarViews.tsx
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";

export default function DateCalendarViews() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={["DateCalendar", "DateCalendar", "DateCalendar"]}
      >
        <DemoItem label='"year", "month" and "day"'>
          <DateCalendar
            defaultValue={dayjs("2022-04-17")}
            views={["year", "month", "day"]}
          />
        </DemoItem>
        <DemoItem label='"day"'>
          <DateCalendar defaultValue={dayjs("2022-04-17")} views={["day"]} />
        </DemoItem>
        <DemoItem label='"month" and "year"'>
          <DateCalendar
            defaultValue={dayjs("2022-04-17")}
            views={["year", "month"]}
            openTo="month"
          />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
}
