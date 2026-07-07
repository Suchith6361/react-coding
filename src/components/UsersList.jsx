import { useEffect, useState } from "react";
import axios from "axios";

const UsersList = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {

        axios
            .get("http://localhost:3000/api/public_users")
            .then((response) => {
                setUsers(response.data);
            })
            .catch((error) => {
                console.error("Error fetching users:", error);
            });

    }, []);

    return (
        <div>

            <h1>Fetching Users List</h1>

            <ul className="text-black">
                {users.map((user) => (
                    <li key={user.id}>
                        <p>{user.email}</p>
                    </li>
                ))}
            </ul>

        </div>
    );
};

export default UsersList;