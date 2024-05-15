import React, {useState, useEffect} from 'react';


const Home = () => {

   
    
    return (
        <div className="container">
            <main role="main" className="pb-3">
                <div><h1>Welcome to the React Bookmark Application.</h1>
                    <h3>Top 5 most bookmarked links</h3>
                    <table className="table table-hover table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Url</th>
                                <th>Count</th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
};

export default Home;