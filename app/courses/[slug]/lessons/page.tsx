import React from "react";
import { CourseShell } from "@/components/course/CourseShell";
import { CourseLessonsContent } from "@/components/course/CourseLessonsContent";

interface CourseLessonsSlugPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CourseLessonsSlugPage({
  params,
}: CourseLessonsSlugPageProps) {
  await params;
  return (
    <CourseShell>
      <CourseLessonsContent />
    </CourseShell>
  );
}
