import React from "react";
import { CourseShell } from "@/components/course/CourseShell";
import { CourseAboutContent } from "@/components/course/CourseAboutContent";

interface CourseSlugPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CourseSlugPage({ params }: CourseSlugPageProps) {
  await params;
  return (
    <CourseShell>
      <CourseAboutContent />
    </CourseShell>
  );
}
