import React from 'react'
import SignUpForm from '@/components/auth/sign-up-form'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sign Up',
  description: 'Sign up for an account',
}

const SignUp = () => {
  return (
    <SignUpForm />
  )
}

export default SignUp