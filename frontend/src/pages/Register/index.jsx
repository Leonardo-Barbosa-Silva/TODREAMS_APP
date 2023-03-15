import { useState } from "react"


export default function Register() {

    const [ formData, setFormData ] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    function onChangeForm(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    function onSubmitForm(e) {
        e.preventDefault()
        console.log(e.target)
    }


    const { name, email, password, confirmPassword } = formData

    return (
        <div className="register-page-container">
            <div className="register-page-content">
                <section className="form-user-heading">
                    <h2>Please create an account</h2>
                </section>

                <hr className="form-user-line"/>

                <section className="form-user">
                    <form onSubmit={onSubmitForm}>
                        <div className="form-group">
                            <input 
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                value={name}
                                placeholder="Enter your name"
                                onChange={onChangeForm}
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    value={email}
                                    placeholder="Enter email"
                                    onChange={onChangeForm}
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    name="password"
                                    value={password}
                                    placeholder="Enter password"
                                    onChange={onChangeForm}
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                    type="password"
                                    className="form-control"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    value={confirmPassword}
                                    placeholder="Confirm password"
                                    onChange={onChangeForm}
                            />
                        </div>
                        <input type="submit" value="Register" className="submit-form"/>
                    </form>
                </section>
            </div>
        </div>
    )
}