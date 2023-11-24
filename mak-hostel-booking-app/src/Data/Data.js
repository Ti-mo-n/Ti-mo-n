import DashboardIcon from "@mui/icons-material/Dashboard";
import BookIcon from "@mui/icons-material/Book";
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import AnalyticsIcon from "@mui/icons-material/Analytics";
import SettingsIcon from "@mui/icons-material/Settings";
// import LogoutIcon from '@mui/icons-material/Logout';
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import {deepOrange, deepPurple } from "@mui/material/colors";


export const sidebarData = [
  {
    icon: DashboardIcon,
    heading: "Dashboard",
    to: "/",
  },
  {
    icon: BookIcon,
    heading: "Bookings",
    to: "/bookings",
  },
  {
    icon: MapsHomeWorkIcon,
    heading: "Hostel details",
    to: "/HostelDetails",
  },
  {
    icon: AnalyticsIcon,
    heading: "Manage",
    to: "/RoomManagement",
  },
  {
    icon: SettingsIcon,
    heading: "Settings",
    to: "/editpage",
  },
 
];

export const CardsData = [
  {
    title: "(45) Pending Bookings",
    color: "linear-gradient(180deg, rgba(0, 123, 255, 0.7) 0%, rgba(0, 86, 179, 0.7) 100%)",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    titleColor: "#FFFFFF",
    numberColor: "#FFFFFF",
  },
  {
    title: " (124) Cleared Bookings",
    color: "linear-gradient(180deg, rgba(0, 123, 255, 0.7) 0%, rgba(0, 86, 179, 0.7) 100%)",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    titleColor: "#FFFFFF",
    numberColor: "#FFFFFF",
  },
  {
    title: "Lastest",
    color: "linear-gradient(180deg, rgba(0, 123, 255, 0.7) 0%, rgba(0, 86, 179, 0.7) 100%)",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    titleColor: "#FFFFFF",
    numberColor: "#FFFFFF",
  },
];







export const NotificationsData = [
  {
    img: <Avatar>JD</Avatar>,
    name: "John Doe",
    noti: "has sent UGX 100,000 for booking",
    time: "2 minutes ago",
  },
  {
    img: <Avatar sx={{ bgcolor: deepOrange[500] }}>JS</Avatar>,
    name: "Jane Smith",
    noti: "has sent UGX 100,000 for booking",
    time: "38 minutes ago",
  },
  {
    img: <Avatar sx={{ bgcolor: deepPurple[500] }}>SB</Avatar>,
    name: "Sam Brown",
    noti: "has sent UGX 100,000 for booking",
    time: "3 hours ago",
  },
  {
    img: <Avatar sx={{ bgcolor: deepPurple[500] }}>SB</Avatar>,
    name: "Sam Brown",
    noti: "has sent UGX 100,000 for booking",
    time: "3 hours ago",
  },
];

// const Notifications = () => {
//     return (
//         <div>
//             {NotificationsData.map((update, id) => {
//                 return (
//                     <div key={id}>
//                         {update.icon}
//                         <div>
//                             <p>{update.name}</p>
//                             <p>{update.noti}</p>
//                             <p>{update.time}</p>
//                         </div>
//                     </div>
//                 );
//             })}
//         </div>
//     );
// };

// export default Notifications;

export const ReviewsData = [
  {
    icon: <Avatar sx={{ bgcolor: deepPurple[500] }}>JD</Avatar>,
    name: "John Doe",
    rating: 3,
    comment: "Looks good! Better shortlist it",
  },
  {
    icon: <Avatar>JS</Avatar>,
    name: "Jane Smith",
    rating: 1,
    comment: "Water system is so terrible",
  },
  {
      icon: <Avatar sx={{ bgcolor: deepOrange[500] }}>SB</Avatar>,
      name: 'Sam Brown',
      rating: 5,
      comment: 'The best Hostel I have seen',
  },
];
