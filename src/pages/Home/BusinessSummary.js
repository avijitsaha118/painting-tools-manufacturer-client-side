import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxesPacking, faBoxOpen, faComment, faFlag, faFlagCheckered, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';


const BusinessSummary = () => {
    return (
        <div>
            <h4 className='text-center mt-5 text-title text-2xl'>Millions of Business Trust Us</h4>
            <div class="stats stats-vertical lg:stats-horizontal shadow grid lg:grid-cols-4 gap-4 sm: grid-cols-2">
                <div class="stat">
                    <div class="stat-title text-xl"><i><FontAwesomeIcon className='ml-3 text-success text-2xl' icon={faPeopleGroup}></FontAwesomeIcon></i> <br />Client</div>
                    <div class="stat-value">100K+</div>
                    <div class="stat-desc">Jan 1st - Feb 1st</div>
                </div>

                <div class="stat">
                    <div class="stat-title text-xl"><i><FontAwesomeIcon className='ml-7 text-success text-2xl' icon={faFlagCheckered}></FontAwesomeIcon></i> <br />Countries</div>
                    <div class="stat-value">73</div>
                    <div class="stat-desc">↗︎ 400 (42%)</div>
                </div>

                <div class="stat">
                    <div class="stat-title text-xl"><i><FontAwesomeIcon className='ml-10 text-success text-2xl' icon={faBoxOpen}></FontAwesomeIcon></i><br />Sold Products</div>
                    <div class="stat-value">7.5M+</div>
                    <div class="stat-desc">↗︎ 90 (14%)</div>
                </div>

                <div class="stat">
                    <div class="stat-title text-xl"><i><FontAwesomeIcon className='ml-6 text-success text-2xl' icon={faComment}></FontAwesomeIcon></i> <br />Feedback</div>
                    <div class="stat-value">15K+</div>
                    <div class="stat-desc">↗︎ 400 (22%)</div>
                </div>

            </div>
            <div class="flex justify-center gap-4 mt-5">

                <div>
                    <h4 className='font-semibold'>Have Any Product Request to us?</h4>
                    <p>Please Tell us.</p>
                </div>

                <div class="form-control">
                    {/* <label class="label">
                        <span class="label-text">Type What You Want</span>
                    </label> */}
                    <label class="input-group">
                        <input type="text" placeholder="Enter Product Name" class="input input-bordered" />
                        <span>Request</span>
                    </label>
                </div>

            </div>

        </div>
    );
};

export default BusinessSummary;