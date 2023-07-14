import { prisma } from '../../prisma/client.ts'

const Query = {
  AllAnnouncements: async() => {
    const announcements = await prisma.announcement.findMany();
    // console.log(announcements);
    return announcements;
  }
}

export { Query }