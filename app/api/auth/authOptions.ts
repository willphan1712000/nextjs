import prisma from "@/prisma/client";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcrypt';
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";


export const authOptions : NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'email', placeholder: 'Enter email'},
                password: { label: 'password', type: 'password', placeholder: 'Enter password'},
            },
            async authorize(credentials, req) {
                if(!credentials?.email || !credentials.password) return null;

                const user = await prisma.user.findUnique({
                    where: {email: credentials.email}
                })

                if(!user) return null

                const passwordMatched = await bcrypt.compare(credentials.password, user.hashedPassword!);

                return passwordMatched ? user : null;
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET! // ! tells typescript compiler that we have actual value for the variable 
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!
        })
    ],
    session: {
        strategy: 'jwt'
    }
};