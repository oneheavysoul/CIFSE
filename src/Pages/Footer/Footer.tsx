import React, { useEffect, useState } from 'react'

function Footer() {
    let publicUrl = process.env.PUBLIC_URL + '/'

    useEffect(() => {
        mainMethod();
    }, [])

    const mainMethod = () => {
        const minscript = document.createElement("script");
        minscript.async = true;
        minscript.src = publicUrl + "assets/js/main.js";
        document.body.appendChild(minscript);
        
    }

    return (
        <>


        </>
    )
}
export default Footer;
