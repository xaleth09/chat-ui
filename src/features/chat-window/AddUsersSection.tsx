import React from 'react';
import {useSelectAllUsers} from "../../store/users/selectors.ts";

type Props = {}

export const AddUsersSection = ({}) => {
    const users = useSelectAllUsers();

    return (
        <div>
            <p>Hello, World!</p>
        </div>
    );
};
