import React from 'react';
const Blog = () => {
    return (
        <div>
            <h2 className='text-center mt-2'>Question and Answer</h2>

            <h3 className='mt-3'><strong>Question-01: How will you improve the performance of a React Application?</strong></h3>

            <h2> <strong>Answer:</strong></h2>
            <p>Using React in application brings better performance and minimizes the number of DOM operations used to build faster user interfaces as it was built keeping performance in mind. React applications very fast is the DOM, but it sometimes makes many irrelevant components render the tree. As a result, UI might glitch, and sometimes developers may get hesitant to continue with React.
                <br/> Remove unnecessary awaits and use Promise.all() wherever applicable.
                <br/> Avoid inline functions as much as possible. If your application is small, it will not affect you much but once you develop more and more features, this will bite you for sure.
                <br/> Always render hidden components like Modals and Dropdowns conditionally. These components are not visible until triggered, but are affecting your application's overall performance.
                <br/>Always call multiple APIs parallelly. Sequential calls affect load time.
            </p>

            <h3 className='mt-3'><strong>Question-02: What are the different ways to manage a state in a React application?</strong></h3>
            <h2> <strong>Answer:</strong></h2>
            <p>
            There are four main types of state need to properly manage in React application:
            <br/> a. Local state b. Global state c. Server state d. URL state.
            <br/> Based on these rules of each state, we can easily store data as per our needs (as long as we follow the rules) without worrying about creating a dynamic data mess.
            <br/> This are also help to state management in react; Communication State, Data State, Control State, Session State, Location State.
            </p>

            <h3 className='mt-3'><strong>Question-03: How does prototypical inheritance work?</strong></h3>
            <h2> <strong>Answer:</strong></h2>
            <p>
            JavaScript is a prototype-based, Object Oriented programming language. After the ES6 updates, JavaScript allowed for “prototypal inheritance”, meaning that objects and methods can be shared, extended, and copied.
            <br/>
            Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf.
            <br/>
            By default, the JavaScript engine provides you with a built-in Object() function and an anonymous object that can be referenced by the Object.prototype.
            </p>

            <h3 className='mt-3'><strong>Question-04: Why you do not set the state directly in React?</strong> For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts.</h3>
            <h2> <strong>Answer:</strong></h2>
            <p>
            If we set state directly, calling the setState() afterward may just replace the update we made.
When we directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.
We will lose control of the state across all components.
<br/> React keeps a track record of all its virtual DOM. Whenever a change happens, all the components are rendered and this new virtual DOM is then compared with the old virtual DOM. Only the differences found are then reflected in the original DOM.
<br/> So, it's obvious from the statement that if we mutate the state directly, it will change the reference of the state in the previous virtual DOM as well. So, React won’t be able to see that there is a change of the state and so it won't be reflected in the original DOM until we reload.
            </p>

            {/* <h3 className='mt-3'><strong>Question-05: You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</strong></h3>
            <h2> <strong>Answer:</strong></h2>
            <p></p> */}

            <h3 className='mt-3'><strong>Question-05: What is a unit test? Why should write unit tests?</strong></h3>
            <h2> <strong>Answer:</strong></h2>
            <p>
            JavaScript Unit Testing is a method where JavaScript test code is written for a web page or web application module. It is then combined with HTML as an inline event handler and executed in the browser to test if all functionalities are working as desired. These unit tests are then organized in the test suite.

There are various frameworks that are helpful for unit testing in JavaScript like Unit.js, Mocha, Jest etc.
<br/>
It provides all the essential tools for running tests, making assertions, mocking implementations, and more in a single package. Before Jest, the JavaScript ecosystem relied on several different tools and frameworks to give developers a way to write and run tests. Configuring these tools was rarely simple and easy.
Why is it important to write unit tests?
Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently. For that unit test should write.
            </p>
        </div>
    );
};

export default Blog;