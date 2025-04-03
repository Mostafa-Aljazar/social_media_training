import { ROUTES } from '../routes';
import {
  Ellipsis,
  House,
  Search,
  Bell,
  Mail,
  Bookmark,
  CircleUserRound,
  SquarePen,
  X,
} from 'lucide-react';

interface MenuItem {
  id: number;
  name: string;
  link: string;
  icon: React.ReactNode;
}

export const Nav_Menu_List: MenuItem[] = [
  { id: 1, name: 'Home', link: ROUTES.HOME, icon: <House size={20} /> },
  { id: 2, name: 'Explore', link: ROUTES.EXPLORE, icon: <Search size={20} /> },
  { id: 3, name: 'Notification', link: ROUTES.NOTIFICATION, icon: <Bell size={20} /> },
  { id: 4, name: 'Messages', link: ROUTES.MESSAGES, icon: <Mail size={20} /> },
  { id: 5, name: 'Bookmarks', link: ROUTES.BOOKMARKS, icon: <Bookmark size={20} /> },
  { id: 6, name: 'Profile', link: ROUTES.PROFILE, icon: <CircleUserRound size={20} /> },
  { id: 7, name: 'Add Post', link: ROUTES.ADD_POST, icon: <SquarePen size={20} /> },
  { id: 8, name: 'More', link: ROUTES.MORE, icon: <Ellipsis size={20} /> },
] as const;
