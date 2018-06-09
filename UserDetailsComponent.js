import React from 'react';
import UserDetails from './UserDetails';

class UserDetailsComponent extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="panel">
                            <div className="panel-heading">
                                <div className="pull-left">
                                    <h3 className="panel-title">Search Results</h3>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                            <div className="panel-body no-padding">
                                <div className="table-responsive" style={{ marginTop: "-1px" }}>
                                    <table className="table table-default">
                                        <thead>
                                            <tr>
                                                <th className="text-center" style={{ width: "12%" }}>Name</th>
                                                <th className="text-center" style={{ width: "5%" }}>UserId</th>
                                                <th className="text-center">Location</th>
                                                <th className="text-center">User Type</th>
                                                <th className="text-center">Rating</th>
                                                <th className="text-center" style={{ width: "12%" }}>Expand</th>
                                            </tr>
                                        </thead>
                                        <UserDetails userId={14429} />
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserDetailsComponent;