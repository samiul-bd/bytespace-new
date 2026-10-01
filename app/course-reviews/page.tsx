import React from "react";
import { CourseShell } from "@/components/course/CourseShell";
import { CourseReviewsContent } from "@/components/course/CourseReviewsContent";

export default function CourseReviewsPage() {
  return (
    <CourseShell>
      <CourseReviewsContent />
    </CourseShell>
  );
}
