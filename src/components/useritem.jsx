import PropTypes from "prop-types"
import React from "react";

export const UserItem = ({user}) => {
    return <>
        <tr>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.login}</td>
            <td>{user.age}</td>
        </tr>
    </>
}

UserItem.propTypes = {
    user: PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      login: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
    }).isRequired,
  };