
// @mui material components
import './map.css'

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { FarmLocation } from "context/FarmLocation";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import MKTypography from "components/MKTypography";

import Card from "@mui/material/Card";
import { useRequest } from "lib/functions";

import React, { useEffect, useState, useContext, useRef } from "react";
import { useParams } from "react-router-dom";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import CheckIcon from '@mui/icons-material/Check';
import NotInterestedIcon from '@mui/icons-material/NotInterested';
 
 

function Map({ center, zoom, children }) {
    const mapRef = useRef(null)
    const [map, setMap] = useState()
    useEffect(() => {
        setMap(new window.google.maps.Map(mapRef.current, {
            center,
            zoom,
        }));
    }, []);
    // return (<div ref={mapRef} id='map' />)
    return (
        <>
            <div ref={mapRef} id="map" />
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    // set the map prop on the child component
                    return React.cloneElement(child, { map });
                }
            })}
        </>
    );
}

const Marker = (options) => {
    const [marker, setMarker] = useState();
    useEffect(() => {
        if (!marker) {
            setMarker(new window.google.maps.Marker());
        }
        // remove marker from map on unmount
        return () => {
            if (marker) {
                marker.setMap(null);
            }
        };
    }, [marker]);
    useEffect(() => {
        if (marker) {
            marker.setOptions(options);
        }
    }, [marker, options]);
    return null;
};

export default function FarmDescription() {
    const farmCtx = useContext(FarmLocation)
    const request = useRequest()
    const [farmsData, setFarmsData] = useState([])

    const { id } = useParams()
    useEffect(() => {
        request(`${process.env.REACT_APP_API_URL}farms/${id}`, {}, null, {
            // auth: true,
        }, 'get')
            .then(farm => {
                // setFarmsData(farm.data)
                farmCtx.setPlace(farm.data)
                console.log("farm desc", farm)
                console.log("dddddd", typeof farmCtx?.City?.longitude)


            })
    }, [])

    return (
        <Card>

            <MKBox component="section" py={8} my={6}>
                <Container>
                    <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>


                        <Grid container spacing={3} alignItems="center">
                            <Grid item xs={12} lg={6}>
                                <Wrapper  >
                                    <Map center={{ lat: 40.9, lng: 28.5 }} zoom={9}>
                                        <Marker position={{ lat: farmCtx.place?.City?.latitude, lng: farmCtx.place?.City?.longitude }} />
                                    </Map>
                                </Wrapper>
                            </Grid>
                            <Grid item xs={12} lg={6}>
                                <MKBox component="form" p={2} method="post">
                                    <MKBox px={3} py={{ xs: 2, sm: 6 }}>
                                        <MKTypography variant="h2" mb={1}>
                                            {farmCtx.place?.farmName}
                                        </MKTypography>
                                        <MKTypography variant="body1" color="text" mb={2}>
                                            {farmCtx.place?.User?.userName}
                                        </MKTypography>
                                    </MKBox>
                                    <MKBox pt={0.5} pb={3} px={3}>
                                        <Grid container>
                                            <Grid item xs={12} pr={1} mb={6}>
                                                <TableContainer sx={{ width: "100%" }}>
                                                    <Table aria-label="simple table">
                                                        <TableHead>
                                                            <TableRow>
                                                                <TableCell></TableCell>
                                                                <TableCell align="right"></TableCell>

                                                            </TableRow>
                                                        </TableHead>
                                                        <TableBody>

                                                            <TableRow key="ds"
                                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>

                                                                <TableCell component="th" scope="row">
                                                                    Farm Available:
                                                                </TableCell>
                                                                <TableCell component="th" scope="row">
                                                                    {farmCtx.place?.farmAvailable ? <CheckIcon /> : <NotInterestedIcon />}
                                                                </TableCell>

                                                            </TableRow>
                                                            <TableRow key="ds"
                                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>

                                                                <TableCell component="th" scope="row">
                                                                    Farm Area:
                                                                </TableCell>
                                                                <TableCell component="th" scope="row">
                                                                    {farmCtx.place?.farmArea}  M                                                               </TableCell>

                                                            </TableRow>
                                                            <TableRow key="ds"
                                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>

                                                                <TableCell component="th" scope="row">
                                                                    Current Crop Name:
                                                                </TableCell>
                                                                <TableCell component="th" scope="row">
                                                                    {farmCtx.place?.Crop?.cropName}                                                                 </TableCell>

                                                            </TableRow>
                                                            <TableRow key="ds"
                                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>

                                                                <TableCell component="th" scope="row">
                                                                    Current Tree Age:
                                                                </TableCell>
                                                                <TableCell component="th" scope="row">
                                                                    {farmCtx.place?.farmTreesAge}                                                              </TableCell>

                                                            </TableRow>
                                                            <TableRow key="ds"
                                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>

                                                                <TableCell component="th" scope="row">
                                                                    Last Crop Name:
                                                                </TableCell>
                                                                <TableCell component="th" scope="row">
                                                                    {farmCtx.place?.LastCrop?.cropName}                                                          </TableCell>

                                                            </TableRow>
                                                            <TableRow key="ds"
                                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>

                                                                <TableCell component="th" scope="row">
                                                                    Farm License:
                                                                </TableCell>
                                                                <TableCell component="th" scope="row">
                                                                    {farmCtx.place?.farmLicense}                                                         </TableCell>

                                                            </TableRow>
                                                            <TableRow key="ds"
                                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>

                                                                <TableCell component="th" scope="row">
                                                                    Farm License:
                                                                </TableCell>
                                                                <TableCell component="th" scope="row">
                                                                    {farmCtx.place?.farmLicense}                                                         </TableCell>

                                                            </TableRow>

                                                        </TableBody>
                                                    </Table>
                                                </TableContainer>
                                                

                                            </Grid>


                                        </Grid>

                                    </MKBox>

                                </MKBox>
                            </Grid>

                        </Grid>
                        <Grid item xs={12} sm={6} lg={3}>
                            <MKBox
                                component="img"
                                src={farmCtx.place?.farmPicture}
                                alt={farmCtx.place?.farmName}
                                borderRadius="lg"
                                shadow="md"
                                width="100%"
                                position="relative"
                                zIndex={1}
                            />
                        </Grid>

                    </Grid>
                </Container>
            </MKBox>
        </Card >
    )
}