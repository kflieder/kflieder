
'use client'
export const dynamic = "force-dynamic";
import OauthSuccesPage from '@/components/OauthSuccesPage'
import React, { Suspense } from 'react'



function page() {
  return (
     <Suspense fallback={<div>Loading...</div>}>
      <OauthSuccesPage />
    </Suspense>
  )
}

export default page
