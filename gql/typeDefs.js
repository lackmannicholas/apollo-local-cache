import gql from 'graphql-tag';

const typeDefs = gql`
    type KeyValuePair {
        key: String!
        value: String!
    }
    extend type Query {
        isLoggedIn: Boolean!
        showMessage: Boolean!
        alertMessage: String
        loader: String
        navCollapsed: Boolean!
        cachePairs: [KeyValuePair!]
    }

    extend type Mutation {
        isLoggedIn(loggedIn: Boolean!): Boolean!
        showMessage(message: String): Boolean!
        alertMessage(message: String): String
        loader(loader: String): String
        navCollapsed(collapsed: Boolean!): Boolean!
        set(pair: KeyValuePair!): KeyValuePair
    }
`;

export default typeDefs;