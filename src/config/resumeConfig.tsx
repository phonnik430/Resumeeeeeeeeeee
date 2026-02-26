import {
  Gamepad2,
  Music,
  Box,
  Code,
  Facebook,
  Github,
  Youtube,
  Instagram,
  Book,
  Sword,
  Star,
  Trophy,
  Disc,
  Radio,
  Mic2,
  Cpu,
  FolderCode,
  Lightbulb,
  BookOpen,
  GraduationCap,
  PencilLine,
  Languages,
  Layout,
  Database,
  Briefcase,
  Target,
  Gift,
} from "lucide-react";
import React from "react";

export const resumeConfig = {
  // ==========================================
  // 1. ข้อมูลส่วนตัว (Profile)
  // ==========================================
  profile: {
    name: "Akito", // ชื่อที่แสดงในหน้าเว็บ
    role: "Developer Engineering", // ตำแหน่งงานหลัก
    image: "https://img5.pic.in.th/file/secure-sv1/shadow-1.png", // URL รูปโปรไฟล์
    bio: "HI my name is Akito Am a developer coding in Python, CSS, C#, Java & more.I also create 3D models in Blender.&Eng100%", // คำแนะนำตัวสั้นๆ
    philosophy: "Turning complex logic into elegant, high-performance digital experiences.", // คติประจำใจหรือปรัชญาการทำงาน
  },

  // ==========================================
  // 2. ข้อมูลติดต่อ (Contact)
  // ==========================================
  contact: {
    phone: "(+66)64-679-0680", // เบอร์โทรศัพท์ที่แสดงผล
    phoneHref: "tel:+66646790680", // ลิงก์สำหรับกดโทรออก
    location: "Bankok, Lat Phrao", // ที่อยู่หรือจังหวัด
    email: "dddwold38@gmail.com", // อีเมลที่แสดงผล
    emailHref: "https://mail.google.com/mail/u/0/#inbox", // ลิงก์สำหรับกดส่งอีเมล
    codepen: "codepen.io/phonnik430F", // ชื่อบัญชี CodePen
    codepenHref: "https://codepen.io/phonnik430", // ลิงก์ไปยังหน้าโปรไฟล์ CodePen
  },

  // ==========================================
  // 3. โซเชียลมีเดีย (Socials)
  // ==========================================
  socials: [
    {
      name: "Facebook", // ชื่อโซเชียล
      href: "https://www.facebook.com/akito.NakamuraMiyazaki", // ลิงก์ไปยังหน้าโปรไฟล์
      icon: <Facebook size={20} />, // ไอคอนที่ใช้
    },
    {
      name: "Github",
      href: "https://github.com/phonnik430",
      icon: <Github size={20} />,
    },
    {
      name: "Youtube",
      href: "-",
      icon: <Youtube size={20} />,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/akito_nakamuramiyazaki/",
      icon: <Instagram size={20} />,
    },

    {
      name: "Tiktok",
      href: "https://www.tiktok.com/@akitomiyazaki", // ลิงก์ไปยังหน้าโปรไฟล์ TikTok
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
        </svg>
      ),
    },
    
  ],

  // ==========================================
  // 4. สถิติภาพรวม (Quick Stats) - แสดงที่หน้าแรก
  // ==========================================
  stats: [
    { 
      label: "Experience", // หัวข้อสถิติ
      value: "5+", // ค่าตัวเลข/ข้อความที่ต้องการเน้น
      unit: "Years", // หน่วยของสถิติ
      icon: <Briefcase size={20} /> // ไอคอนประกอบ
    },
    { label: "Projects", value: "1+", unit: "Completed", icon: <FolderCode size={20} /> },
    { label: "Skills", value: "20+", unit: "Mastered", icon: <Star size={20} /> },
    { label: "Languages", value: "4", unit: "Fluent", icon: <Languages size={20} /> },
  ],

  // ==========================================
  // 5. ทักษะการเขียนโปรแกรม (Programming Skills)
  // ==========================================
  frontendSkills: [
    { 
      name: "HTML5 & PUG", // ชื่อภาษา/เครื่องมือ
      level: 80, // ระดับความเชี่ยวชาญ (0-100)
      color: "from-orange-400 to-orange-600" // สี Gradient (Tailwind Class)
    },
    { name: "CSS3 & SASS", level: 65, color: "from-blue-400 to-blue-600" },
    {
      name: "JavaScript (ES6+)",
      level: 75,
      color: "from-yellow-400 to-yellow-600",
    },
    { name: "TypeScript", level: 60, color: "from-blue-500 to-indigo-600" },
    { name: "React / Next.js", level: 70, color: "from-cyan-400 to-blue-500" },
    { name: "Tailwind CSS", level: 60, color: "from-teal-400 to-cyan-500" },
  ],

  backendSkills: [
    { name: "NodeJS", level: 75, color: "from-green-400 to-green-600" },
    { name: "Python", level: 95, color: "from-blue-600 to-yellow-400" },
    { name: "Lua", level: 75, color: "from-blue-400 to-blue-900" },
    { name: "PHP", level: 80, color: "from-purple-500 to-purple-700" },
    {
      name: "SQL (MySQL/PostgreSQL)",
      level: 40,
      color: "from-blue-700 to-indigo-800",
    },
    { name: "MongoDB", level: 40, color: "from-green-500 to-emerald-700" },
    { name: "Java", level: 50, color: "from-red-500 to-orange-600" },
    { name: "C# / .NET", level: 50, color: "from-purple-600 to-indigo-700" },
  ],

  // ==========================================
  // 6. ทักษะด้านซอฟต์แวร์ (Software Skills)
  // ==========================================
  softwareSkills: [
    { 
      name: "VS Code", // ชื่อโปรแกรม
      level: 95, // ระดับความเชี่ยวชาญ (0-100)
      color: "#007ACC" // สีหลักของโปรแกรม (Hex Code)
    },
    { name: "Adobe Photoshop", level: 80, color: "#31A8FF" },
    { name: "Adobe After Effects", level: 65, color: "#CF96FD" },
    { name: "Adobe Premiere Pro", level: 75, color: "#9999FF" },
    { name: "Blender (3D Modeling)", level: 50, color: "#EA7600" },
  ],

  // ==========================================
  // 7. สิ่งที่สนใจ (Interests) - เมนูนำทางหน้าแรก
  // ==========================================
  interests: [
    { 
      name: "Gaming", // ชื่อหัวข้อที่สนใจ
      icon: <Gamepad2 size={24} />, // ไอคอนที่ใช้
      href: "/gaming" // ลิงก์ไปยังหน้าย่อย
    },
    { name: "Music", icon: <Music size={24} />, href: "/music" },
    { name: "Coding", icon: <Code size={24} />, href: "/coding" },
    { name: "Learning", icon: <Book size={24} />, href: "/learning" },
  ],

  // ==========================================
  // 8. ประสบการณ์การทำงาน (Work Experience)
  // ==========================================
  experience: [
    {
      company: "Freelance Developer", // ชื่อบริษัทหรือสถานที่ทำงาน
      role: "Fullstack Developer", // ตำแหน่งงาน
      period: "2024 - Present", // ช่วงเวลาที่ทำงาน
      description: "Developing custom web applications and backend systems for various clients using Node.js, React, and Python.", // รายละเอียดงาน
      icon: <Code size={20} />, // ไอคอนประกอบ
    },
    {
      company: "Tech Solutions Co.",
      role: "Backend Intern",
      period: "2024 - Present",
      description: "Assisted in building scalable API services and database optimization using PostgreSQL and Node.js.",
      icon: <Cpu size={20} />,
    },
  ],

  // ==========================================
  // 9. การศึกษา (Education)
  // ==========================================
  education: [
    {
      school: "Assumption College Sriracha(ACS)", // ชื่อสถานศึกษา
      degree: "Grade 10 in the international program", // ระดับการศึกษา/สาขาวิชา
      period: "2024 - Present", // ปีที่ศึกษา
      description: "Focused on foreign language studies alongside software engineering, data structures, and database management systems..", // รายละเอียดการศึกษา
      icon: <GraduationCap size={20} />, // ไอคอนประกอบ
    },
    {
      school: "sakolraj wittayakhom school(SKR)", // ชื่อสถานศึกษา
      degree: "High School Diploma (English Program)", // ระดับการศึกษา/สาขาวิชา
      period: "2021 - 2023",
      description: "Focused on English language learning.",
      icon: <BookOpen size={20} />,
    },
    {
      school: "Online Certifications",
      degree: "Learning enhance your skills and advance",
      period: "Present",
      description: "Flexible learning opportunities to enhance your skills, advance your career, and broaden your opportunities to study at international universities.",
      icon: <BookOpen size={20} />,
    },
  ],

  // ==========================================
  // 10. สิ่งที่กำลังโฟกัส (Current Focus) - แสดงที่ Sidebar หน้าแรก
  // ==========================================
  currentFocus: [
    {
      title: "Next.js Mastery", // สิ่งที่กำลังศึกษาหรือโฟกัส
      description: "Deep diving into App Router and Server Components.", // รายละเอียดเพิ่มเติม
      progress: 80, // ความคืบหน้า (0-100)
      icon: <Target className="text-blue-400" size={18} />, // ไอคอนประกอบ
    },
    {
      title: "UI/UX Design",
      description: "Learning advanced animation techniques with Framer Motion.",
      progress: 60,
      icon: <PencilLine className="text-purple-400" size={18} />,
    },
    {
      title: "English Proficiency C2 and Chinese HSK 5", // สิ่งที่กำลังศึกษาหรือโฟกัส
      description: "Practicing grammar and vocabulary for C2 and HSK 5 levels.", // รายละเอียดเพิ่มเติม.",
      progress: 70,
      icon: <Languages className="text-rose-400" size={18} />,
    },
  ],

  // ==========================================
  // 11. ข้อมูลหน้า Gaming (Gaming Page)
  // ==========================================
  gamingPage: {
    title: "Gaming Life", // หัวข้อหลักของหน้า
    subtitle: "Exploring digital realms and mastering competitive strategies", // คำอธิบายหน้า
    games: [
      {
        name: "ROV (Arena of Valor)", // ชื่อเกม
        genre: "MOBA", // แนวเกม
        style: "ALL Lane / Strategic", // สไตล์การเล่น
        icon: <Sword className="text-rose-400" />, // ไอคอนประจำเกม
        rating: 5, // คะแนนความชอบ (0-5 ดาว)
      },
      {
        name: "Mobile Legends",
        genre: "MOBA",
        style: "Mid Lane / Carry",
        icon: <Star className="text-orange-400" />,
        rating: 4,
      },
      {
        name: "Minecraft",
        genre: "Sandbox",
        style: "Technical / Mods / RP",
        icon: <Box className="text-emerald-400" />,
        rating: 5,
      },
      {
        name: "Ace Combat 7: Skies Unknown",
        genre: "Story-Driven Action",
        style: "Flight Combat / Action Simulation",
        icon: <Trophy className="text-amber-400" />,
        rating: 5,
      },
    ],
  },

  // ==========================================
  // 12. ข้อมูลหน้า Music (Music Page)
  // ==========================================
  musicPage: {
    title: "Favorite Music", // หัวข้อหลักของหน้า
    subtitle: "My favorite genres and top tracks", // คำอธิบายหน้า
    genres: [
      { 
        name: "Pop Rap", // ชื่อแนวเพลง
        icon: <Disc className="text-purple-500" /> // ไอคอนแนวเพลง
      },
      { name: "Lo-fi / Chill", icon: <Radio className="text-blue-500" /> },
      { name: "J-Pop", icon: <Mic2 className="text-rose-500" /> },
    ],
    tracks: [
      {
        name: "Wiz Khalifa - See You Again ft. Charlie Puth [Official Video] Furious 7 Soundtrack", // ชื่อเพลง
        artist: "Wiz Khalifa - Charlie Puth", // ชื่อศิลปิน
        genre: "Pop Rap", // แนวเพลง
        audioUrl: "https://youtu.be/RgKAFK5djSk?si=5oqmeMnMF5AF0J3b", // ลิงก์เพลง (YouTube/Spotify)
      },
      {
        name: "End of thebeginning",
        artist: "Djo",
        genre: "indie pop",
        audioUrl: "https://youtu.be/xy3AcmW0lrQ?si=Px00KbsTgGbwB6VF",
      },
      {
        name: "Payphone",
        artist: "Maroon 5 ft. Wiz Khalifa",
        genre: "Pop Rap",
        audioUrl: "https://youtu.be/KRaWnd3LJfs?si=pKo-wSGvSrbJk7Zy",
      },
      {
        name: "Unconditionally",
        artist: "Katy Perry",
        genre: "Pop",
        audioUrl: "https://youtu.be/XjwZAa2EjKA?si=M_KO7Tl8c4wF5j9z",
      },

      {
        name: "Justin bieber-ghosts",
        artist: "Justin Bieber",
        genre: "Pop",
        audioUrl: "https://youtu.be/Fp8msa5uYsc?si=f2JaK7g4GjjpEPmt",
      },
    ],
  },

  // ==========================================
  // 13. ข้อมูลหน้า Coding (Coding Page)
  // ==========================================
  codingPage: {
    title: "Coding Projects", // หัวข้อหลัก
    subtitle: "Architecting robust solutions and innovative digital experiences", // คำอธิบายหน้า
    projects: [
      {
        name: " อังเปา (AngPao) - Digital Red Envelope System", // ชื่อโปรเจกต์
        icon: <Gift className="text-blue-400" />,
        desc: "A simple interactive web app that randomly generates rewards with weighted probabilities and animated UI feedback. Built with HTML, CSS, and JavaScript, it features a dynamic reward system and engaging animations to enhance user experience.", // คำอธิบายโปรเจกต์
        tech: " HTML, CSS , JavaScript ",
        link: "https://redenvelope999.netlify.app/", // ลิงก์ไปยังโปรเจกต์ (GitHub/Live Demo)
      },
    ], // รายการโปรเจกต์ (ยังไม่ได้ใส่ข้อมูล)
  },

  // ==========================================
  // 14. ข้อมูลหน้า Learning (Learning Page)
  // ==========================================
  learningPage: {
    title: "Self Learning", // หัวข้อหลัก
    subtitle: "Tracking my progress in new technologies and languages", // คำอธิบายหน้า
    sections: [
      {
        title: "Frontend Development", // หัวข้อส่วนการเรียนรู้
        skills: [
          {
            name: "HTML5 & PUG", // ชื่อสิ่งที่เรียน
            progress: 80, // ความคืบหน้า (0-100)
            icon: <Layout className="text-orange-500" />, // ไอคอนประกอบ
          },
          {
            name: "CSS3 & SASS",
            progress: 65,
            icon: <Layout className="text-blue-500" />,
          },
          {
            name: "JavaScript (ES6+)",
            progress: 75,
            icon: <Layout className="text-yellow-500" />,
          },
          {
            name: "TypeScript",
            progress: 60,
            icon: <Layout className="text-blue-600" />,
          },
          {
            name: "React / Next.js",
            progress: 70,
            icon: <Layout className="text-cyan-400" />,
          },
          {
            name: "Tailwind CSS",
            progress: 60,
            icon: <Layout className="text-teal-400" />,
          },
        ],
      },
      {
        title: "Backend Development",
        skills: [
          {
            name: "NodeJS",
            progress: 75,
            icon: <Database className="text-green-500" />,
          },
          {
            name: "Python",
            progress: 95,
            icon: <Database className="text-blue-600" />,
          },
          {
            name: "Lua",
            progress: 75,
            icon: <Database className="text-blue-400" />,
          },
          {
            name: "PHP",
            progress: 80,
            icon: <Database className="text-purple-500" />,
          },
          {
            name: "SQL (MySQL/PostgreSQL)",
            progress: 40,
            icon: <Database className="text-blue-700" />,
          },
          {
            name: "MongoDB",
            progress: 40,
            icon: <Database className="text-green-600" />,
          },
          {
            name: "Java",
            progress: 50,
            icon: <Database className="text-red-500" />,
          },
          {
            name: "C# / .NET",
            progress: 50,
            icon: <Database className="text-purple-600" />,
          },
        ],
      },
      {
        title: "Languages",
        skills: [
          {
            name: "Chinese (HSK 5 Level)",
            progress: 55,
            icon: <Languages className="text-rose-500" />,
          },
          {
            name: "English (Communication)",
            progress: 90,
            icon: <Languages className="text-blue-500" />,
          },
        ],
      },
    ],
  },

  // ==========================================
  // 15. ตั้งค่าเพลงพื้นหลัง (Background Music Settings)
  // ==========================================
  musicConfig: {
    url: "/music/Nightcore - Umbrella (Rock Version) (Lyrics).mp3", // ลิงก์ไฟล์เพลง (อ้างอิงจากโฟลเดอร์ public)
    volume: 0.02, // ระดับเสียงเริ่มต้น (0.01 - 1.0) แนะนำ 0.02 (2%)
    autoplayOnInteraction: true, // ให้เล่นอัตโนมัติเมื่อมีการขยับเมาส์หรือคลิก
    loop: true, // ให้เพลงเล่นวนซ้ำ
  },

  // ==========================================
  // 16. ตั้งค่าหน้า 404 (Not Found Page)
  // ==========================================
  notFoundPage: {
    image: "https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif", // รูปที่แสดงในหน้า 404
    title: "Look like you're lost", // หัวข้อหลัก
    description: "the page you are looking for not avaible!", // คำอธิบาย
    buttonText: "Go to Home", // ข้อความบนปุ่ม
    buttonLink: "/", // ลิงก์เมื่อกดปุ่ม
  },

  // 17. ตั้งค่า Metadata ของเว็บไซต์ (Site Metadata)
  siteMetadata: {
    title: "My Resume Code By Akito", // ชื่อที่แสดงบนแท็บ Browser
    description: "Personal Resume Website", // คำอธิบายเว็บไซต์
    favicon: "/favicon.ico", // พาธของรูปไอคอน (วางไว้ในโฟลเดอร์ public)
  },
};
