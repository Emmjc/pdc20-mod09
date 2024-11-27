import React from "react";
import BasicForms from "./BasicForms";
import { Link, Route, Routes } from "react-router-dom";
import ControlledInput from "./ControlledInput";
import UncontrolledInput from "./UncontrolledInput";
import TabbedForm from "./TabForm/TabbedForm";
import MyData from "./MyData";

const MyMainForm = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.header}>React Form Apps</h1>
            <nav style={styles.nav}>
                <ul style={styles.navList}>
                    <li style={styles.navItem}><Link to="basic-form" style={styles.navLink}>Basic Form</Link></li>
                    <li style={styles.navItem}><Link to="controlled-input" style={styles.navLink}>Controlled Input</Link></li>
                    <li style={styles.navItem}><Link to="uncontrolled-input" style={styles.navLink}>Uncontrolled Input</Link></li>
                    <li style={styles.navItem}><Link to="tabbed-form" style={styles.navLink}>Tabbed Form</Link></li>
                    <li style={styles.navItem}><Link to="data-form" style={styles.navLink}>Data Form</Link></li>
                </ul>
            </nav>
            <div style={styles.content}>
                <Routes>
                    <Route path="basic-form" element={<BasicForms />} />
                    <Route path="controlled-input" element={<ControlledInput />} />
                    <Route path="uncontrolled-input" element={<UncontrolledInput />} />
                    <Route path="tabbed-form" element={<TabbedForm />} />
                    <Route path="data-form" element={<MyData />} />
                </Routes>
            </div>
        </div>
    );
};

const styles = {
    container: {
        fontFamily: 'Arial, sans-serif',
        margin: '20px auto',
        width: '80%',
        maxWidth: '800px',
        textAlign: 'center',
    },
    header: {
        color: '#333',
        borderBottom: '2px solid #ccc',
        paddingBottom: '10px',
        marginBottom: '20px',
    },
    nav: {
        marginBottom: '20px',
    },
    navList: {
        listStyleType: 'none',
        padding: 0,
        display: 'flex',
        justifyContent: 'center',
        gap: '15px',
    },
    navItem: {
        display: 'inline',
    },
    navLink: {
        textDecoration: 'none',
        color: '#007bff',
        padding: '8px 16px',
        borderRadius: '5px',
        transition: 'background-color 0.3s, color 0.3s',
    },
    navLinkHover: {
        backgroundColor: '#007bff',
        color: '#fff',
    },
    content: {
        padding: '20px',
        backgroundColor: '#f9f9f9',
        borderRadius: '5px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
};

export default MyMainForm;
