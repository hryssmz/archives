import { DateTime } from "luxon";

export function prettifyISODate(isoDate: string | null): string {
  return isoDate
    ? DateTime.fromISO(isoDate).toLocaleString(DateTime.DATE_MED)
    : "";
}
