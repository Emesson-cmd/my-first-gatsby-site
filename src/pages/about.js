import * as React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout'

const AboutPage = () => {
    return (
        <Layout pageTitle="About me">
            <p>Hi there! My name is Emesson. I'm a software Engineer.</p>
            <p>My passion is building awsome virtual experiences creating Front-end and Back-end solutions.</p>
            <p>For hobbies I like playing soccer, reading and enjoying my family and friends' presence.</p>
            <p>My dream is to one day become someone who truly makes a positive difference in people's lives. And the way I've found to do so is by using technology.</p>
        </Layout>
    )
}

export const Head = () => <title>About me</title>

export default AboutPage