import { Box, Container } from "@mui/system";
import React from "react";
import NavBar from '../navbar/navbar'
import Card1 from "../card/card";
import Vector from '../../assests/img/Vector.png'
import { Button, CardMedia, Rating, Typography } from "@mui/material";
import T1 from '../../assests/img/t1.png'
import T2 from '../../assests/img/t1.png'
import T3 from '../../assests/img/t1.png'
import Footer from "../footer/footes";
import Topoffres from "../topvist/topOffer";
import event_bg from '../../assests/img/event_bg.png'

const About = () => {
    return (
        <Container>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                padding: '50px',
                gap: '50px',

            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '-webkit-fill-available',
                }}>
                    <CardMedia
                        component="img"
                        height="auto"
                        width=""
                        image={Vector}
                        alt="green iguana"
                    />
                    <Typography variant="h4"
                        sx={{
                            paddingTop: '5px',
                            color: '#041562',
                            fontWeight: '400',
                            fontStyle: 'bold',
                        }}
                    >
                        Travel Buddy
                    </Typography>
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    rowGap: '10px',
                }}>
                    <Typography sx={{
                        fontFamily: 'Inter',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        fontSize: '18px',
                        lineHeight: '22px',
                        color: '#FF5403',


                    }}>
                        Who we are
                    </Typography>
                    <Typography sx={{
                        fontFamily: 'Inter',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        fontSize: '32px',
                        lineHeight: '39px',
                        color: '#041562',
                    }}>
                        We love to discover Indonesia
                    </Typography>
                    <Typography
                        sx={{
                            fontFamily: 'Inter',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            fontSize: '18px',
                            lineHeight: '22px',
                            color: '#696969',
                        }}
                    >
                        Waters make fish every without firmament saw had.
                        Morning air subdue. Our. Air very one.
                        Whales grass is fish whales winged night yielding land creeping that seed appear were bearing.
                        <br />
                        Waters make fish every without firmament saw had.
                        Morning air subdue. Our. Air very one.
                        Whales grass is fish whales winged night yielding land creeping that seed appear were bearing.

                    </Typography>
                </Box>
            </Box>

            <Card1 image={event_bg} pd='30px' height="95vh">
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignContent: 'center',
                    backgroundColor: 'white',
                    padding: '25px 30px',
                }}>
                    <Box sx={{
                        color: 'black'
                    }}>
                        <Typography variant="subtitle1" gutterBottom
                            sx={{

                            }}
                        >
                            Upcoming Event
                        </Typography>
                        <Typography variant="h4" gutterBottom>
                            India - Himachal
                        </Typography>
                        <Box sx={{
                            fontFamily: 'Inter',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            fontSize: '18px',
                            lineHeight: '170%',
                            /* or 31px */
                            letterSpacing: '0.02em',
                            color: '#626262',
                        }}>
                            <Typography variant="subtitle1" gutterBottom>
                                Waters make fish every without firmament saw had. Morning <br />
                                air subdue. Our, air very one. Whales grass is fish whales<br />
                                winged.
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                date : 12 Aug 2020
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                cost : Start from Rp3000.000,00
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                organizer : TravelBuddy
                            </Typography>
                        </Box>
                        <Box sx={{
                            display: 'inline-flex'
                        }}>
                            <Typography>Rating : </Typography>
                            <Rating name="read-only" value={5} readOnly />
                        </Box>
                        <Box sx={{
                            paddingTop: '20px'
                        }}>
                            <Button variant="contained"
                                sx={{
                                    backgroundColor: '#ff5733',
                                    padding: '15px 30px'
                                }}
                            >Plan Details
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Card1>
            <Box>
                <Topoffres
                    a1={T1} a2={T2} a3={T3}
                    text='We offered best services'
                    text2='The Best Service'
                    gCol='4'
                />
            </Box>
            <Footer gCol='6' />
        </Container >
    )
}
export default About;