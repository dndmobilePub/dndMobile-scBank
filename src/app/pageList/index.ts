export type Status = "Complete" | "In Progress" | "Pending" | "Review";

export interface PageItem {
  id: number;
  category: string;
  pageName: string;
  path: string;
  status: Status;
  completionDate: string;
  worker: string;
  memo: string;
}

export const PAGES_DATA: PageItem[] = [
  {
    id: 1,
    category: "Common",
    pageName: "Layout / Navigation",
    path: "/layout",
    status: "Complete",
    completionDate: "2026-03-20",
    worker: "Admin",
    memo: "Global header and footer",
  },
  {
    id: 2,
    category: "Main",
    pageName: "Main Landing",
    path: "/",
    status: "Complete",
    completionDate: "2026-03-22",
    worker: "Admin",
    memo: "Hero section and featured work",
  },
  {
    id: 3,
    category: "Auth",
    pageName: "Login",
    path: "/login",
    status: "In Progress",
    completionDate: "-",
    worker: "Dev",
    memo: "Form validation pending",
  },
  {
    id: 4,
    category: "Auth",
    pageName: "Sign Up",
    path: "/signup",
    status: "Pending",
    completionDate: "-",
    worker: "Dev",
    memo: "Awaiting design assets",
  },
  {
    id: 5,
    category: "Dashboard",
    pageName: "User Overview",
    path: "/dashboard",
    status: "Review",
    completionDate: "2026-03-25",
    worker: "Admin",
    memo: "Feedback requested on charts",
  },
  {
    id: 6,
    category: "Dashboard",
    pageName: "Settings",
    path: "/settings",
    status: "Complete",
    completionDate: "2026-03-28",
    worker: "Admin",
    memo: "Profile and security tabs",
  },
  {
    id: 7,
    category: "Content",
    pageName: "Article Detail",
    path: "/blog/:id",
    status: "In Progress",
    completionDate: "-",
    worker: "Dev",
    memo: "Responsive layout check",
  },
  {
    id: 8,
    category: "Content",
    pageName: "Archive List",
    path: "/archive",
    status: "Complete",
    completionDate: "2026-03-29",
    worker: "Admin",
    memo: "Pagination implemented",
  },
];
