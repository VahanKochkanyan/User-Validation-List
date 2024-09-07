import PropTypes from 'prop-types'
import { UserItem } from './useritem'

export const UserList = ({users}) => {
    return <div>
        <h3>UserList</h3>
        <table>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Login</th>
                    <th>Age</th>
                </tr>
            </thead>
                <tbody>

                        {
                         users.map((user) => <UserItem key={user.login} user={user} />)
                        }

                </tbody>
        </table>
    </div>
}

UserList.propTypes = {
    users: PropTypes.arrayOf(
      PropTypes.shape({
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        login: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
      })
    ).isRequired,
}