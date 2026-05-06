import React from "react";
import styled from "styled-components"

const Container = styled.div`
    
`
const Nav =styled.div`
/* display: flex;
justify-content: space-between; */
background-color: #dddddd;
padding: 20px;
    
`;

const NavLogo = styled.div`
    color: orange;
`

const NavItems = styled.a`
    list-style-type: none;
`;

const Navabar = () => {
return(
    <Container>
        <Nav>
            <li><a href="">Home</a></li>
            <li><a href="">Men</a></li>
            <li><a href="">Women</a></li>
            <li><a href="">Kids</a></li>
            <li><a href="">Brands</a></li>
            <li><a href="">New Arrivals</a></li>
            <li><a href="">Offers</a></li>
        </Nav>
    </Container>
)
}

export default Navabar