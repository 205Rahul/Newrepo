import React from 'react'
import { Login } from '../login/Login'
import { Registration } from '../login/Registration'
import { Route } from 'react-router'
import { Routes } from 'react-router'
import { Dashboard } from '../components/Dashboard'
import { User } from '../user/User'
import { User_Measurement } from '../user/User_Measurement'
import { Diet } from '../diet/Diet'
import { User_diet } from '../diet/User_diet'
import { Subscription } from '../subscription/Subscription'
import { User_Subscription } from '../subscription/User_Subscription'
import { Workout } from '../workout/Workout'
import { WorkoutPlan } from '../workout/WorkoutPlan'
import { AddDiet } from '../diet/AddDiet'
import { AddSubscription } from '../subscription/AddSubscription'
import { Addworkout } from '../workout/Addworkout'
export const AdminRouting = () => {
  return (
    <div>
        <Routes>
            {/* login */}
            <Route  path="/" element={<Login/>}></Route>
            <Route path="registration" element={<Registration/>}></Route>
            {/* Dashboard */}
            <Route path='dashboard' element={<Dashboard/>}></Route>
            <Route path='user' element={<User/>}></Route>
            <Route path='user_measurement' element={<User_Measurement/>}></Route>
            <Route path='diet' element={<Diet/>}></Route>
            <Route path="/adddiet" element={<AddDiet/>}></Route>

            <Route path='user_diet' element={<User_diet/>}></Route>
            <Route path='subscription' element={<Subscription/>}></Route>
            <Route path="/addsubscription" element={<AddSubscription/>}></Route>

            <Route path='userSubscription' element={<User_Subscription/>}></Route>
            <Route path='workout' element={<Workout/>}></Route>
            <Route path='workoutplan' element={<WorkoutPlan/>}></Route>
            <Route path="/addworkout" element={<Addworkout/>}></Route> 


        </Routes>
    </div>
  )
}
