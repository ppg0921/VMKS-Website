import { findAncestor } from 'typescript';
import { prisma } from '../../prisma/client.ts'
import { ToolInput } from '../types/types.ts';

const Query = {
  AllAnnouncements: async (_parents, args, context) => {
    const announcements = await prisma.announcement.findMany();
    // console.log(announcements);
    return announcements;
  },
  AllTools: async (_parents, args, context) => {
    const tools = await prisma.tool.findMany();
    return tools;
  },
  SearchToolsByCategory: async (_parents, args: { category: string }, context) => {
    const category = args.category;
    const searchToolsByCategory = await prisma.tool.findMany({
      where: {
        category: {
          startsWith: category
        }
      }
    }); 
    if (searchToolsByCategory.length === 0) {
      throw new Error("tools not found!");
    }

    return searchToolsByCategory;
  },
  SearchToolsByPosition: async (_parents, args: { position: string }, context) => {
    const position = args.position;
    const searchToolsByPosition = await prisma.tool.findMany({
      where: {
        position: position,
      }
    });
    if (searchToolsByPosition.length === 0) {
      throw new Error("tools not found!");
    }

    return searchToolsByPosition;
  },
  AllDisposableMaterials: async (_parents, args, context) => {
    const materials = await prisma.disposableMaterial.findMany();
    // console.log(materials);
    return materials;
  },
  AllMachines: async (_parents, args, context) => {
    const machines = await prisma.machine.findMany();
    return machines;
  },
  AllMaterials: async(_parents, args, context) => {
    const materials = await prisma.material.findMany();
    return materials;
  },
  AllUser: async () => {
    const users = await prisma.user.findMany();
    return users;
  },
  AllUserMaterials: async () => {
    const UserMaterials = await prisma.userMaterial.findMany();
    return UserMaterials;
  },
  AllThreeDP: async () => {
    const threeDP = await prisma.threeDP.findMany();
    return threeDP;
  },
  FindThreeDPByCategory: async(_parents, args: {category: string}, context) => {
    const category = args.category;
    console.log(category);
    const FindThreeDPByCategory = await prisma.threeDP.findMany({
      where: {
        AND:{
          id: { not: -345 },
          category: {
            startsWith: category
          },          
        },
      },

    });   
    return FindThreeDPByCategory;
  },
}

export { Query }