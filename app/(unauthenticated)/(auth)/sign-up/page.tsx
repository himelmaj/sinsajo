import React from 'react'
import SignUpForm from '@/components/auth/sign-up-form'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sign Up | Sinsajo',
  description: 'Sign up for an account to access the platform.',
}

const SignUp = () => {
  return (
    <SignUpForm />
  )
}

export default SignUp