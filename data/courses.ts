import { Course, Category, LessonModule, CourseReview, Testimonial, Creator } from "@/types";

export const CATEGORIES: Category[] = [
  { id: "all", name: "Featured", slug: "all" },
  { id: "music", name: "Music", slug: "music" },
  { id: "drawing-painting", name: "Drawing & Painting", slug: "drawing-painting" },
  { id: "marketing", name: "Marketing", slug: "marketing" },
  { id: "animation", name: "Animation", slug: "animation" },
  { id: "social-media", name: "Social Media", slug: "social-media" },
  { id: "ui-ux-design", name: "UI/UX Design", slug: "ui-ux-design" },
  { id: "creative-marketing", name: "Creative Marketing", slug: "creative-marketing" },
  { id: "cooking", name: "Cooking", slug: "cooking" },
];

export const EXPLORE_PATHS = [
  { name: "Design", slug: "design", icon: "/assets/svg/cat-design.svg" },
  { name: "Development", slug: "development", icon: "/assets/svg/cat-development.svg" },
  { name: "IT & Software", slug: "it-software", icon: "/assets/svg/cat-it-software.svg" },
  { name: "Business", slug: "business", icon: "/assets/svg/cat-business.svg" },
  { name: "Marketing", slug: "marketing", icon: "/assets/svg/cat-marketing.svg" },
  { name: "Photography", slug: "photography", icon: "/assets/svg/cat-photography.svg" },
];

