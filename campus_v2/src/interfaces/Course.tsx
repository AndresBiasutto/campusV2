import { Lection } from "./Lection";


export interface Course {
  id: string;
  name: string;
  image: string;
  creatorId: string;
  themeId: string;
  description: string;
  Theme: { name: string };
  Creator: { name: string; id: string };
  chapters: {
    id: string;
    name: string;
    courseId: string;
    chapterOrder: number;
    lessons: Lection[];
  }[];
  //lessons: {id: string, name: string, lectionOrder: number}[];
}
