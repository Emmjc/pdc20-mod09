import React, { useState, useEffect } from "react";

function MyData() {
    const [users, setUsers] = useState([]);  
    const [error, setError] = useState(null); // Error state should be null initially

    const fetchUsers = async () => {
        try {
            const response = await fetch('http://localhost/pdc20/get_user.php', {
                method: 'GET',
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status} - ${response.statusText}`);
            }
            const data = await response.json();
            setUsers(data);
        } catch (err) {
            setError(err.message); 
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>User List</h1>
            {error && <p style={styles.error}>{`Error: ${error}`}</p>}
            {users.length > 0 ? (
                <table style={styles.table}>
                    <thead style={styles.thead}>
                        <tr>
                            <th style={styles.th}>ID</th>
                            <th style={styles.th}>Name</th>
                            <th style={styles.th}>Gender</th>
                            <th style={styles.th}>Contact No</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.ID} style={styles.row}>
                                <td style={styles.td}>{user.ID}</td>
                                <td style={styles.td}>{user.Name}</td>
                                <td style={styles.td}>{user.Gender}</td>
                                <td style={styles.td}>{user.ContactNo}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p style={styles.noData}>No users found.</p>
            )}
        </div>
    );
}

const styles = {
    container: {
        padding: '30px',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f4f4f9',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        margin: '0 auto',
        width: '80%',
    },
    header: {
        textAlign: 'center',
        color: '#333',
        fontSize: '32px',
        marginBottom: '20px',
        fontWeight: 'bold',
    },
    error: {
        color: 'red',
        textAlign: 'center',
        fontSize: '16px',
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse',
        margin: '20px 0',
        backgroundColor: '#fff',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
    },
    thead: {
        backgroundColor: '#0066cc',
        color: '#fff',
        textAlign: 'left',
        fontSize: '16px',
    },
    th: {
        padding: '12px 20px',
        fontWeight: 'bold',
    },
    td: {
        padding: '12px 20px',
        borderBottom: '1px solid #ddd',
    },
    row: {
        transition: 'background-color 0.3s ease',
    },
    rowHover: {
        backgroundColor: '#f1f1f1',
    },
    noData: {
        textAlign: 'center',
        color: '#777',
        fontSize: '18px',
    },
};

export default MyData;
