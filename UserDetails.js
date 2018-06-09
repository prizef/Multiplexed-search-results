import React from "react";
import { getUserDetailsById } from "./UserDetailsMultiplexer";
import UserAvatar from "./UserAvatar";
import "./UserDetails.css";

class UserDetails extends React.Component {
  state = {
    expandUserDetail: false,
    avatarURL: "",
    firstName: "",
    lastName: "",
    email: "",
    userTypeId: "",
    schoolId: "",
    athlete: {
      dob: "",
      birthplace: "",
      schoolId: "",
      sportslevelid: "",
      educationlevelid: "",
      classyearid: "",
      graduationyear: "",
      shortbio: ""
    },
    coach: {
      title: "",
      schoolId: "",
      isCurrent: null,
      shortBio: ""
    },
    advocate: {
      title: "",
      schoolId: "",
      clubId: "",
      isCurrent: null,
      shortBio: ""
    },
    athleticDirector: {
      title: "",
      schoolId: "",
      clubId: "",
      isCurrent: null,
      shortBio: ""
    }
  };

  componentDidMount() {
    getUserDetailsById(this.props.userId).then(
      resp =>
        this.setState({
          avatarURL: resp.AvatarUrl,
          firstName: resp.FirstName,
          lastName: resp.LastName,
          email: resp.Email,
          userTypeId: resp.UserTypeId,
          coach: resp.Coach,
          athlete: resp.Athlete,
          advocate: resp.Advocate,
          athleticDirector: resp.AthleticDirector
        }),
      err => console.error("Error getting user details.", err)
    );
  }

  render() {
    return (
      <tbody>
        <tr>
          <td>
            <span id="avatarProfilePicture">
              <UserAvatar id={this.props.userId} imageClass="img-circle" />
            </span>
          </td>
          <td className="text-center">{this.props.userId}</td>
          <td>United States</td>
          <td id="avatarProfileUserType">
            <UserAvatar id={this.props.userId} />
          </td>
          <td className="text-center">
            <div className="rating">
              <span className="star" />
            </div>
          </td>
          <td className="text-center">
            <button
              className="btn btn-sm"
              data-action="collapse"
              data-toggle="tooltip"
              data-placement="top"
              data-title="Collapse"
              onClick={() =>
                this.setState(prevState => ({
                  expandUserDetail: !prevState.expandUserDetail
                }))
              }
            >
              <i
                className={
                  this.state.expandUserDetail
                    ? "fa fa-angle-down"
                    : "fa fa-angle-up"
                }
              />
            </button>
          </td>
        </tr>
        <tr style={{ display: !this.state.expandUserDetail && "none" }}>
          <td className="text-center">GPA</td>
          <td className="text-center">Sports Position</td>
          <td className="text-center" />
          <td />
          <td className="text-center">Short Bio</td>
          <td className="text-center">Other Info</td>
        </tr>
      </tbody>
    );
  }
}

export default UserDetails;