export const COURSES: Course[] = [
  {
    id: "c-1",
    slug: "learn-figma-from-basic",
    title: "Learn Figma from Basic",
    creator: {
      name: "purepearl studio",
      slug: "purepearl-studio",
      avatarUrl: "/assets/img/avatar-pink-beard.png",
      role: "Passionate UI/UX, Web designer",
    },
    thumbnail: "/assets/img/course-figma-basic.jpg",
    lessonsCount: 17,
    duration: "2 hours 16 mins",
    commentsCount: 59,
    rating: 4.5,
    level: "Beginner",
    avatars: [
      "/assets/img/avatar-pink-beard.png",
      "/assets/img/avatar-blonde.png",
      "/assets/img/avatar-yellow-woman.png",
      "/assets/img/avatar-blue-tee-man.png",
    ],
    additionalStudentsCount: "26+",
    price: 25,
    pricePeriod: "/lifetime",
    categories: ["ui-ux-design"],
  },
  {
    id: "c-2",
    slug: "build-digital-asset",
    title: "Build Digital Asset",
    creator: {
      name: "purepearl studio",
      slug: "purepearl-studio",
      avatarUrl: "/assets/img/avatar-pink-beard.png",
      role: "Passionate UI/UX, Web designer",
    },
    thumbnail: "/assets/img/course-digital-asset.jpg",
    lessonsCount: 17,
    duration: "2 hours 16 mins",
    commentsCount: 59,
    rating: 4.5,
    level: "Beginner",
    avatars: [
      "/assets/img/avatar-pink-beard.png",
      "/assets/img/avatar-blonde.png",
      "/assets/img/avatar-yellow-woman.png",
      "/assets/img/avatar-blue-tee-man.png",
    ],
    additionalStudentsCount: "26+",
    price: 25,
    pricePeriod: "/lifetime",
    categories: ["drawing-painting", "animation"],
  },
  {
    id: "c-3",
    slug: "the-power-of-big-data",
    title: "the Power of Big Data",
    creator: {
      name: "purepearl studio",
      slug: "purepearl-studio",
      avatarUrl: "/assets/img/avatar-pink-beard.png",
      role: "Passionate UI/UX, Web designer",
    },
    thumbnail: "/assets/img/course-big-data.jpg",
    lessonsCount: 17,
    duration: "2 hours 16 mins",
    commentsCount: 59,
    rating: 4.5,
    level: "Beginner",
    avatars: [
      "/assets/img/avatar-pink-beard.png",
      "/assets/img/avatar-blonde.png",
      "/assets/img/avatar-yellow-woman.png",
      "/assets/img/avatar-blue-tee-man.png",
    ],
    additionalStudentsCount: "26+",
    price: 25,
    pricePeriod: "/lifetime",
    categories: ["marketing"],
  },
  {
    id: "c-4",
    slug: "balancing-productivity-and-life",
    title: "Balancing Productivity and Life",
    creator: {
      name: "purepearl studio",
      slug: "purepearl-studio",
      avatarUrl: "/assets/img/avatar-pink-beard.png",
      role: "Passionate UI/UX, Web designer",
    },
    thumbnail: "/assets/img/course-productivity.jpg",
    lessonsCount: 17,
    duration: "2 hours 16 mins",
    commentsCount: 59,
    rating: 4.5,
    level: "Beginner",
    avatars: [
      "/assets/img/avatar-pink-beard.png",
      "/assets/img/avatar-blonde.png",
      "/assets/img/avatar-yellow-woman.png",
      "/assets/img/avatar-blue-tee-man.png",
    ],
    additionalStudentsCount: "26+",
    price: 25,
    pricePeriod: "/lifetime",
    categories: ["social-media"],
  },
  {
    id: "c-5",
    slug: "mastering-money-management",
    title: "Mastering Money Management",
    creator: {
      name: "purepearl studio",
      slug: "purepearl-studio",
      avatarUrl: "/assets/img/avatar-pink-beard.png",
      role: "Passionate UI/UX, Web designer",
    },
    thumbnail: "/assets/img/course-money.jpg",
    lessonsCount: 17,
    duration: "2 hours 16 mins",
    commentsCount: 59,
    rating: 4.5,
    level: "Beginner",
    avatars: [
      "/assets/img/avatar-pink-beard.png",
      "/assets/img/avatar-blonde.png",
      "/assets/img/avatar-yellow-woman.png",
      "/assets/img/avatar-blue-tee-man.png",
    ],
    additionalStudentsCount: "26+",
    price: 25,
    pricePeriod: "/lifetime",
    categories: ["marketing", "creative-marketing"],
  },
  {
    id: "c-6",
    slug: "from-idea-to-startup-success",
    title: "From Idea to Startup Success",
    creator: {
      name: "purepearl studio",
      slug: "purepearl-studio",
      avatarUrl: "/assets/img/avatar-pink-beard.png",
      role: "Passionate UI/UX, Web designer",
    },
    thumbnail: "/assets/img/course-startup.jpg",
    lessonsCount: 17,
    duration: "2 hours 16 mins",
    commentsCount: 59,
    rating: 4.5,
    level: "Beginner",
    avatars: [
      "/assets/img/avatar-pink-beard.png",
      "/assets/img/avatar-blonde.png",
      "/assets/img/avatar-yellow-woman.png",
      "/assets/img/avatar-blue-tee-man.png",
    ],
    additionalStudentsCount: "26+",
    price: 25,
    pricePeriod: "/lifetime",
    categories: ["creative-marketing"],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t-1",
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar: "/assets/img/avatar-yellow-woman.png",
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    id: "t-2",
    name: "James L.",
    role: "Lifelong Learner",
    avatar: "/assets/img/avatar-grey-man.png",
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    id: "t-3",
    name: "Alex B.",
    role: "Inspired Creator",
    avatar: "/assets/img/avatar-alex.png",
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
];

export const COURSE_MODULES: LessonModule[] = [
  {
    id: "module-1",
    number: 1,
    title: "Module 1: Introduction to Digital Assets",
    description:
      "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
    duration: "12 mins",
  },
  {
    id: "module-2",
    number: 2,
    title: "Module 2: Design Principles for Impact",
    description:
      "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills.",
    duration: "21 mins",
  },
  {
    id: "module-4",
    number: 4,
    title: "Module 4: User-Centric Design Strategies",
    description:
      "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.",
    duration: "16 mins",
  },
  {
    id: "module-5",
    number: 5,
    title: "Module 5: Interactive Media and Engagement",
    description:
      "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences.",
    duration: "18 mins",
  },
  {
    id: "module-6",
    number: 6,
    title: "Module 6: Project Showcase and Critique",
    description:
      "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence.",
    duration: "25 mins",
  },
  {
    id: "module-7",
    number: 7,
    title: "Module 7: Optimizing Digital Assets for Various Platforms",
    description:
      "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes.",
    duration: "15 mins",
  },
];

export const COURSE_REVIEWS: CourseReview[] = [
  {
    id: "r-1",
    authorName: "PurePearl Studio",
    authorRole: "UI/UX Designer",
    authorAvatar: "/assets/img/avatar-reviewer-purepearl.png",
    rating: 5,
    timeAgo: "a year ago",
    content:
      "The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!",
  },
  {
    id: "r-2",
    authorName: "Albert Flores",
    authorRole: "UI/UX Designer",
    authorAvatar: "/assets/img/avatar-reviewer-albert.png",
    rating: 5,
    timeAgo: "a year ago",
    content:
      "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!",
  },
  {
    id: "r-3",
    authorName: "Cody Fisher",
    authorRole: "UI/UX Designer",
    authorAvatar: "/assets/img/avatar-reviewer-cody.png",
    rating: 5,
    timeAgo: "a year ago",
    content:
      "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.",
  },
  {
    id: "r-4",
    authorName: "Brooklyn Simmons",
    authorRole: "UI/UX Designer",
    authorAvatar: "/assets/img/avatar-reviewer-brooklyn.png",
    rating: 5,
    timeAgo: "a year ago",
    content:
      "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.",
  },
];

export const PRIMARY_CREATOR: Creator = {
  id: "creator-purepearl",
  name: "PurePearl Studio",
  slug: "purepearl-studio",
  avatar: "/assets/img/avatar-pink-beard.png",
  role: "Passionate UI/UX, Web designer",
  bio: "Welcome to the creative world of PurePearl Studio. Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together!\nDive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.",
  stats: {
    productsCount: 3,
    followersCount: 12,
  },
  isFollowing: false,
};
