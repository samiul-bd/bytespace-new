export interface CourseChip {
  label: string;
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  creator: {
    name: string;
    slug: string;
    avatarUrl: string;
    role?: string;
  };
  thumbnail: string;
  lessonsCount: number;
  duration: string;
  commentsCount: number;
  rating: number;
  level: "Beginner" | "Intermediate" | "Advanced";
  avatars: string[];
  additionalStudentsCount: string;
  price: number;
  pricePeriod: string;
  categories: string[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  icon?: string;
}

export interface LessonModule {
  id: string;
  number: number;
  title: string;
  description: string;
  duration?: string;
}

export interface CourseReview {
  id: string;
  authorName: string;
  authorRole: string;
  authorAvatar: string;
  rating: number;
  timeAgo: string;
  content: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  quote: string;
}

export interface CreatorStats {
  productsCount: number;
  followersCount: number;
}

export interface Creator {
  id: string;
  name: string;
  slug: string;
  avatar: string;
  role: string;
  bio: string;
  stats: CreatorStats;
  isFollowing?: boolean;
}
