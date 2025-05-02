import React, { useEffect, useState } from "react";

interface AnnouncementBarProps {
  copy: string;
  start: string; // e.g. "5/1/2025 8:00 PM"
  end?: string; // e.g. "5/10/2025 11:59 PM"
  link?: string;
  linkText?: string;
}

// Helper to parse custom date format: "m/d/Y g:i a"
function parseCustomDate(input: string): Date | null {
  const [datePart, timePart, meridian] = input.trim().split(/[\s]+/); // e.g. ["5/1/2025", "8:00", "PM"]
  if (!datePart || !timePart || !meridian) return null;

  const [month, day, year] = datePart.split("/").map(Number);
  const [hourRaw, minute] = timePart.split(":").map(Number);

  if (!month || !day || !year || hourRaw === undefined || minute === undefined)
    return null;

  let hour = hourRaw;
  if (meridian.toUpperCase() === "PM" && hour < 12) hour += 12;
  if (meridian.toUpperCase() === "AM" && hour === 12) hour = 0;

  return new Date(year, month - 1, day, hour, minute);
}

const AnnouncementBar: React.FC<AnnouncementBarProps> = ({
  copy,
  start,
  end,
  link,
  linkText,
}) => {
  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    const now = new Date();
    const startDate = parseCustomDate(start);
    const endDate = end ? parseCustomDate(end) : null;

    if (startDate && now >= startDate && (!endDate || now <= endDate)) {
      setShouldShow(true);
    }
  }, [start, end]);

  if (!shouldShow) return null;

  return (
    <div className="bg-lightgrey pl-[35px] pr-[35px] sm:pl-[80px] sm:pr-[80px] md:pl-[35px] md:pr-[35px]">
      <div
        id="announcement-bar"
        className="flex flex-row gap-[20px] mx-auto py-[30px] text-center justify-center lg:max-w-[70.5rem] md:max-w-[920px]"
      >
        <p dangerouslySetInnerHTML={{ __html: copy }} />
        {link && linkText && (
          <p>
            <a href={link}>{linkText}</a>
          </p>
        )}
      </div>
    </div>
  );
};

export default AnnouncementBar;
