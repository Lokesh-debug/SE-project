import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import PublishIcon from '@material-ui/icons/Publish';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CollectionsIcon from '@material-ui/icons/Collections';
import DraftsIcon from '@material-ui/icons/Drafts';
export const Sidebardata =[
  {
      title:"home",
      icon: <HomeIcon/> ,
      link: "/home"
  },
  {
    title:"Notifications",
    icon: <NotificationsActiveIcon/> ,
    link: "/home"
  },
  {
    title:"Mailbox",
    icon: <DraftsIcon/> ,
    link: "/home"
  },
  {
    title:"examscores",
    icon: <PublishIcon/> ,
    link: "/home"
  },
  {
    title:"Location",
    icon: <LocationOnIcon/> ,
    link: "/home"
  },
  {
    title:"colections",
    icon: <CollectionsIcon/> ,
    link: "/home"
  },
  {
    title:"Account",
    icon: <AccountCircleIcon/> ,
    link: "/home"
  }


]
