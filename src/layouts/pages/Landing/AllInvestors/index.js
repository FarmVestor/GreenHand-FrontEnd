
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import { Link, useParams } from 'react-router-dom'
// Material Kit 2 React examples
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

// Images
import post1 from "assets/images/examples/testimonial-6-2.jpg";
import post2 from "assets/images/examples/testimonial-6-3.jpg";
import post3 from "assets/images/examples/blog-9-4.jpg";
import post4 from "assets/images/examples/blog2.jpg";


// Images
import bgFront from "assets/images/bg.jpg";
import bgBack from "assets/images/bg.jpg";
import Card from "@mui/material/Card";
import { useRequest } from "lib/functions";

import { useEffect, useState, useContext } from "react";


export default function Investors() {

  const request = useRequest()
  const [invisitorsData, setInvisitorsData] = useState([]) 
  const id = 3

  useEffect(() => {
    request(`${process.env.REACT_APP_API_URL}users/all`, {}, null, {
    }, 'get')
      .then(invisitors => {
        setInvisitorsData(invisitors?.data)
        console.log("dddddd", invisitors)

      })
  }, [])


  return (
    <Card>
      <MKBox component="section" py={6} my={6}>
        <Container>
          <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
            <MKBox bgColor="white">
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
                  {invisitorsData?.map((invisitor, i) => {
                    return (
                      <Grid item xs={12} sm={6} lg={3}>
                        <Link to={`/investor/description/${invisitor.id}`}>
                          <TransparentBlogCard
                            image={bgBack}
                            description={invisitor?.userEmail}
                            title={invisitor?.userName}
                            action={{
                              type: "internal",
                              route: `/investor/description/${invisitor.id}`,
                              color: "info",
                              label: "read more",
                            }}
                          />

                        </Link>
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