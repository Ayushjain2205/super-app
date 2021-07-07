import React, { useState, useEffect } from "react";
import {
  Switch,
  BrowserRouter as Router,
  Route,
  Redirect,
} from "react-router-dom";
import { UserContext } from "./context/UserContext";
import { useAuth0 } from "@auth0/auth0-react";

// Import pages
import Homepage from "./components/Screens/Homepage";
import Groceries from "./components/Screens/Groceries";
import Restaurants from "./components/Screens/Restaurants";
import RideWithUs from "./components/Screens/RideWithUs";
import Cart from "./components/Screens/Cart";
import Product from "./components/Screens/Product";
import ScooterBooked from "./components/Screens/ScooterBooked.js";

import WalletForm from "./components/Screens/WalletForm";
import Chat from "./components/Screens/Chat";
import LoginScreen from "./components/Screens/LoginScreen";
import BookRide from "./components/Screens/BookRide";

import Navbar from "./components/layout/Navbar";

import { GraphQLClient } from "graphql-request";
import "./App.css";

import Shop from "./components/Shop/Shop";

const App = () => {
  const { user, isAuthenticated } = useAuth0();

  const [shops, setShops] = useState(null);
  const [users, setUsers] = useState(null);
  const graphcms = new GraphQLClient(
    "https://api-ap-northeast-1.graphcms.com/v2/ckp8dwi04vju901xp03oz89yu/master"
  );
  console.log(shops);

  useEffect(() => {
    const fetchUsers = async () => {
      const { users } = await graphcms.request(
        `{
          customers {
           id
           name
          email
          mobile
        }
      }`
      );
      setUsers(users);
    };

    const fetchShops = async () => {
      const { shops } = await graphcms.request(
        `
      { 
        shops {
          name
          rating
          slug
          category
          location
          logo{
            id
            handle
          }
          shopPicture{
            id
            handle
          }
          description{
            html
          }
          googleLink
          websiteLink
          products{
            name
            price
            image{
              id
              handle
            }
          }
        }
      }
    `
      );

      setShops(shops);
    };

    fetchUsers();
    fetchShops();
    console.log(shops);
  }, []);

  const [userDetails, setUserDetails] = useState({
    email: user ? user.email : "ayushjain2205@gmail.com",
  });

  console.log(isAuthenticated);

  return (
    <UserContext.Provider value={userDetails}>
      <div className='App'>
        <Router>
          <Navbar />
          {/* <Route exact path='/login' render={(props) => <LoginScreen />} />
          <Route exact path='/' render={(props) => <Homepage />} /> */}
          {/* {!user ? (
            <Redirect to={{ pathname: "/login" }} />
          ) : (
            <Redirect to={{ pathname: "/" }} />
          )} */}
          <Switch>
            <Route exact path='/login' render={(props) => <LoginScreen />} />
            <Route exact path='/' render={(props) => <Homepage />} />
            <Route exact path='/groceries' render={(props) => <Groceries />} />
            <Route exact path='/food' render={(props) => <Restaurants />} />
            <Route exact path='/ride' render={(props) => <RideWithUs />} />
            <Route exact path='/book-ride' render={(props) => <BookRide />} />
            <Route exact path='/cart' render={(props) => <Cart />} />
            <Route exact path='/product' render={(props) => <Product />} />
            <Route
              exact
              path='/scooter-booked'
              render={(props) => <ScooterBooked />}
            />

            <Route exact path='/wallet' render={(props) => <WalletForm />} />
            <Route exact path='/chat' render={(props) => <Chat />} />
            <Route path='/shops/:slug'>
              <Shop shops={shops} />
            </Route>
          </Switch>
        </Router>
      </div>
    </UserContext.Provider>
  );
};
export default App;
