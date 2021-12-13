import React from 'react';
import post1 from '../../Images/Post data/post 1.png'
import post2 from '../../Images/Post data/post 2.png'
import post3 from '../../Images/Post data/post 3.png'
import article from '../../Images/post type/✍️ Article.png'
import Education from '../../Images/post type/🔬️ Education.png'
import Meetup from '../../Images/post type/🗓️ Meetup.png'
import Job from '../../Images/post type/💼️ Job.png'
import user1 from '../../Images/User/User-1.png'
import user2 from '../../Images/User/user-2.png'
import user3 from '../../Images/User/user-3.png'
import user4 from '../../Images/User/user-4.png'
import calender from '../../Images/Calender.png'
import job from '../../Images/job.png'
const PostData = () => {
    return (
        <div className='container'>
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
                                    <p>...</p>
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
                                <h5 className="card-title">Tax Benefits for Investment under National Pension Scheme launched by Government</h5>
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
                                <h5 className="card-title">Finance & Investment Elite Social Mixer @Lujiazui</h5>
                                <div className='my-3 ms-1'>
                                    <img src={calender} alt="" /> <span>Fri ,12 Oct 2018</span>
                                    <i className="fas fa-map-marker-alt ms-5"></i> <span >Ahmedabad, India</span>
                                </div>
                                <div>
                                    <button className='btn border rounded w-100 text-danger mb-2'>Visit Website</button>
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
                                <h5 className="card-title">Software Developer</h5>
                                <div className='my-3 ms-1'>
                                    <img src={job} alt="" /> <span>Fri ,12 Oct 2018</span>
                                    <i className="fas fa-map-marker-alt ms-5"></i> <span >Ahmedabad, India</span>
                                </div>
                                <div>
                                    <button className='btn border rounded w-100 text-success mb-2'>Apply on Timesjobs</button>
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
                <div className='col-lg-4'>
                    <div className='container ms-5 mt-5'>
                        <div className=' d-flex justify-content-between w-75'>
                            <span><i className="fas fa-map-marker-alt"></i> Noida, India</span>
                            <i className="fas fa-pen"></i>
                        </div>
                        <hr className='w-75 mt-1' />
                        <div className=''>
                            <p><i className="fas fa-exclamation-circle"></i> Your location will help us serve better and extend a personalised experience.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PostData;