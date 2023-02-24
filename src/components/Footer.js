import React from 'react';

const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <footer className="footer">
            <h4>Copyright &copy; Georgios-Roman-Oleh</h4>
            <h4>{date}</h4>
        </footer>
    );
};

export default Footer;
