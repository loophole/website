import React from 'react';
import { withAuthenticationRequired } from '@auth0/auth0-react';

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"
import Footer from "../components/common/footer/footer"

import Header from '../components/profile/header';
import Summary from '../components/profile/summary';

const Profile = () => {
    return (

        <Layout>
            <SEO title="Profile" />
            <Navigation isIndex={false} />
            <Header />
            <Summary />
            <Footer />
        </Layout>
    );
};

// Wrap the component in the withAuthenticationRequired handler
export default withAuthenticationRequired(Profile);