import { BookDashed, GraduationCap, Layers2, NotebookTabs, NotepadText, Rss, User, User2, UserCheck } from "lucide-react";

export const adminBody = [
    {label: 'Users', href: '/dashboard/uni-stuff', icon: <User size={16} />},
    {label: 'New User', href: '/dashboard/create-user', icon: <User2 size={16} />},
    {label: 'blog', href: '/dashboard/blog', icon: <Rss size={16} />},
];

export const proffBody = [
  {label: 'Courses', href: '/professor/courses', icon: <NotebookTabs size={16} />},
  {label: 'Assignments', href: '/professor/assignments', icon: <NotepadText size={16} />},
  {label: 'Grades', href: '/professor/grades', icon: <GraduationCap size={16} />},
];

export const teacherBody = [
  {label: 'Labs', href: '/teacher/labs', icon: <Layers2 size={16} />},
  {label: 'Attendence', href: '/teacher/attendence', icon: <UserCheck size={16} />},
  {label: 'Materials', href: '/teacher/materials', icon: <BookDashed size={16} />},
];

export const studentBody = [
  {label: 'Materials', href: '/student/materials', icon: <BookDashed size={16} />},
  {label: 'Courses', href: '/student/courses', icon: <NotebookTabs size={16} />},
  {label: 'Assignments', href: '/student/assignments', icon: <NotepadText size={16} />},
  {label: 'Labs', href: '/student/labs', icon: <Layers2 size={16} />},
  {label: 'Grades', href: '/student/grades', icon: <GraduationCap size={16} />},
];