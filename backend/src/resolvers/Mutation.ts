import { prisma } from "../../prisma/client.ts";
import { AnnouncementInput, ToolInput } from "../types/types.ts";

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
    },
    AddTool: async(_parents, args: {toolInput: ToolInput}, context) => {
        const { name, partName, category, position, description, photoLink, usage, tutorialLink, remain} = args.toolInput;
        const newTool = await prisma.tool.create({
            data:{
                name: name,
                partName: partName,
                category: category,
                position: position,
                description: description,
                photoLink: photoLink,
                usage: usage,
                tutorialLink: tutorialLink,
                remain: remain
            }
        });
        // console.log(newTool);
        return newTool;
    }
}

export { Mutation }