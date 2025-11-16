'use client';
import React from 'react'
import { useSearchParams } from 'next/navigation'


function OauthSuccesPage() {
   const searchParams = useSearchParams();
     const connectedAccountId = searchParams.get("connectedAccountId")
   return (
     <div>
       <p>SUCCESSS</p>
       <p>Save this number please: {connectedAccountId}</p>
     </div>
   )
}

export default OauthSuccesPage
