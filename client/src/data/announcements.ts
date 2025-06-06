
export interface Announcement {
  id: number;
  title: string;
  content: string;
  date: string;
  isImportant?: boolean;
}

export const announcements: Announcement[] = [
  {
    id: 1,
    title: "Revised Business Hours",
    content: "Please be informed that from 23rd March 2025, our company's working days and hours (except Public Holiday) will be as follows:\n\nWorking Days: Monday(10am to 2pm & 5pm to 9pm) to Sunday(2nd half holiday)\n\nWe are confident that this revised working days and hours will be able to meet your needs and provide you the necessary service.",
    date: "2025-03-23",
    isImportant: true
  }
];
