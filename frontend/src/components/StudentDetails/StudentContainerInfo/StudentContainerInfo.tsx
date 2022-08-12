import { StudentRating } from './StudentRating/StudentRating';
import { StudentExpectations } from './StudentExpectations/StudentExpectations';
import { StudentEducation } from './StudentEducation/StudentEducation';
import { StudentCourse } from './StudentCourse/StudentCourse';
import { StudentExperience } from './StudentExperience/StudentExperience';
import { StudentPortfolio } from './StudentPortfolio/StudentPortfolio';
import { StudentScrum } from './StudentScrum/StudentScrum';
import { StudentProject } from './StudentProject/StudentProject';

export const StudentContainerInfo = () => {
  return (
    <>
      <StudentRating />
      <StudentExpectations />
      <StudentEducation />
      <StudentCourse />
      <StudentExperience />
      <StudentPortfolio />
      <StudentScrum />
      <StudentProject />
    </>
  );
};
