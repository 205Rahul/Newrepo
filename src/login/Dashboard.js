import React from "react";
import "../assets/css/bootstrap.min.css";
import "../assets/css/font-awesome.min.css";
import "../assets/css/datepicker3.css";
import "../assets/css/styles.css";
import { Link } from "react-router-dom";
export const Dashboard = () => {
  return (
    <div>
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
                      <a  className="pull-left">
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
        
        <ul className="nav menu">
          
          <li>
            <Link to="/user">Me</Link> 
          </li>
          <li>
            <a >
              <em className="fa fa-bar-chart">&nbsp;</em> Subscription
            </a>
          </li>
          <li>
            <a href="elements.html">
              <em className="fa fa-toggle-off">&nbsp;</em> Workout-Plan
            </a>
          </li>
          <li>
            <a href="panels.html">
              <em className="fa fa-clone">&nbsp;</em> Diet-Plan
            </a>
          </li>
          <li className="parent ">
            <a data-toggle="collapse" href="#sub-item-1">
              <em className="fa fa-navicon">&nbsp;</em> Multilevel{" "}
              <span
                data-toggle="collapse"
                href="#sub-item-1"
                className="icon pull-right"
              >
                <em className="fa fa-plus"></em>
              </span>
            </a>
            <ul className="children collapse" id="sub-item-1">
              <li>
                <a className="" href="#">
                  <span className="fa fa-arrow-right">&nbsp;</span> Sub Item 1
                </a>
              </li>
              <li>
                <a className="" href="#">
                  <span className="fa fa-arrow-right">&nbsp;</span> Sub Item 2
                </a>
              </li>
              <li>
                <a className="" href="#">
                  <span className="fa fa-arrow-right">&nbsp;</span> Sub Item 3
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="login.html">
              <em className="fa fa-power-off">&nbsp;</em> Logout
            </a>
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
            <li className="active">Dashboard</li>
          </ol>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <h1 className="page-header">Dashboard</h1>
          </div>
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
