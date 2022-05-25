import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxesPacking, faBoxOpen, faComment, faFlag, faFlagCheckered, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';


const BusinessSummary = () => {
    return (
        <div>
            <h1 className='text-center text-2xl mt-3'>Millions of Business Trust Us</h1>
            <div class="stats stats-vertical lg:stats-horizontal shadow grid grid-cols-4 gap-4">
                <div class="stat">
                    <div class="stat-title"><i><FontAwesomeIcon className='ml-3' icon={faPeopleGroup}></FontAwesomeIcon></i> <br />Client</div>
                    <div class="stat-value">100K+</div>
                    <div class="stat-desc">Jan 1st - Feb 1st</div>
                </div>

                <div class="stat">
                    <div class="stat-title"><i><FontAwesomeIcon className='ml-7' icon={faFlagCheckered}></FontAwesomeIcon></i> <br />Countries</div>
                    <div class="stat-value">73</div>
                    <div class="stat-desc">↗︎ 400 (42%)</div>
                </div>

                <div class="stat">
                    <div class="stat-title"><i><FontAwesomeIcon className='ml-10' icon={faBoxOpen}></FontAwesomeIcon></i><br />Sold Products</div>
                    <div class="stat-value">7.5M+</div>
                    <div class="stat-desc">↗︎ 90 (14%)</div>
                </div>

                <div class="stat">
                    <div class="stat-title"><i><FontAwesomeIcon className='ml-6' icon={faComment}></FontAwesomeIcon></i> <br />Feedback</div>
                    <div class="stat-value">15K+</div>
                    <div class="stat-desc">↗︎ 400 (22%)</div>
                </div>

            </div>
            <div class="flex justify-center">
               
               <h3>Have Any Product Request to us?</h3>
                <p>Please Tell us.</p>
              
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Type What You Want</span>
                    </label>
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