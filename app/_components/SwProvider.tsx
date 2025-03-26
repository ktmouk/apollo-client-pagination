'use client'

import { ApolloProvider } from "@apollo/client"
import { client } from "./client"

export const SwProvider = ({ children }: { children: React.ReactNode }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}