import { useState } from "react"
import Header from '../../components/Header'


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
        <div className="login-page-container">
            <Header />

            <div className="login-page-content">
                <section className="login-heading">
                    <div className="login-heading-img">
                        <img src="./pictures/dream-catcher.png" alt=""/>
                    </div>
                    <h2>Yor reality is made from your thoughts.</h2>
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
                                    placeholder="Enter password"
                                    onChange={onChangeForm}
                            />
                        </div>
                        <input type="submit" value="Login" className="submit-form"/>
                    </form>
                </section>
            </div>
        </div>
    )
}