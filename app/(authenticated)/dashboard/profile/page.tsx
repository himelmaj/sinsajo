"use client"
import React from 'react'
import { useSession } from '@/lib/auth/auth-client'

const Profile = () => {

  const { data } = useSession()
  return (
    <>
      <div>Profile</div>
      <pre>{JSON.stringify(data?.user, null, 2)}</pre>
    </>
  )
}

export default Profile