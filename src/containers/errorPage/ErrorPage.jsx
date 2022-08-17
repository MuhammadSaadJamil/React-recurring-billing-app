import React from 'react';
import Layout from "../layout/Layout";
import './errorPage.css'

function ErrorPage(props) {
    return (
        <Layout heading={'Error 404'}>
            <div className="alert alert-danger">
                <div className="text-center">
                    <h1>404</h1>
                    <p>Page Not Found</p>
                </div>
            </div>
        </Layout>
    );
}

export default ErrorPage;