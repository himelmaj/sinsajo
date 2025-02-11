import React from 'react'
import SignInForm from '@/components/auth/sign-in-form'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sign In | Sinsajo',
  description: 'Sign in to your account to access the platform.',
}

const SignIn = () => {
  return (
      <SignInForm />
  )
}

export default SignIn