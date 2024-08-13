import React, { useState } from "react";

function Users() {
    const [userlist, setUserList] = useState([]);
    const [loading, setLoading] = useState(false);
    const fetchAllUser = async () => {
        try {
            const apiResponse = await fetch("https://dummyjson.com/users");
            const result = await apiResponse.json();
            if (result?.users) {
                setUserList(result?.users);
                setLoading(false);
            } else {
                setUserList([]);
                setLoading(true);
            }
        } catch (error) {
            console.log(error);
        }
    };
    const handleClick = () => {
        fetchAllUser();
    };
    // useEffect(() => {
    //     fetchAllUser();
    // }, []);

    if (loading) return <h1>Fetching users! please wait</h1>;
    return (
        <div>
            <h2>the users</h2>
            <button onClick={handleClick} style={{ color: "red" }}>
                fetch users
            </button>
            <ul>
                {userlist && userlist.length > 0 ? (
                    userlist.map((userItem) => (
                        <li key={userItem.id}>
                            <p>
                                {" "}
                                {userItem.firstName} {userItem.lastName}
                            </p>
                        </li>
                    ))
                ) : (
                    <h1>no users found! please try again</h1>
                )}
            </ul>
        </div>
    );
}

export default Users;
