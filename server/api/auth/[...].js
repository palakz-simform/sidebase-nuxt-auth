import { NuxtAuthHandler } from '#auth'
import GithubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from "next-auth/providers/google";
import AzureADProvider from "next-auth/providers/azure-ad";
export default NuxtAuthHandler({
  //Custome signIn Page
    pages:{
        signIn:'/login'
    },

    providers: [
        GithubProvider.default({
           clientId: import.meta.env.VITE_GITHUB_CLIENT_ID,
           clientSecret:import.meta.env.VITE_GITHUB_CLIENT_SECRET
        }),
        GoogleProvider.default({
          clientId:import.meta.env.VITE_GOOGLE_CLIENT_ID,
          clientSecret: import.meta.env.VITE_GOOGLE_CLIENT_SECRET,
        }),
        AzureADProvider.default({
          clientId:import.meta.env.VITE_AZURE_CLIENT_ID,
          clientSecret:import.meta.env.VITE_AZURE_CLIENT_SECRET,
          tenantId:import.meta.env.VITE_AZURE_TENANT_ID,
         }),
         CredentialsProvider.default({
          name: "Credentials",

          async authorize(credentials, req) {
            console.log(credentials);
            const user = {  email: credentials.email }
            if (user) {
              return user
            } else {
              return null
           }
          }
        })
    ]
})
