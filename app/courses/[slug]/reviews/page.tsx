import React from "react";
import { CourseShell } from "@/components/course/CourseShell";
import { CourseReviewsContent } from "@/components/course/CourseReviewsContent";

interface CourseReviewsSlugPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CourseReviewsSlugPage({
  params,
}: CourseReviewsSlugPageProps) {
  await params;
  return (
    <CourseShell>
      <CourseReviewsContent />
    </CourseShell>
  );
}
