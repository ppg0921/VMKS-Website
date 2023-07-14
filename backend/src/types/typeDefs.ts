const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  type Announcement {
    id: Int!
    title: String!
    date: String!
    content: String!
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    AllAnnouncements: [Announcement]
  }

  type Mutation {
    AddAnnouncement(title: String!, content: String!): Announcement
  }
`;

export { typeDefs }