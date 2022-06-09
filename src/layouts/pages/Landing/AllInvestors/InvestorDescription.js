
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { FarmLocation } from "context/FarmLocation";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples

import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";
import BackgroundBlogCard from "examples/Cards/BlogCards/BackgroundBlogCard";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import bgImage from "assets/images/examples/blog2.jpg";

// Images
import TableCell from '@mui/material/TableCell';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableContainer from '@mui/material/TableContainer';
// Images
import bgFront from "assets/images/bg.jpg";
import bgBack from "assets/images/bg.jpg";
import Card from "@mui/material/Card";
import { useRequest } from "lib/functions";

import React, { useEffect, useState, useContext, useRef } from "react";
import { useParams } from "react-router-dom";
import { Crop } from "@mui/icons-material";


export default function InvestorDescription() {
    const request = useRequest()
    const [usersData, setUsersData] = useState([])

    const { id } = useParams()

    useEffect(() => {
        request(`${process.env.REACT_APP_API_URL}users/show/${id}`, {}, null, {
            // auth: true,
        }, 'get')
            .then(investor => {
                setUsersData(investor?.data)
                console.log("investor desc", investor)
            })
    }, [])

    return (
        <Card>
            {console.log("usersData", usersData)}

            <MKBox component="section" py={8} my={6}>
                <Container>
                    <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
                        <Grid container spacing={3} alignItems="center">

                            <Grid item xs={12} lg={9}>
                                <MKBox component="form" p={2} method="post">
                                    <MKBox px={3} py={{ xs: 2, sm: 6 }}>
                                        <MKTypography variant="h2" mb={1}>
                                            {usersData?.userName}
                                        </MKTypography>
                                        <MKTypography variant="body1" color="text" mb={1}>
                                        User Phone number: {usersData?.userPhone}
                                        </MKTypography>
                                        <MKTypography variant="body1" color="text" mb={1}>
                                        User Email: {usersData?.userEmail}
                                        </MKTypography>
                                    </MKBox>
                                    <MKBox pt={0.5} pb={3} px={3}>
                                        <Grid container>
                                          

                                            {usersData?.Requests?.map((request, i) => {
                                                return (
                                                    <Grid item xs={12} pr={1} mb={6}>
                                                    <TableContainer sx={{ width: "100%" }}>
                                                        <Table style={{backgroundColor:"#ECFFDC"}}  aria-label="simple table">
                                                            <TableHead>
                                                                <TableRow>
                                                                    <TableCell>Request {i+1}</TableCell>
                                                                    <TableCell align="right"></TableCell>
                                                                </TableRow>
                                                            </TableHead>
                                                            <TableBody>

                                                                <TableRow key="ds"
                                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                                <TableCell component="th" scope="row">
                                                                    budget:
                                                                </TableCell>
                                                                <TableCell component="th" scope="row">
                                                                    {request?.budget}
                                                                </TableCell>
                                                            </TableRow>

                                                            <TableRow key="ds"
                                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                                <TableCell component="th" scope="row">
                                                                    Farm Area:
                                                                </TableCell>
                                                                <TableCell component="th" scope="row">
                                                                    {request?.farmArea}
                                                                </TableCell>
                                                            </TableRow>

                                                            <TableRow key="ds"
                                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                                <TableCell component="th" scope="row">
                                                                    Farm Kind:
                                                                </TableCell>
                                                                <TableCell component="th" scope="row">
                                                                    {request?.FarmKind?.farmKind}
                                                                </TableCell>
                                                            </TableRow>

                                                            <TableRow key="ds"
                                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                                <TableCell component="th" scope="row">
                                                                    crops:
                                                                </TableCell>
                                                                <TableCell component="th" scope="row">
                                                                    {request?.Crop?.cropName}
                                                                </TableCell>
                                                            </TableRow>

                                                        </TableBody>
                                                    </Table>
                                                </TableContainer>
                                            </Grid>
                                                )
                                            })}



                                        </Grid>
                                    </MKBox>
                                </MKBox>
                            </Grid>
                        </Grid>

                    </Grid>
                </Container>
            </MKBox>

        </Card>
    )
}