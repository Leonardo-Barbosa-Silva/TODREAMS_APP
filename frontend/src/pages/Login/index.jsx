import { useState } from "react"


export default function Login() {

    const [ formData, setFormData ] = useState({
        email: '',
        password: ''
    })

    function onChangeForm(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const { email, password } = formData

    return (
        <div className="login-page">
            <section className="login-heading">
                <h1>Login</h1>
            </section>

            <section className="form">
                <form>
                    <div className="form-group">
                        <input 
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={email}
                            placeholder="Enter your email"
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
                                placeholder="Enter your name"
                                onChange={onChangeForm}
                        />
                    </div>
                </form>
            </section>
        </div>
    )
}