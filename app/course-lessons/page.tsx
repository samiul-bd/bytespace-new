import React from "react";
import { CourseShell } from "@/components/course/CourseShell";
import { CourseLessonsContent } from "@/components/course/CourseLessonsContent";

export default function CourseLessonsPage() {
  return (
    <CourseShell>
      <CourseLessonsContent />
    </CourseShell>
  );
}
