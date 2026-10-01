import React from "react";
import { CourseCard } from "@/components/common/CourseCard";
import { COURSES } from "@/data/courses";

export const CreatorCoursesGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 justify-items-center pb-20">
      {COURSES.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};
