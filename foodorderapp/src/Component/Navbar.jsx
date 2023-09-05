import React from "react";
import "./Navbar.css";
// import { Link } from "react-scroll";
import { HiDownload } from "react-icons/hi";
import { Link } from "react-router-dom";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import {
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
} from "@chakra-ui/react";

function Navbar () {
    const openLink = (url) => {
        window.open(url);
    };
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <div id="nav-menu" className="navbar">
            <div className="wrapper">
                <div className="wrapperLeft">
                    <Link
                        to="/"
                        smooth={true}
                        offset={-100}
                        duration={500}

                    >
                        <img id="logo"
                            src="https://img.freepik.com/premium-vector/good-food-logo-template_79169-17.jpg?w=2000"
                            alt="icon"
                        />
                    </Link>
                </div>
                <div className="wrapperRight">
                    {/* <div>
                        <Link
                            to="/order"
                            smooth={true}
                            offset={-100}
                            duration={500}
                            className="nav-link home"
                        >
                            All Order
                        </Link>
                    </div> */}
                    <div>
                        <Link
                            to="/sagar"
                            smooth={true}
                            offset={-79}
                            duration={500}
                            className="nav-link about"
                        >
                            Sagar Sweets
                        </Link>
                    </div>
                    <div>
                        <Link
                            to="/pizza"
                            smooth={true}
                            offset={-79}
                            duration={500}
                            className="nav-link skills"
                        >
                            Domino's Pizza
                        </Link>
                    </div>
                    <div>
                        <Link
                            to="/burger"
                            smooth={true}
                            offset={-79}
                            duration={500}
                            className="nav-link projects"
                        >
                            Burger King
                        </Link>
                    </div>
                    <div>
                        <Link
                            to="/other"
                            smooth={true}
                            offset={-79}
                            duration={500}
                            className="nav-link contact"
                        >
                            Other
                        </Link>
                    </div>


                </div>
                <div className="responce">
                    <MenuRoundedIcon onClick={onOpen} />
                    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
                        <DrawerOverlay />
                        <DrawerContent>
                            <DrawerCloseButton />
                            <DrawerBody marginTop={"30px"}>
                                <div className="drawerbody">
                                    <div>
                                        <Link
                                            to="/order"
                                            smooth={true}
                                            offset={-100}
                                            duration={500}
                                            className="nav-link home"
                                        >
                                            All Order
                                        </Link>
                                    </div>
                                    <div>
                                        <Link
                                            to="/sagar"
                                            smooth={true}
                                            offset={-79}
                                            duration={500}
                                            className="nav-link about"
                                        >
                                            Sagar Sweets
                                        </Link>
                                    </div>
                                    <div>
                                        <Link
                                            to="/pizza"
                                            smooth={true}
                                            offset={-79}
                                            duration={500}
                                            className="nav-link skills"
                                        >
                                            Domino's Pizza
                                        </Link>
                                    </div>
                                    <div>
                                        <Link
                                            to="/burger"
                                            smooth={true}
                                            offset={-79}
                                            duration={500}
                                            className="nav-link projects"
                                        >
                                            Burger King
                                        </Link>
                                    </div>
                                    <div>
                                        <Link
                                            to="/other"
                                            smooth={true}
                                            offset={-79}
                                            duration={500}
                                            className="nav-link contact"
                                        >
                                            Other
                                        </Link>
                                    </div>

                                </div>
                            </DrawerBody>
                        </DrawerContent>
                    </Drawer>
                </div>
            </div>
        </div>
    );
}

export default Navbar;