import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxesPacking, faBoxOpen, faComment, faFlag, faFlagCheckered, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';


const BusinessSummary = () => {
    return (
        <div>
            <h4 className='text-center mt-6 text-title text-2xl'>Millions of Business Trust Us</h4>
            <div class="stats stats-vertical lg:stats-horizontal shadow ml-5 mr-5 mt-5 grid lg:grid-cols-3 gap-2 sm: grid-cols-1">
                <div class="stat bg-green-300">
                    <div class="stat-title text-xl text-blue-900"><i><FontAwesomeIcon className='ml-3 text-blue-900 text-2xl' icon={faPeopleGroup}></FontAwesomeIcon></i> <br />Client</div>
                    <div class="stat-value text-blue-900">100K+</div>
                    <div class="stat-desc text-blue-900">Jan 1st - Feb 1st</div>
                </div>

                <div class="stat bg-pink-300">
                    <div class="stat-title text-xl text-gray-700"><i><FontAwesomeIcon className='ml-7 text-error text-2xl' icon={faFlagCheckered}></FontAwesomeIcon></i> <br />Countries</div>
                    <div class="stat-value  text-gray-500">73</div>
                    <div class="stat-desc  text-gray-500">↗︎ 400 (42%)</div>
                </div>

                {/* <div class="stat bg-violet-300">
                    <div class="stat-title text-xl"><i><FontAwesomeIcon className='ml-10 text-cyan-500 text-2xl' icon={faBoxOpen}></FontAwesomeIcon></i><br />Sold Products</div>
                    <div class="stat-value">7.5M+</div>
                    <div class="stat-desc">↗︎ 90 (14%)</div>
                </div> */}

                <div class="stat bg-sky-300">
                    <div class="stat-title text-xl text-yellow-500"><i><FontAwesomeIcon className='ml-6 text-success text-2xl' icon={faComment}></FontAwesomeIcon></i> <br />Feedback</div>
                    <div class="stat-value">15K+</div>
                    <div class="stat-desc">↗︎ 400 (22%)</div>
                </div>

            </div>
            <div class="flex justify-center gap-4 mt-10">

                <div>
                    <h4 className='font-semibold'>Have Any Product Request to us?</h4>
                    <p>Please Tell us.</p>
                </div>

                <div class="form-control">
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