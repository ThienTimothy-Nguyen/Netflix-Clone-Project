import * as React from 'react';
import { Outlet, createRootRoute } from '@tanstack/react-router';
import Header from '@/components/Header';
import { ClerkProvider} from '@clerk/react';

const publishableKey = import.meta.env.VITE_PUBLIC_CLERK_PUBLISHABLE_KEY
console.log(publishableKey)

export const Route = createRootRoute({
  component: () => (
    <React.Fragment>
      <ClerkProvider 
        publishableKey={publishableKey}
        afterSignOutUrl="/Netflix-Clone-Project/"
      >
          <Header />
          <div className='min-h-[80vh]'>
            <Outlet />
          </div>
          <footer className='flex row mt-10'>
              <div></div>
              <p className='text-xs'>© 2026 Nexflix</p>
          </footer>
      </ClerkProvider>
    </React.Fragment>
  ),

  errorComponent: ({error}) => 
    <>
      <Header />
      <div className='row'>
        App error: {error.message}
      </div>
    </>,
  notFoundComponent: () => 
    <div className='row'>
      404 - Page Not Found
    </div>
})