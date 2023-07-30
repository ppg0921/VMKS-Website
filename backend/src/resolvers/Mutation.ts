import { prisma } from "../../prisma/client.ts";
import { AnnouncementInput } from "../types/types.ts";

const Mutation = {
    AddAnnouncement: async(_parents, args: {announcementInput: AnnouncementInput}, context) => {
        const { title, content } = args.announcementInput;
        const date = new Date().toUTCString();
        const newAnnouncement = await prisma.announcement.create({
            data:{
                title: title,
                date: date,
                content: content
            }
        });
        // console.log(newAnnouncement);
        return newAnnouncement;
    }
}

export { Mutation }