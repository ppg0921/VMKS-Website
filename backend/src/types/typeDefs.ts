import { GraphQLScalarType, Kind } from 'graphql';
import { getTsBuildInfoEmitOutputFilePath } from 'typescript';

const DateTime = new GraphQLScalarType({
  name: 'DateTime',
  description: 'DateTime custom scalar type',
  async serialize(value) {
    if (value instanceof Date) {
      return value.getTime(); // Convert outgoing Date to integer for JSON
    }
    throw Error('GraphQL Date Scalar serializer expected a `Date` object');
  },
  async parseValue(value) {
    if (typeof value === 'number') {
      return new Date(value); // Convert incoming integer to Date
    }
    throw new Error('GraphQL Date Scalar parser expected a `number`');
  },
  async parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      // Convert hard-coded AST string to integer and then to Date
      return new Date(parseInt(ast.value, 10));
    }
    // Invalid hard-coded value (not an integer)
    return null;
  },
});

const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  ### Define Data Structure ###
  
  scalar DateTime

  input AnnouncementInput {
    title: String!
    content: String!
  }

  input ToolInput {
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

  input MachineInput {
    name: String!
    partName: String
    category: String!
    position: String!
    description: String!
    photoLink: String!
    usage: Int!
    tutorialLink: String!
  }

  input MaterialInput {  
    name: String!
    partName: String
    category: String!
    valuable: Boolean!
    position: String!
    description: String!
    photoLink: String!
    usage: Int!
    tutorialLink: String!
    fee: Int!
    remain: Int!
  }

  type Announcement {
    id: Int!
    title: String!
    date: DateTime!
    content: String!
  }

  input DisposableMaterialInput {  
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

  type Material {
    id: Int!
    name: String!
    partName: String
    category: String!
    valuable: Boolean!
    position: String!
    description: String!
    photoLink: String!
    usage: Int!
    tutorialLink: String!
    fee: Int!
    remain: Int!
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

  type Machine {
    id: Int!
    name: String!
    partName: String
    category: String!
    position: String!
    description: String!
    photoLink: String!
    usage: Int!
    tutorialLink: String!
  }

  type ThreeDP {
    id:           Int!    
    name:         String!
    category:     String!
    position:     String!
    description:  String!
    photoLink:    String!
    usage:        Int!
    tutorialLink: String!
    waiting:      User!
  }

  type UserMaterial {
    id:         Int!
    name:       String!
    partName:   String
    borrower:   User!
    borrowerId: Int!
    borrowNum:  Int!
    borrowDate: DateTime!
    returnDate: DateTime
    status:     String!
  }

  type User {
    id: Int!
    name: String!
    studentID: String!
    password: String!
    photoLink: String!
    threeDPUse: ThreeDP
    threeDPId: Int!
    laserCutAvailable: Boolean!
    borrowHistory: UserMaterial!
  }


  ### Define Resolvers ###

  type Query {
    AllAnnouncements: [Announcement]
    AllDisposableMaterials: [DisposableMaterial]
    AllMaterials: [Material]
    AllTools: [Tool]
    AllMachines: [Machine]
    AllUser: [User]
    AllUserMaterials: [UserMaterial]
    AllThreeDP: [ThreeDP]
  }

  type Mutation {
    AddAnnouncement(announcementInput: AnnouncementInput!): Announcement
    DeleteAnnouncement(id: Int!): Announcement
    EditAnnouncement(id: Int!, announcementInput: AnnouncementInput!): Announcement
    AddTool(toolInput: ToolInput!): Tool
    AddDisposableMaterial(disposableMaterialInput: DisposableMaterialInput!): DisposableMaterial
    AddMachine(machineInput: MachineInput!): Machine
    AddMaterial(materialInput: MaterialInput!): Material
  }
`;

export { typeDefs, DateTime }
