"use client";

import { useMemo } from "react";
import activityData from "../mock/activityData.json";

const DAY_LABELS = [
  "Senin",
  "Selasa",
  "Rabu",
  "Kamis",
  "Jum'at",
  "Sabtu",
  "Minggu",
];
const MONTH_NAMES = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "Mei",
  "Jun",
  "Jul",
  "Agu",
  "Sep",
  "Okt",
  "Nov",
  "Des",
];

const LEVEL_COLORS = [
  "bg-gray-100",
  "bg-primary/30",
  "bg-primary/50",
  "bg-primary/80",
  "bg-green-500",
  "bg-green-700",
];

function getLevel(count: number): number {
  if (count === 0) return 0;
  if (count <= 1) return 1;
  if (count <= 2) return 2;
  if (count <= 4) return 3;
  if (count <= 6) return 4;
  return 4;
}

function formatDateID(date: Date): string {
  return date.toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

const ActivityGrid = () => {
  const { rows, monthLabels, weekCount } = useMemo(() => {
    const countMap = new Map<string, number>();
    for (const entry of activityData.entries) {
      countMap.set(entry.date, entry.count);
    }

    const year = activityData.year;
    const jan1 = new Date(year, 0, 1);
    const offset = (jan1.getDay() + 6) % 7; // Monday=0
    const cursor = new Date(year, 0, 1 - offset);

    // Build column-first, then transpose to rows
    const columns: { date: Date; count: number; key: string }[][] = [];
    const monthLabels: { label: string; colIndex: number }[] = [];
    let lastMonth = -1;
    let colIndex = 0;
    let col: { date: Date; count: number; key: string }[] = [];

    while (cursor.getFullYear() < year + 2) {
      const dayOfWeek = (cursor.getDay() + 6) % 7;

      if (dayOfWeek === 0 && col.length > 0) {
        columns.push(col);
        colIndex++;
        col = [];
      }

      const m = cursor.getMonth();
      if (dayOfWeek === 0 && m !== lastMonth) {
        monthLabels.push({ label: MONTH_NAMES[m], colIndex });
        lastMonth = m;
      }

      const key = `${cursor.getFullYear()}-${String(cursor.getMonth() + 1).padStart(2, "0")}-${String(cursor.getDate()).padStart(2, "0")}`;
      col.push({
        date: new Date(cursor),
        count: countMap.get(key) ?? 0,
        key,
      });

      cursor.setDate(cursor.getDate() + 1);

      if (
        col.length === 7 &&
        cursor.getFullYear() > year &&
        cursor.getMonth() === 0
      ) {
        columns.push(col);
        break;
      }
    }

    // Transpose: columns → rows (each row = one day of week across all weeks)
    const rows = Array.from({ length: 7 }, (_, dayIdx) =>
      columns.map((col) => col[dayIdx])
    );

    return { rows, monthLabels, weekCount: columns.length };
  }, []);

  // Pixel position of each month label for mobile: label width + gap + (colIndex * (cell + gap))
  const monthLabelLeftMobile = (colIndex: number) =>
    40 + 3 + colIndex * 14;

  // Percentage position for desktop: fractional position in the week-columns area
  const monthLabelLeftDesktop = (colIndex: number) =>
    `calc(${(colIndex / weekCount) * 100}% + 2.5rem + 3px)`;

  return (
    <div>
      {/* Mobile: fixed-size cells with horizontal scroll */}
      <div className="md:hidden overflow-x-auto scrollbar-none">
        <div className="flex flex-col gap-[3px]">
          {/* Month labels — same coordinate space as the cells */}
          <div
            className="relative h-4 mb-1"
            style={{ width: 40 + 3 + weekCount * 14 }}
          >
            {monthLabels.map((m, i) => (
              <div
                key={i}
                className="text-[10px] text-paragraph/50 absolute whitespace-nowrap"
                style={{ left: monthLabelLeftMobile(m.colIndex) }}
              >
                {m.label}
              </div>
            ))}
          </div>

          {/* Day rows: label + cells in one row */}
          {rows.map((row, dayIdx) => (
            <div key={dayIdx} className="flex gap-[3px]">
              <div className="w-10 shrink-0 text-[10px] text-paragraph/50 h-[11px] flex items-center">
                {dayIdx % 2 === 0 ? DAY_LABELS[dayIdx] : ""}
              </div>
              {row.map((day) => (
                <div
                  key={day.key}
                  className={`w-[11px] shrink-0 h-[11px] rounded-[2px] cursor-pointer ${LEVEL_COLORS[getLevel(day.count)]}`}
                  title={`${formatDateID(day.date)}\n${day.count} catatan`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: fluid grid filling 100% width */}
      <div className="hidden md:block">
        <div className="flex flex-col gap-[3px]">
          {/* Month labels — positioned relative to the cells area */}
          <div className="relative h-4 mb-1">
            {monthLabels.map((m, i) => (
              <div
                key={i}
                className="text-[10px] text-paragraph/50 absolute whitespace-nowrap"
                style={{ left: monthLabelLeftDesktop(m.colIndex) }}
              >
                {m.label}
              </div>
            ))}
          </div>

          {/* Day rows: CSS Grid ensures 1:1 aspect ratio on every cell */}
          {rows.map((row, dayIdx) => (
            <div
              key={dayIdx}
              className="grid gap-[3px]"
              style={{
                gridTemplateColumns: `2.5rem repeat(${weekCount}, 1fr)`,
              }}
            >
              <div className="text-[10px] text-paragraph/50 flex items-center">
                {dayIdx % 2 === 0 ? DAY_LABELS[dayIdx] : ""}
              </div>
              {row.map((day) => (
                <div
                  key={day.key}
                  className={`aspect-square min-w-0 rounded-[2px] cursor-pointer ${LEVEL_COLORS[getLevel(day.count)]}`}
                  title={`${formatDateID(day.date)}\n${day.count} catatan`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-1 mt-4 justify-end border-t border-t-paragraph/5 pt-4">
        <span className="text-[10px] text-paragraph/40 mr-0.5">Sedikit</span>
        {LEVEL_COLORS.map((color, i) => (
          <div key={i} className={`w-[11px] h-[11px] rounded-[2px] ${color}`} />
        ))}
        <span className="text-[10px] text-paragraph/40 ml-0.5">Banyak</span>
      </div>
    </div>
  );
};

export default ActivityGrid;
