// this middleware protects route by redirecting user to signin page if they have not signed in yet

export {default} from 'next-auth/middleware';

export const config = {
    matcher: ['/users/:id*']
}