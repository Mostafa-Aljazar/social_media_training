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
  Settings,
} from 'lucide-react';

interface Footer_Item {
  id: number;
  name: string;
  link: string;
  icon: React.ReactNode;
}

export const Footer_Menu_List: Footer_Item[] = [
  { id: 1, name: 'Home', link: ROUTES.HOME, icon: <House size={20} /> },
  { id: 2, name: 'Explore', link: ROUTES.EXPLORE, icon: <Search size={20} /> },
  {
    id: 3,
    name: 'Notification',
    link: ROUTES.NOTIFICATION,
    icon: <Bell size={20} />,
  },
  { id: 4, name: 'Messages', link: ROUTES.MESSAGES, icon: <Mail size={20} /> },
  {
    id: 5,
    name: 'Bookmarks',
    link: ROUTES.BOOKMARKS,
    icon: <Bookmark size={20} />,
  },
  {
    id: 6,
    name: 'Add Post',
    link: ROUTES.ADD_POST,
    icon: <SquarePen size={20} />,
  },
  {
    id: 7,
    name: 'Settings',
    link: ROUTES.SETTINGS,
    icon: <Settings size={20} />,
  },
] as const;
