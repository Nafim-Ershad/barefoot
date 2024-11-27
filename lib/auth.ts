import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from 'bcryptjs';
import { getUserByEmail, getUserHashedPassword } from "./db";

export const { handlers, signIn, signOut, auth } = NextAuth({ 
    secret: process.env.NEXT_SECRET,
    session: {
        strategy: 'jwt'
    },
    pages: {
        signIn: '/auth/signIn',
    },
    providers: [ 
        Credentials({
            name: "credentials",
            credentials: {
                email: {},
                password: {}
            },
            async authorize(credentials){
                try{
                    if(credentials){
                        if (!credentials?.email || !credentials?.password) {
                            throw new Error("Email and Password Required");
                        }
                        const { email, password } = credentials;

                        const user = await getUserByEmail(email);

                        if (!user) {
                            throw new Error("Invalid credentials");
                        }
                        const hashedPassword = await getUserHashedPassword(email);
                        
                        if(hashedPassword){
                            const isPasswordValid = await bcrypt.compare(password, hashedPassword);
                            if(isPasswordValid)
                            {
                                return user;
                            }
                        }

                        throw new Error("Failed to validate password");
                    }
                    throw new Error("No credentials");
                }
                catch(error){
                    throw new Error(`Error: ${error}`);
                }
            }
        }) 
    ],
    callbacks: {
        async jwt({ token, user }){
            console.log(user);
            if (user) {
                token.id = user.id;
                token.email = user.email;
            }
            return token;
        
        },
        async session({ session, token }) {
            if (token) {
              session.user.id = token.id as string;
              session.user.email = token.email as string;
            }
            return session;
        }
    }
});