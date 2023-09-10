import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Component/Navbar';

const OrderPlaced = () => {
    const navigate = useNavigate();

    // Use useEffect to navigate back to the home page after 5 seconds
    useEffect(() => {
        const timeout = setTimeout(() => {
            navigate("/");
        }, 3000);

        // Clean up the timeout when the component unmounts
        return () => clearTimeout(timeout);
    }, [navigate]);

    return (
        <div>
            <Navbar />
            <div style={{ width: "70%", margin: "auto", marginTop: "10rem" }}>
                <img
                    src="https://cdn.dribbble.com/users/2572904/screenshots/17169793/media/ed801ffe0fbeb4b95ca246ba1f5ea398.gif"
                    alt=""
                />
            </div>
        </div>
    );
}

export default OrderPlaced;
