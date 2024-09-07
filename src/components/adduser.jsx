import { useForm } from "react-hook-form"
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import PropTypes from 'prop-types'

export const AddUser = ({onAddUser}) => {

    const schem = yup.object().shape({
        firstName: yup.string().required("First name is required"), 
        lastName: yup.string().required("Last name is required"),
        login: yup.string().email("Invalid email").required("Login is required"),
        age: yup.number().typeError("Age must be a number").required("Age is required"),
        password: yup.string().min(6, "Password must be at  least 6 characters long").required("Password is required")
    })

    const {register, handleSubmit, formState: {errors}, reset} = useForm({resolver: yupResolver(schem)})
    
    const onSubmit = data => {
        const {password, ...userPass} = data
        onAddUser(userPass)
        reset()
    }

    return <>
        <h3>Users</h3>
        <form onSubmit={handleSubmit(onSubmit)}>

            <div>  
                <label>First name: </label>
                <input {...register("firstName")} />
                {errors.firstName && <p style={{color: 'red'}}>{errors.firstName.message}</p>}
            </div>


            <div>
                <label>Last name: </label>
                <input {...register("lastName")} />
                {errors.lastName && <p style={{color: 'red'}}>{errors.lastName.message}</p>}
            </div>


            <div> 
                <label>Login: </label>
                <input {...register("login")} />
                {errors.login && <p style={{color: 'red'}}>{errors.login.message}</p>}
            </div>


            <div> 
                <label>Age: </label>
                <input {...register("age")} />
                {errors.age && <p style={{color: 'red'}}>{errors.age.message}</p>}
            </div>


            <div> 
                <label>Password: </label>
                <input type="password" {...register("password")} />
                {errors.password && <p style={{color: 'red'}}>{errors.password.message}</p>}
            </div>


            <button type="submit">Add User</button>

        </form> 
    </>
}

AddUser.propTypes = {
    onAddUser: PropTypes.func.isRequired
}