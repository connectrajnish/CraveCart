import { createContext } from "react";

const UserContext = createContext({
    user: {
        name: 'Rajnish',
        email: 'rajnish@gmail.com'
    }
});
export default UserContext;