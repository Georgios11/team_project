import React from 'react';

const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <footer className="footer">
            <h4>Copyright &copy; Georgios-Roman-Oleh {date}</h4>
        </footer>
    );
};

export default Footer;
