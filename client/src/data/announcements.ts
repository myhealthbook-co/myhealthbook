
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
    title: "Grand Opening - MyHealthBook",
    content: `We are Happy to invite you to the GRAND OPENING of MyHealthBook.

📍 Location: Aska Road, Near Ashraf Petrol Pump

📅 Date: 1st April 2026 (Wednesday)
⏰ Time: 11:00 AM – 5:30 PM

🎉 Come & join us in celebrating the opening.
⭐ Featuring special presence of all our well-wishers.

We are going to introduce world-class products that will enhance your health, wealth, and happiness.

📞 Contact: 9776932777, 9437617561
🌐 Website: www.myhealthbook.org`,
    date: "2026-04-01",
    isImportant: true
  }
];
