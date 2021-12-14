import React from 'react';
import post1 from '../../../Images/Post data/post 1.png'
import post2 from '../../../Images/Post data/post 2.png'
import post3 from '../../../Images/Post data/post 3.png'
import article from '../../../Images/post type/✍️ Article.png'
import Education from '../../../Images/post type/🔬️ Education.png'
import Meetup from '../../../Images/post type/🗓️ Meetup.png'
import Job from '../../../Images/post type/💼️ Job.png'
import user1 from '../../../Images/User/User-1.png'
import user2 from '../../../Images/User/user-2.png'
import user3 from '../../../Images/User/user-3.png'
import user4 from '../../../Images/User/user-4.png'
import calender from '../../../Images/Calender.png'
import job from '../../../Images/job.png'
import like from '../../../Images/like.png'
import '../../Data/postData.css'
import DropDown3Dot from '../../Dropdown3Dot/DropDown3Dot';
import './LogPostData.css'
import Guser1 from '../../../Images/G-User/G-User1.png'
import Guser2 from '../../../Images/G-User/G-User-2.png'
import Guser3 from '../../../Images/G-User/G-User-3.png'
import Guser4 from '../../../Images/G-User/G-User-4.png'
const LogPostData = () => {
    return (
        <div className='container-sm'>
            <div className=' row '>
                <div className=' col-lg-8 col-12'>
                    {/* first user */}
                    <div className="col">
                        <div className="card">
                            <img src={post1} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <img className='mb-3' src={article} alt="" />
                                <div className='d-flex justify-content-between'>
                                    <h5 className="card-title">What if famous brands had regular fonts? Meet RegulaBrands!</h5>
                                    <DropDown3Dot></DropDown3Dot>
                                </div>
                                <p className="card-text">I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                                <div className='d-flex justify-content-between'>
                                    <div>
                                        <img src={user1} alt="" />  <span className='ms-1 fw-bolder'>Sarthak Kamra</span>
                                    </div>
                                    <div>
                                        <i className="far fa-eye"></i><span>1.4k views</span>
                                        <button className='btn border ms-2'><i className="fas fa-share-alt"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* second user */}
                    <div className="col my-4">
                        <div className="card">
                            <img src={post2} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <img className='mb-3' src={Education} alt="" />
                                <div className='d-flex justify-content-between'>
                                    <h5 className="card-title">Tax Benefits for Investment under National Pension Scheme launched by Government</h5>
                                    <DropDown3Dot></DropDown3Dot>
                                </div>
                                <p className="card-text">I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                                <div className='d-flex justify-content-between'>
                                    <div>
                                        <img src={user2} alt="" />  <span className='ms-1 fw-bolder'>Sarah West</span>
                                    </div>
                                    <div>
                                        <i className="far fa-eye"></i><span>1.4k views</span>
                                        <button className='btn border ms-2'><i className="fas fa-share-alt"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* third user */}
                    <div className="col">
                        <div className="card">
                            <img src={post3} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <img className='mb-3' src={Meetup} alt="" />
                                <div className='d-flex justify-content-between'>
                                    <h5 className="card-title">Finance & Investment Elite Social Mixer @Lujiazui</h5>
                                    <DropDown3Dot></DropDown3Dot>
                                </div>
                                <div className='my-3 ms-1'>
                                    <img src={calender} alt="" /> <span>Fri ,12 Oct 2018</span>
                                    <i className="fas fa-map-marker-alt ms-5"></i> <span >Ahmedabad, India</span>
                                </div>
                                <div>
                                    <button className='btn border fw-bold rounded w-100 text-danger mb-2'>Visit Website</button>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <div>
                                        <img src={user3} alt="" />  <span className='ms-1 fw-bolder'>Ronal jones</span>
                                    </div>
                                    <div>
                                        <i className="far fa-eye"></i><span>1.4k views</span>
                                        <button className='btn border ms-2'><i className="fas fa-share-alt"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* forth user */}
                    <div className="col mt-4">
                        <div className="card">
                            <div className="card-body">
                                <img className='mb-3' src={Job} alt="" />
                                <div className='d-flex justify-content-between'>
                                    <h5 className="card-title">Software Developer</h5>
                                    <DropDown3Dot></DropDown3Dot>
                                </div>
                                <div className='my-3 ms-1'>
                                    <img src={job} alt="" /> <span>Fri ,12 Oct 2018</span>
                                    <i className="fas fa-map-marker-alt ms-5"></i> <span >Ahmedabad, India</span>
                                </div>
                                <div>
                                    <button className='btn border rounded fw-bold w-100 text-success mb-2'>Apply on Timesjobs</button>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <div>
                                        <img src={user4} alt="" />  <span className='ms-1 fw-bolder'>Joseph Gray</span>
                                    </div>
                                    <div>
                                        <i className="far fa-eye"></i><span>1.4k views</span>
                                        <button className='btn border ms-2'><i className="fas fa-share-alt"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* second grid */}
                <div className='d-none d-sm-block col-lg-4'>
                    <div className='container ms-5 mt-5'>
                        <div className=' d-flex justify-content-between w-75'>
                            <i class="fas fa-map-marker-alt mt-1"></i> <input className='border-0 input-border' placeholder='Enter your Location' type="text" /><i class="fas fa-times mt-1"></i>
                        </div>
                        <hr className='w-75 mt-1' />
                        <div className='w-75'>
                            <p><i className="fas fa-exclamation-circle"></i> Your location will help us serve better and extend a personalised experience.</p>
                        </div>
                        <div className='mt-5'>
                            <h4><img width='25px' className='mb-2' src={like} alt="" />Recommended Group </h4>
                            <div className='d-flex justify-content-between mt-5'>
                                <div>
                                    <img src={Guser1} alt="" /> <span className='fw-bolder'>Leisure</span>
                                </div>
                                <div>
                                    <button className='btn btn-dark rounded-pill py-1'>Followed</button>
                                </div>
                            </div>
                            <div className='d-flex justify-content-between mt-4'>
                                <div>
                                    <img src={Guser2} alt="" /> <span className='fw-bolder'>Activism</span>
                                </div>
                                <div>
                                    <button className='btn border btn-light rounded-pill py-1'>Follow</button>
                                </div>
                            </div>
                            <div className='d-flex justify-content-between mt-4'>
                                <div>
                                    <img src={Guser3} alt="" /> <span className='fw-bolder'>Mba</span>
                                </div>
                                <div>
                                    <button className='btn border btn-light rounded-pill py-1'>Follow</button>
                                </div>
                            </div>
                            <div className='d-flex justify-content-between mt-4'>
                                <div>
                                    <img src={Guser4} alt="" /> <span className='fw-bolder'>Philosophy</span>
                                </div>
                                <div>
                                    <button className='btn border btn-light rounded-pill py-1'>Follow</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default LogPostData;