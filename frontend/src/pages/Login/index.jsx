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

    function onSubmitForm(e) {
        e.preventDefault()
        console.log(e.target)
    }


    const { email, password } = formData

    return (
        <div className="login-page-container">
            <Header />

            <div className="login-page-content">
                <section className="form-user-heading">
                    <div className="form-user-heading-img">
                        <img src="./pictures/dream-catcher.png" alt=""/>
                    </div>
                    <h2>Your reality is made from your thoughts.</h2>
                </section>

                <hr className="form-user-line"/>

                <section className="form-user">
                    <form onSubmit={onSubmitForm} >
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