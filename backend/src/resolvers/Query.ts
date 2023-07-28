import { prisma } from '../../prisma/client.ts'

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
  AllDisposableMaterials: async (_parents, args, context) => {
    const materials = await prisma.disposableMaterial.findMany();
    // console.log(materials);
    return materials;
  },
  AllMachines: async () => {
    const machines = await prisma.machine.findMany();
    return machines;
  }
}

export { Query }