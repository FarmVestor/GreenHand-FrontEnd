/**
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/** 
  All of the routes for the Material Kit 2 React React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Navbar.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `name` key is used for the name of the route on the Navbar.
  2. The `icon` key is used for the icon of the route on the Navbar.
  3. The `collapse` key is used for making a collapsible item on the Navbar that contains other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  4. The `route` key is used to store the route location which is used for the react router.
  5. The `href` key is used to store the external links location.
  6. The `component` key is used to store the component of its route.
  7. The `dropdown` key is used to define that the item should open a dropdown for its collapse items .
  8. The `description` key is used to define the description of
          a route under its name.
  9. The `columns` key is used to define that how the content should look inside the dropdown menu as columns,
          you can set the columns amount based on this key.
  10. The `rowsPerColumn` key is used to define that how many rows should be in a column.
*/
// @mui material components
import { AccessAlarm, Add, ThreeDRotation } from '@mui/icons-material';



import Farmers from "layouts/pages/Farmers/MyFarms/index"
import Deals from "layouts/pages/Farmers/MyDeals/index"
import AddDeal from "layouts/pages/Farmers/MyDeals/AddDeal"
import EditDeal from "layouts/pages/Farmers/MyDeals/EditDeal"
import AddFarm from "layouts/pages/Farmers/MyFarms/AddFarm"
import EditFarm from "layouts/pages/Farmers/MyFarms/EditFarm"
import Trush from "layouts/pages/Farmers/MyTrash"

// @mui material components
import Icon from "@mui/material/Icon";

// @mui icons
import GitHubIcon from "@mui/icons-material/GitHub";
import FarmDescription from 'layouts/pages/Farms/farmDescription'
import InvestorDescription from 'layouts/pages/Investors/InvestorDescription'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

// Pages
import AboutUs from "layouts/pages/landing-pages/about-us";
import ContactUs from "layouts/pages/landing-pages/contact-us";
import Author from "layouts/pages/landing-pages/author";
import SignIn from "layouts/pages/Sign-in";
// Sections

//investor routes
import Investors from "layouts/pages/Investors"
import SignOut from "layouts/pages/sign-out/index";
import UserProfile from "layouts/pages/Profile/Profile";
import AddRequest from "layouts/pages/Investors/MyRequests/AddRequests";
import EditRequest from "layouts/pages/Investors/MyRequests/EditRequest";
import InvestorDeals from "layouts/pages/Investors/MyDeals/index";
import InvestorAddDeal from "layouts/pages/Investors/MyDeals/AddDeal";
import InvestorEditDeal from "layouts/pages/Investors/MyDeals/EditDeal";
import Trash from 'layouts/pages/Investors/trash';


import Farms from "layouts/pages/Farms"
import Home from "layouts/pages/Home"
import SignUp from "layouts/pages/Sign-up/index";
import {useContext} from "react"
import { AuthContext } from "context/AuthContext";
import Requests from 'layouts/pages/Investors/MyRequests';

function MyRoutes (){
  const ctx=useContext(AuthContext)
  console.log("ctxxx",ctx)
  const routes = [
    {
      name: "Home",
      icon: <GitHubIcon />,
      route: "/presentation",
      component: <Home />,
    },
    {
      name: "Find",
      icon: <Icon>dashboard</Icon>,
  
  
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
      name: "About",
      icon: <Icon>dashboard</Icon>,
  
  
      collapse: [
        {
          name: "About us",
          route: "/pages/landing-pages/about-us",
          component: <AboutUs />,
        },
        {
          name: "Contact",
          route: "/pages/landing-pages/contact-us",
          component: <ContactUs />,
        },
      
      ],
    },
    {
      name: "Guide",
      icon: <GitHubIcon />,
      route: "/presentation",
      component: <Home />,
    },
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




  if(ctx.userTypeId==2){
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
      route: "Profile",
      component: <SignIn />,
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
      name: "My Trush",
      route: "/My_Trush",
      component: <Trush />,
    },
    {
      name: "Sign out",
      route: "/Sign-out",
      component: <SignIn />,
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


  }else if(ctx.userTypeId==3){
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

// const routes = [
//   {
//     name: "Home",
//     icon: <GitHubIcon />,
//     route: "/presentation",
//     component: <Home />,
//   },
//   {
//     name: "Find",
//     icon: <Icon>dashboard</Icon>,


//     collapse: [
//       {
//         name: "Find Farms",
//         route: "/farms",
//         component: <Farms />,
//       },
//       {
//         name: "Find Investors",
//         route: "/investors",
//         component: <Investors />,
//       },
//       {
//         name: "Find Agents",
//         route: "/pages/landing-pages/author",
//         component: <Author />,
//       },
//     ],
//   },
//   {
//     name: "About",
//     icon: <Icon>dashboard</Icon>,


//     collapse: [
//       {
//         name: "About us",
//         route: "/pages/landing-pages/about-us",
//         component: <AboutUs />,
//       },
//       {
//         name: "Contact",
//         route: "/pages/landing-pages/contact-us",
//         component: <ContactUs />,
//       },
    
//     ],
//   },
//   {
//     name: "Guide",
//     icon: <GitHubIcon />,
//     route: "/presentation",
//     component: <Home />,
//   },
//   {
//     name: "Account",
//     icon: <Icon>dashboard</Icon>,


//     collapse: [
//       {
//         name: "Sign-In",
//         route: "/Sign-in",
//         component: <SignIn />,
//       },
//       {
//         name: "Sign-Up",
//         route: "/Sign-Up",
//         component: <SignUp />,
//       },
      
//     ],
//   },

  
// ];

// export default routes;

// export const greenhand = [
//   {
//     name: "farms/description",
//     icon: <GitHubIcon />,
//     route: "/farms/description/:id",
//     component: <FarmDescription />,
//   },
//   {
//     name: "investor/description",
//     icon: <GitHubIcon />,
//     route: "/investor/description/:id",
//     component: <InvestorDescription />,
//   },
// ]
