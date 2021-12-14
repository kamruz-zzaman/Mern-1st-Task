import React from 'react';
import { Modal } from 'react-bootstrap';
import login from '../../Images/login.png'
import CreateAccount from '../Create Account/CreateAccount';
import SignIn from '../Sign in/SignIn';
import '../Sign in/signIn.css'


const SignUp = () => {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <>
            <a onClick={() => setModalShow(true)}>
                Sign In
            </a>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
};

export default SignUp;

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton className='bg-color'>
                <Modal.Title id="contained-modal-title-vcenter">
                    <span className='text-color '>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</span>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Welcome Back!</h4>
                <div className='row'>
                    <div className='col-12 col-sm-7'>
                        <input className='py-2 w-100  border px-2' type="email" placeholder='Email' name="" id="" /><br />
                        <input className='py-2 w-100  border px-2' type="password" placeholder='Password' name="" id="" /><br />
                        <button className='btn btn-primary d-none d-sm-block w-100 rounded-pill m-2'>Create Account</button>
                        <div className='d-block d-sm-none'>
                            <button className='btn btn-primary w-50 rounded-pill m-2'>Sign In</button>
                            <a href='#' className='ms-2'><u>or,<CreateAccount></CreateAccount></u> </a>
                        </div>
                        <button className='btn border w-100 m-2'><i class="fab fa-facebook test-primary"></i>  SignUp With Facebook</button>
                        <button className='btn border w-100 m-2'><i class="fab fa-google"></i> SignUp With Google</button>
                        <p className='fw-bolder text-center fs-6 mt-3'>Forgol Password?</p>
                    </div>
                    <div className='col-5 d-none d-sm-block'>
                        <p>Don't Have Account Yet? <a href="#"><CreateAccount></CreateAccount></a></p>
                        <img src={login} alt="" />
                        <p>By signing up, you agree to our Terms & conditions, Privacy policy</p>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}
