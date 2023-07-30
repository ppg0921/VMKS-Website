const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  input AnnouncementInput {
    title: String!
    content: String!
  }

  type Announcement {
    id: Int!
    title: String!
    date: String!
    content: String!
  }

  type DisposableMaterial {
    id: Int!     
    name: String!
    partName: String
    category: String!
    position: String!
    description: String!
    photoLink: String!
    usage: Int!
    tutorialLink: String!
    fee: Int
    remain: Boolean!
  }

  type Tool {
    id: Int!
    name: String!
    partName: String
    category: String!
    position: String!
    description: String!
    photoLink: String!
    usage: Int!
    tutorialLink: String!
    remain: Int!
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    AllAnnouncements: [Announcement]
    AllDisposableMaterials: [DisposableMaterial]
    AllTools: [Tool]
  }

  type Mutation {
    AddAnnouncement(announcementInput: AnnouncementInput!): Announcement
  }
`;

export { typeDefs }