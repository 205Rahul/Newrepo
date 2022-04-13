import React from "react";
import "../assets/css/bootstrap.min.css";
import "../assets/css/font-awesome.min.css";
import "../assets/css/datepicker3.css";
import "../assets/css/styles.css";
import { Link } from "react-router-dom";

export const Dashboard = () => {
  var style={
    marginLeft:"6px"
  }
  return (
    <div>
      <Link className="sidebar-link" to='/dashboard'>
								<i className="align-middle" data-feather="sliders"></i> <span className="align-middle">Dashboard</span>
							</Link>
      <link href="css/bootstrap.min.css" rel="stylesheet" />
      <link href="css/font-awesome.min.css" rel="stylesheet" />
      <link href="css/datepicker3.css" rel="stylesheet" />
      <link href="css/styles.css" rel="stylesheet"></link>
      <nav className="navbar navbar-custom navbar-fixed-top" role="navigation">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#sidebar-collapse"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">
              <span>FitmeUp</span>-Admin
            </a>
            <ul className="nav navbar-top-links navbar-right">
              <li className="dropdown">
                <a
                  className="dropdown-toggle count-info"
                  data-toggle="dropdown"
                  href="#"
                >
                  <em className="fa fa-envelope"></em>
                  <span className="label label-danger">15</span>
                </a>
                <ul className="dropdown-menu dropdown-messages">
                  <li>
                    <div className="dropdown-messages-box">
                      <a href="profile.html" className="pull-left">
                        <img
                          alt="image"
                          className="img-circle"
                          src="http://placehold.it/40/30a5ff/fff"
                        />
                      </a>
                      <div className="message-body">
                        <small className="pull-right">3 mins ago</small>
                        <a href="#">
                          <strong>John Doe</strong> commented on{" "}
                          <strong>your photo</strong>.
                        </a>
                        <br />
                        <small className="text-muted">1:24 pm - 25/03/2015</small>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div id="sidebar-collapse" className="col-sm-3 col-lg-2 sidebar">
        <div className="profile-sidebar">
          <div className="profile-userpic">
            <img
              src="http://placehold.it/50/30a5ff/fff"
              className="img-responsive"
              alt=""
            />
          </div>
          <div className="profile-usertitle">
            <div className="profile-usertitle-name">Username</div>
            <div className="profile-usertitle-status">
              <span className="indicator label-success"></span>Online
            </div>
          </div>
          <div className="clear"></div>
        </div>
        <div className="divider"></div>
        <form role="search">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Search" />
          </div>
        </form>
        <ul className="nav menu">
          <li className="active">
            <a>
              <em className="fa fa-dashboard">&nbsp;</em> Dashboard
            </a>
          </li>
          <br/>
          
          
          <li>
            <Link to="/user">
              <em className="fa fa-user">&nbsp;</em>Members
            </Link>
          </li>
          <li>
            <Link to="/user_measurement">
              <em className="fa fa-calculator">&nbsp;</em>Measurement
            </Link>
          </li>
          <li>
            <Link to="/diet">
              <em className="fa fa-hamburger">&nbsp;</em>Diet
            </Link>
          </li>
          <li>
            <Link to="/user_diet">
              <em className="fas fa-hamburger">&nbsp;</em>Member_Diet
            </Link>
          </li>
          <li>
            <Link to="/subscription">
              <em className="fas fa-credit-card">&nbsp;</em>Subscription
            </Link>
          </li>
          <li>
            <Link to="/userSubscription">
              <em className="fab fa-cc-visa">&nbsp;</em>Member_Subscription
            </Link>
          </li>
          <li>
            <Link to="/workout">
              <em className="	fas fa-running">&nbsp;</em>Workout
            </Link>
          </li>
          <li>
            <Link to="/workoutplan">
              <em className="fas fa-biking">&nbsp;</em>Workout_Plan
            </Link>
          </li>

          <li>
            <Link to="/login">
              <em className="fa fa-power-off">&nbsp;</em> Logout
            </Link>
          </li>
        </ul>
      </div>

      <div className="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">
        <div className="row">
          <ol className="breadcrumb">
            <li>
              <a href="#">
                <em className="fa fa-home"></em>
              </a>
            </li>
            <li className="active">Dashboar</li>
          </ol>
        </div>

      
      </div>

      <script src="js/jquery-1.11.1.min.js"></script>
      <script src="js/bootstrap.min.js"></script>
      <script src="js/chart.min.js"></script>
      <script src="js/chart-data.js"></script>
      <script src="js/easypiechart.js"></script>
      <script src="js/easypiechart-data.js"></script>
      <script src="js/bootstrap-datepicker.js"></script>
      <script src="js/custom.js"></script>
    </div>
  );
};
