import { Lection } from "./Lection";

export interface Chapter {
  id: string;
  name: string;
  courseId: string;
  chapterOrder: number;
  lections: Lection[];
}