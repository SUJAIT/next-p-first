import NextAuth from "next-auth/next";
import CredentialsProvider from 'next-auth/providers/credentials'

const handler = NextAuth({
    session: {
        strategy: 'jwt'
    },
    providers: [

        CredentialsProvider({
            credentials: {
                email: { label: "Email", type: "text", required: true, placeholder: "Your Email" },
                password: { label: "Password", type: "password", required: true, placeholder: "your password" },

            },

            async authorize(credentials) {

                // destracrture
                const { email, password } = credentials;

                if (!credentials) {
                    return null;
                }
       if(email){
        const currentUser = users.find((user) => user.email === email)
if(currentUser){
if(currentUser.password === password) {
    return currentUser;
}
}
       }
return null;
            
            }

        })

    ],
});

const users = [
    {
        id : 1,
        name : "Sujait",
        email : "sujait@gmail.com",
        password : "password",
    },
    {
        id : 2,
        name : "Rony",
        email : "rony@gmail.com",
        password : "password",
    },    {
        id : 1,
        name : "rahat",
        email : "rahat@gmail.com",
        password : "password",
    }
]


export { handler as GET, handler as POST };