import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    pages: {
        signIn: '/dashboard',
    },
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: "email", type: "email", placeholder: "jsmith@gmail.com" },
                password: { label: "password", type: "password" },
                avatar: { label: "avatar", type: "text" }
            },
            async authorize(credentials, req) {
                if (!credentials) {
                    return null;
                }

                try {
                    const response = await fetch("https://628bf017667aea3a3e387e51.mockapi.io/login", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(credentials)
                    });

                    const responseImg = await fetch("https://628bf017667aea3a3e387e51.mockapi.io/me")
                    const dataImg = await responseImg.json();

                    if (response.ok && responseImg.ok) {
                        const data = await response.json();
                        const accessToken = data.access_token;

                        return {
                            id: data.id,
                            email: credentials.email,
                            username: dataImg.username,
                            name: dataImg.avatar,
                            avatar: dataImg.avatar,
                            token: accessToken
                        };
                    }

                    return null;
                } catch (error) {
                    console.error(error);
                    return null;
                }

            }
        })
    ]
});

export { handler as GET, handler as POST };
