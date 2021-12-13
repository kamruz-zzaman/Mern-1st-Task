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
const PostData = () => {
    return (
        <div className='container'>
            <div className=' row '>
                <div className=' col-lg-8 col-12'>
                    {/* first user */}
                    <div class="col">
                        <div class="card">
                            <img src={post1} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <img className='mb-3' src={article} alt="" />
                                <div className='d-flex justify-content-between'>
                                    <h5 class="card-title">What if famous brands had regular fonts? Meet RegulaBrands!</h5>
                                    <p>...</p>
                                </div>
                                <p class="card-text">I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                            </div>
                        </div>
                    </div>
                    {/* second user */}
                    <div class="col my-4">
                        <div class="card">
                            <img src={post2} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <img className='mb-3' src={Education} alt="" />
                                <h5 class="card-title">Tax Benefits for Investment under National Pension Scheme launched by Government</h5>
                                <p class="card-text">I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                            </div>
                        </div>
                    </div>
                    {/* third user */}
                    <div class="col">
                        <div class="card">
                            <img src={post3} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <img className='mb-3' src={Meetup} alt="" />
                                <h5 class="card-title">Finance & Investment Elite Social Mixer @Lujiazui</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4'>
                    <div className='container ms-5 mt-5'>
                        <div className=' d-flex justify-content-between w-75'>
                            <span><i class="fas fa-map-marker-alt"></i> Noida, India</span>
                            <i class="fas fa-pen"></i>
                        </div>
                        <hr className='w-75 mt-1' />
                        <div className=''>
                            <p><i class="fas fa-exclamation-circle"></i> Your location will help us serve better and extend a personalised experience.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PostData;