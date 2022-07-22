import { Status } from './student';

export interface StudentRecord {
  id: string;

  email: string;

  courseCompletion: number;

  courseEngagement: number;

  projectDegree: number;

  teamProjectDegree: number;

  bonusProjectUrls: string;

  token: string;

  status: Status;
}
