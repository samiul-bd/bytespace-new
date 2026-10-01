import React from "react";
import { CourseShell } from "@/components/course/CourseShell";
import { CourseAboutContent } from "@/components/course/CourseAboutContent";

export default function CourseDetailsPage() {
  return (
    <CourseShell>
      <CourseAboutContent />
    </CourseShell>
  );
}
