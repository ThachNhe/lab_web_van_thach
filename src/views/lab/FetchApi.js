import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import "./FetchApi.scss";
class AddComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      arrUsers: [],
      userId: "",
      title: "",
      body: "",
      titleRes: "",
      bodyRes: "",
      isHasDataUser: false,
      isHasDataPost: false,
    };
  }
  handleInputUserId = (event) => {
    this.setState({
      userId: event.target.value,
    });
  };
  onClickGetUser = async (userId) => {
    let user = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    console.log(user);
    if (user && user.data && user.data.name && user.data.email) {
      toast.success("Get user success");
      this.setState({
        user: user.data,
        isHasDataUser: true,
      });
    } else {
      toast.error("failed");
    }
  };
  handleOnClickGetAllUsers = async () => {
    let res = await axios.get(`https://jsonplaceholder.typicode.com/users`);
    console.log(res);
    if (res && res.data) {
      toast.success("Get all users success");
      this.setState({
        arrUsers: res.data,
        isHasDataArrUser: true,
      });
    }
  };
  handleOnChangeInputPost = (event, id) => {
    let copyState = this.state;
    copyState[id] = event.target.value;
    this.setState({
      ...copyState,
    });
  };
  handleOnClickCreatePost = async () => {
    let res = await axios.post("https://jsonplaceholder.typicode.com/posts", {
      data: {
        title: this.state.title,
        body: this.state.body,
      },
    });
    if (res && res.data) {
      toast.success("Create post success");
      this.setState({
        titleRes: res.data.data.title,
        bodyRes: res.data.data.body,
        isHasDataPost: true,
      });
    }
  };
  render() {
    let { user, arrUsers, titleRes, bodyRes, isHasDataUser, isHasDataPost } =
      this.state;
    return (
      <>
        <div className="title">JSONplaceholder API Example</div>
        <div className="fetch-api-container">
          <div className="get-user-container">
            <div className="title-get-user">Get User by ID</div>
            <div className="box-input-info-user">
              <label>User ID: </label>
              <input
                type="number"
                onChange={(event) => this.handleInputUserId(event)}
                value={this.state.userId}
              ></input>
              <button onClick={(id) => this.onClickGetUser(this.state.userId)}>
                Get User
              </button>
            </div>
            <div className="content-get-api">
              <div
                className={
                  isHasDataUser ? "content-user" : "content-user-no-display"
                }
              >
                <div>
                  <label>Name: </label>
                  <span>{user.name}</span>
                </div>
                <div>
                  <label>Email: </label>
                  <span>{user.email}</span>
                </div>
                <div>
                  <label>Phone: </label>
                  <span>{user.phone}</span>
                </div>
                <div>
                  <label>WebsiteL: </label>
                  <span>{user.website}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="get-all-users">
            <div className="title-get-all-user">All Users</div>
            <button onClick={() => this.handleOnClickGetAllUsers()}>
              Get All Users
            </button>

            <div className="content-all-users">
              {arrUsers &&
                arrUsers.map((user, index) => {
                  return (
                    <>
                      <div className="box-user">
                        <div className="title-box-user">{user.name}</div>
                        <div>
                          <label>Email: </label>
                          <span>{user.email}</span>
                        </div>
                        <div>
                          <label>Phone: </label>
                          <span>{user.phone}</span>
                        </div>
                        <div>
                          <label>WebsiteL: </label>
                          <span>{user.website}</span>
                        </div>
                      </div>
                    </>
                  );
                })}
            </div>
          </div>
          <div className="box-create-post">
            <div className="title-post">Create Post</div>
            <div className="input-info">
              <label>Title: </label>
              <input
                type="text"
                value={this.state.title}
                onChange={(event) =>
                  this.handleOnChangeInputPost(event, "title")
                }
              ></input>
              <label>Body: </label>
              <input
                type="text"
                value={this.state.body}
                onChange={(event) =>
                  this.handleOnChangeInputPost(event, "body")
                }
              ></input>
              <button onClick={() => this.handleOnClickCreatePost()}>
                Create post
              </button>
            </div>
            <div className="content-post-container">
              <div
                className={
                  isHasDataPost ? "container-post" : "container-post-no-display"
                }
              >
                <div className="content-post-title">
                  <span>Title:</span>
                  {titleRes}
                </div>
                <div className="content-post-title">
                  <span>Body:</span> {bodyRes}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AddComponent;
