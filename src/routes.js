
//farmer routes
import Deals from "layouts/pages/Farmers/MyDeals/index"
import AddDeal from "layouts/pages/Farmers/MyDeals/AddDeal"
import EditDeal from "layouts/pages/Farmers/MyDeals/EditDeal"
import AddFarm from "layouts/pages/Farmers/MyFarms/AddFarm"
import EditFarm from "layouts/pages/Farmers/MyFarms/EditFarm"
import MyTrash from "layouts/pages/Farmers/MyTrash"
import Profile from 'layouts/pages/Profile/Profile';
import Farmers from "layouts/pages/Farmers/MyFarms"
//investor routes
import Investors from "layouts/pages/Landing/AllInvestors"
import SignOut from "layouts/pages/sign-out/index";
import UserProfile from "layouts/pages/Profile/Profile";
import AddRequest from "layouts/pages/Investors/MyRequests/AddRequests";
import EditRequest from "layouts/pages/Investors/MyRequests/EditRequest";
import InvestorDeals from "layouts/pages/Investors/MyDeals/index";
import InvestorAddDeal from "layouts/pages/Investors/MyDeals/AddDeal";
import InvestorEditDeal from "layouts/pages/Investors/MyDeals/EditDeal";
import Trash from 'layouts/pages/Investors/trash';
// import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Requests from 'layouts/pages/Investors/MyRequests';


// @mui material components
import Icon from "@mui/material/Icon";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import LoginIcon from '@mui/icons-material/Login';
// @mui icons
import GitHubIcon from "@mui/icons-material/GitHub";
import FarmDescription from 'layouts/pages/Landing/AllFarms/farmDescription'
import InvestorDescription from 'layouts/pages/Landing/AllInvestors/InvestorDescription'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

// Pages
import AboutUs from "layouts/pages/landing-pages/about-us";
import ContactUs from "layouts/pages/landing-pages/contact-us";
import Author from "layouts/pages/landing-pages/author";
import SignIn from "layouts/pages/Sign-in";
// Sections

// //investor routes
// import Investors from "layouts/pages/Landing/AllInvestors"
// import SignOut from "layouts/pages/sign-out/index";
// import UserProfile from "layouts/pages/Profile/Profile";
// import AddRequest from "layouts/pages/Investors/MyRequests/AddRequests";
// import EditRequest from "layouts/pages/Investors/MyRequests/EditRequest";
// import InvestorDeals from "layouts/pages/Investors/MyDeals/index";
// import InvestorAddDeal from "layouts/pages/Investors/MyDeals/AddDeal";
// import InvestorEditDeal from "layouts/pages/Investors/MyDeals/EditDeal";
// import Trash from 'layouts/pages/Investors/trash';

// Sections

import Farms from "layouts/pages/Landing/AllFarms/index"
import Home from "layouts/pages/Home"
import SignUp from "layouts/pages/Sign-up";
import {useContext} from "react"
import { AuthContext } from "context/AuthContext";

