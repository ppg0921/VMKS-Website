import { prisma } from '../../prisma/client.ts'

const Query = {
  AllAnnouncements: async() => {
    const announcements = await prisma.announcement.findMany();
    // console.log(announcements);
    return announcements;
  },
  AllTools: async () => {
    const tools = await prisma.tool.findMany();
    return tools;
  }
}

export { Query }