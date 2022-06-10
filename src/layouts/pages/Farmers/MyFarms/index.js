
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import { green } from '@mui/material/colors';
import { red } from '@mui/material/colors';

// Material Kit 2 React components
import MKBox from "components/MKBox";
import { Link } from 'react-router-dom'
// Material Kit 2 React examples
import MKButton from "components/MKButton";
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import Profile from "pages/LandingPages/Author/sections/Profile";
import Posts from "pages/LandingPages/Author/sections/Posts";
import Contact from "pages/LandingPages/Author/sections/Contact";
import Footer from "pages/LandingPages/Author/sections/Footer";
import bgImage from "assets/images/city-profile.jpg";
import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";
import BackgroundBlogCard from "examples/Cards/BlogCards/BackgroundBlogCard";

import Card from "@mui/material/Card";
import { useRequest } from "../../../../lib/functions";
import { AuthContext } from "context/AuthContext";


import { useEffect, useState, useContext } from "react";


export default function Farmers() {

  const request = useRequest()
  const [farmsData, setFarmsData] = useState([])
  const ctx = useContext(AuthContext)

  const deleteFarm = (farmId) => {
    if (window.confirm('Are you sure')) {
        request(`${process.env.REACT_APP_API_URL}farms/${farmId}?deleted=${1}`, {}, {}, {
            auth: true,
            snackbar: true
        }, 'delete').then(data => {
            console.log("data",data?.messages)
            const updatedRows=farmsData.filter((farmsData)=>farmsData.id != farmId)
            setFarmsData(updatedRows)
        })
    }

}
console.log("ctx.userIdOOOOOOOO)",window.localStorage.getItem('userId'))
  useEffect(() => {
    let fetchFarm = async () => {
      await request(`${process.env.REACT_APP_API_URL}farms`, {}, null, {
        auth: true,
      }, 'get')
        .then(farms => {
          setFarmsData(farms?.data)
          console.log("farms of user 9", farms)

        })
    }
    fetchFarm()
  }, [])

  return (
    <Card>
      <MKBox component="section" py={6} my={6}>
      <Grid  height={"2vh"} item xs={12} md={8} sx={{ mb: 6 }}>
          </Grid>
        <Container>
          <Grid container item xs={19} spacing={3} alignItems="center" sx={{ mx: "auto" }}>

            <MKBox bgColor="white">
              <Link to='/farm/add'>
                {/* <MKButton variant="text"> */}
                  <Icon fontSize="large"
                    sx={{ color: green[500] }}>add_circle</Icon>
                {/* </MKButton> */}
              </Link>
              {/* <Link to='/farm/add'>
                <Icon
                    baseClassName="fas"
                    className="fa-plus-circle"
                    fontSize="large"
                    sx={{ color: green[500] }}
                    // onClick={() => {
                    //   console.log("I'm a button.");
                    //   }}
                    />
            </Link> */}
              <Card

                sx={{
                  p: 2,
                  mx: { xs: 2, lg: 3 },
                  mt: 5,
                  mb: 4,
                  backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
                  backdropFilter: "saturate(200%) blur(30px)",
                  boxShadow: ({ boxShadows: { xxl } }) => xxl,
                }}

              >

                <Grid container spacing={3}>
                  {farmsData?.map((farm, i) => {
                    return (
                      <Grid item xs={12} sm={6} lg={3}>
                        <Link to={`/farms/description/${farm.id}`}>
                          <TransparentBlogCard
                            image={farm.farmPicture}
                            description={farm.farmName}
                            title={farm.FarmKind?.farmKind}
                            action={{
                              type: "internal",
                              route: `/farms/description/${farm.id}`,
                              color: "info",
                              label: "read more",
                            }}
                          />
                          </Link>
                          <Link to={`/farm/edit/${farm.id}`}>
                            <Icon fontSize="small" sx={{ color: green[300] }}>modeEdit</Icon>
                          </Link>

                          <Icon fontSize="small" sx={{ color: red[300] }} 
                          onClick={()=>{
                            deleteFarm(farm.id)}
                          }
                          >delete</Icon>


                        
                      </Grid>


                    )
                  })}

                </Grid>

              </Card>

            </MKBox>
          </Grid>
        </Container>
      </MKBox>
    </Card>
  )
}