function MyRoutes (){
  const ctx=useContext(AuthContext)
  console.log("ctxxx",ctx)
  const routes = [
    {
      name: "Home",
      icon: <HomeIcon />,
      route: "/presentation",
      component: <Home />,
    },
    {
      name: "Find",
      icon: <SearchIcon/>,
  
  
      collapse: [
        {
          name: "Find Farms",
          route: "/farms",
          component: <Farms />,
        },
        {
          name: "Find Investors",
          route: "/investors",
          component: <Investors />,
        },
        {
          name: "Find Agents",
          route: "/pages/landing-pages/author",
          component: <Author />,
        },
      ],
    },
    
    {
      name: "Guide",
      icon: <MenuBookIcon />,
      route: "/presentation",
      component: <Home />,
    },
    {
      name: "Account",
      icon: <GroupAddIcon/>,
  
  
      collapse: [
        {
          name: "Sign-In",
          route: "/Sign-in",
          icon:<LoginIcon/>,
          component: <SignIn />,
        },
        {
          name: "Sign-Up",
          route: "/Sign-Up",
          component: <SignUp />,
        },
        
      ],
    },
  
    
  ];
  
  
   const greenhand = [
    {
      name: "farms/description",
      icon: <GitHubIcon />,
      route: "/farms/description/:id",
      component: <FarmDescription />,
    },
    {
      name: "investor/description",
      icon: <GitHubIcon />,
      route: "/investor/description/:id",
      component: <InvestorDescription />,
    },
  ]


  if(window.localStorage.getItem("userTypeId")==2){
    routes.pop(
      {
        name: "Account",
        icon: <Icon>dashboard</Icon>,
    
    
        collapse: [
          {
            name: "Sign-In",
            route: "/Sign-in",
            component: <SignIn />,
          },
          {
            name: "Sign-Up",
            route: "/Sign-Up",
            component: <SignUp />,
          },
          
        ],
      },
    )
routes.push({
  // name: "Account",
  icon: <Icon fontSize="small">account_circle</Icon>,

  collapse: [
    {
      name: "Profile",
      route: "/Profile",
      component: <Profile />,
    },
    {
      name: "My Farms",
      route: "/My_Farms",
      component: <Farmers />,
    },
    {
      name: "My Deals",
      route: "/My_deals",
      component: <Deals />,
    },
    {
      name: "My Trash",
      route: "/My_Trash",
      component: <MyTrash />,
    },
    {
      name: "Sign out",
      route: "/Sign-out",
      component: <SignOut />,
    },
    
  ],
  
},
)
greenhand.push({
  name: "deal/add",
  icon: <GitHubIcon />,
  route: "/deal/add",
  component: <AddDeal />,
},
{
  name: "deal/edit",
  icon: <GitHubIcon />,
  route: "/deal/edit/:id",
  component: <EditDeal />,
},
{
  name: "farm/add",
  icon: <GitHubIcon />,
  route: "/farm/add",
  component: <AddFarm />,
},
{
  name: "farm/edit",
  icon: <GitHubIcon />,
  route: "/farm/edit/:id",
  component: <EditFarm />,
},)


  }else if(window.localStorage.getItem("userTypeId")==3){
    routes.pop(
      {
        name: "Account",
        icon: <Icon>dashboard</Icon>,
    
    
        collapse: [
          {
            name: "Sign-In",
            route: "/Sign-in",
            component: <SignIn />,
          },
          {
            name: "Sign-Up",
            route: "/Sign-Up",
            component: <SignUp />,
          },
          
        ],
      },
    )
    routes.push(
      {
        //name: "Accountttt",
        icon: <AccountCircleOutlinedIcon/>,
    
    
        collapse: [
          {
            name: "Profile",
            route: "/profile",
            component: <UserProfile />,
          },
          {
            name: "My Requests",
            route: "/my-requests",
            component: <Requests />,
          },
          {
            name: "My Deals",
            route: "/my-deals",
            component: <InvestorDeals />,
          },
          {
            name: "My Trash",
            route: "/my-trash",
            component: <Trash />,
          },
          {
            name: "Sign-out",
            route: "/sign-out",
            component: <SignOut />,
          },
          
        ],
      },
    )
    greenhand.push(
      {
        name: "requests/add",
        icon: <GitHubIcon />,
        route: "/requests/add/:id",
        component: <AddRequest />,
      },
      {
        name: "requests/edit",
        icon: <GitHubIcon />,
        route: "/requests/edit/:id",
        component: <EditRequest />,
      },
      {
        name: "deals/add",
        icon: <GitHubIcon />,
        route: "/deals/add/:id",
        component: <InvestorAddDeal />,
      },
      {
        name: "deal/edit",
        icon: <GitHubIcon />,
        route: "/deals/edit/:id",
        component: <InvestorEditDeal />,
      },
    )

  }
  
return [routes,
  greenhand]
}
export default MyRoutes;
