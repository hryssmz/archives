// components/mui-x-date/date-calendar/YearMonthCalendar.tsx
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MonthCalendar } from "@mui/x-date-pickers/MonthCalendar";
import { YearCalendar } from "@mui/x-date-pickers/YearCalendar";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";

export default function YearMonthCalendar() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["YearCalendar", "MonthCalendar"]}>
        <DemoItem label="YearCalendar">
          <YearCalendar />
        </DemoItem>
        <DemoItem label="MonthCalendar">
          <MonthCalendar />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
}
