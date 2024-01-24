import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

export default function Businesses() {
    const { accessToken, user } = useSelector((state) => state.auth)
    return accessToken && user?.userType === 2 ? <Outlet /> : <Navigate to={'/businesses/login'} />
}
