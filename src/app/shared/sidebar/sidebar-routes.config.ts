import { RouteInfo } from './sidebar.metadata';

//Sidebar menu Routes and data
export const ROUTES: RouteInfo[] = [

    { path: 'dashboard', title: 'Dashboard', icon: 'bx bx-home-circle', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },

    { path: 'staff', title: 'Staff', icon: 'bx bx-message-square-edit', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    // {path: 'user-management', title: 'Users', icon: 'bx bxs-group', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []},
    {
        path: 'users', title: 'Users', icon: 'bx bxs-group', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: 'user-management', title: 'All Users', icon: 'bx bxs-group', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: 'report-video', title: 'Reported Video', icon: 'bx bxs-group', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },

    {
        path: '', title: 'Transitions', icon: 'bx bx-home-circle', class: 'sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
            { path: 'manage-role', title: 'Manage Role', icon: 'bx bxs-group', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },



];