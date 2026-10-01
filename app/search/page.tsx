"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { SearchHero } from "@/components/search/SearchHero";
import { SearchGrid } from "@/components/search/SearchGrid";
import { Footer } from "@/components/common/Footer";
import { COURSES } from "@/data/courses";
import { Course } from "@/types";

function SearchContent() {
  const searchParams = useSearchParams();
  const urlCategory = searchParams.get("c") || "all";
  const urlQuery = searchParams.get("q") || "";

  const [query, setQuery] = useState<string>(urlQuery);
  const [scope, setScope] = useState<string>("Courses");
  const [activeCategory, setActiveCategory] = useState<string>(urlCategory);

  useEffect(() => {
    if (urlCategory) {
      setActiveCategory(urlCategory);
    }
  }, [urlCategory]);

  useEffect(() => {
    if (urlQuery) {
      setQuery(urlQuery);
    }
  }, [urlQuery]);

  const fullCatalog: Course[] = [...COURSES, ...COURSES, ...COURSES];

  const filteredCourses = fullCatalog.filter((course) => {
    const matchesCategory =
      activeCategory === "all" || course.categories.includes(activeCategory);
    const matchesQuery =
      !query.trim() ||
      course.title.toLowerCase().includes(query.toLowerCase()) ||
      course.creator.name.toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <SearchHero
        query={query}
        onQueryChange={setQuery}
        scope={scope}
        onScopeChange={setScope}
        onSubmit={handleSearchSubmit}
      />
      <SearchGrid
        courses={filteredCourses}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      <Footer />
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <SearchContent />
    </Suspense>
  );
}
