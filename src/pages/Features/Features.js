import React from 'react';
import './Features.css';

const Features = () => {
    return (
        <body className='features-body mb-4'>
            <div class="header">
                <h4 className='text-2xl'>Reliable and Efficient Delivery</h4>
            </div>
            <div class="row1-container">
                <div class="box box-down cyan">
                    <h2>Supervisor</h2>
                    <p>Monitors activity to delivery processing time.</p>
                    <img src="https://assets.codepen.io/2301174/icon-supervisor.svg" alt="" />
                </div>

                <div class="box red">
                    <h2>Team Power</h2>
                    <p>Our strong network to create everything easy.</p>
                    <img src="https://assets.codepen.io/2301174/icon-team-builder.svg" alt="" />
                </div>

                <div class="box box-down blue">
                    <h2>Technology</h2>
                    <p>Uses data science to give client most satisfactory.</p>
                    <img src="https://assets.codepen.io/2301174/icon-calculator.svg" alt="" />
                </div>
            </div>
            <div class="row2-container">
                <div class="box orange">
                    <h2>Knowledge</h2>
                    <p>Our experience make us more smooth in this field.</p>
                    <img src="https://assets.codepen.io/2301174/icon-karma.svg" alt="" />
                </div>
            </div>

        </body>

    );
};

export default Features;