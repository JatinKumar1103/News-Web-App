import React from 'react';

const ProfileDetail = (props) => {
  return (
    <div className="card mx-auto mt-5" style={{ maxWidth: "600px" }}>
      <div className="card-header text-center">
        <h5 className="card-title">Profile Details</h5>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-md-4 text-md-right">
            <strong>Name:</strong>
          </div>
          <div className="col-md-8">
            {props.userDetails.name}
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 text-md-right">
            <strong>Email:</strong>
          </div>
          <div className="col-md-8">
            {props.userDetails.email}
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 text-md-right">
            <strong>Account Created On:</strong>
          </div>
          <div className="col-md-8">
            {props.userDetails.created_at}
          </div>
        </div>
        
        {/* Add more profile details as needed */}
      </div>
    </div>
  );
};

export default ProfileDetail;
