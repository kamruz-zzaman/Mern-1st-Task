import React from 'react';
import { Modal } from 'react-bootstrap';
import login from '../../Images/login.png'
import SignUp from '../../Component/SignUp/SignUp';
import '../Sign in/signIn.css'


const CreateAccount = () => {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <>
            <a onClick={() => setModalShow(true)}>
                Create new for free!
            </a>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
};

export default CreateAccount;

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
                <h4>Create Account</h4>
                <div className='row'>
                    <div className='col-12 col-sm-7'>
                        <input className='py-2 w-50   border px-2' type="text" placeholder='First Name' name="" id="" />
                        <input className='py-2 w-50   border px-2' type="text" placeholder='Last Name' name="" id="" /><br />
                        <input className='py-2 w-100  border px-2' type="email" placeholder='Email' name="" id="" /><br />
                        <input className='py-2 w-100  border px-2' type="password" placeholder='Password' name="" id="" /><br />
                        <input className='py-2 w-100  border px-2' type="password" placeholder='Re-Enter Password' name="" id="" /><br />
                        <button className='btn btn-primary d-none d-sm-block w-100 rounded-pill m-2'>Create Account</button>
                        <div className='d-block d-sm-none'>
                            <button className='btn btn-primary w-50 rounded-pill m-2'>Create Account</button>
                            <span className='ms-5'><u>or, Sign In</u> </span>
                        </div>
                        <button className='btn border w-100 m-2'><i class="fab fa-facebook test-primary"></i>  SignUp With Facebook</button>
                        <button className='btn border w-100 m-2'><i class="fab fa-google"></i> SignUp With Google</button>
                        <p className='d-block d-sm-none text-center'>By signing up, you agree to our Terms & conditions, Privacy policy</p>
                    </div>
                    <div className=' col-5 d-none d-sm-block'>
                        <p>Already have an account? <a href="#"><SignUp></SignUp></a></p>
                        <img src={login} alt="" />
                        <p>By signing up, you agree to our Terms & conditions, Privacy policy</p>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}
