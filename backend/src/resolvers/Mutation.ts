import { prisma } from "../../prisma/client.ts";
import { AnnouncementInput, ToolInput, DisposableMaterialInput, MachineInput, MaterialInput } from "../types/types.ts";

const Mutation = {

    // Announcement Mutation 
    AddAnnouncement: async (_parents, args: { announcementInput: AnnouncementInput }, context) => {
        const { title, content } = args.announcementInput;
        const date = new Date();
        const newAnnouncement = await prisma.announcement.create({
            data: {
                title: title,
                date: date,
                content: content
            }
        });
        // console.log(newAnnouncement);
        return newAnnouncement;
    },
    DeleteAnnouncement: async(_parents, args: { id: number }, context) => {
        const id = args.id;
        const findAnnouncement = await prisma.announcement.findFirst({
            where: { 
                id: id 
            }
        });
        if (!findAnnouncement) { 
            throw new Error("announcement not found!");
        }

        const daleteAnnouncement = await prisma.announcement.delete({
            where: {
                id: id
            }
        });
        return daleteAnnouncement;
    },
    EditAnnouncement: async(_parents, args: { id: number, announcementInput: AnnouncementInput }, context) => {
        const id = args.id;
        const { title, content } = args.announcementInput;
        const findAnnouncement = await prisma.announcement.findFirst({
            where: { 
                id: id 
            }
        });
        if (!findAnnouncement) { 
            throw new Error("announcement not found!");
        }

        const editAnnouncement = await prisma.announcement.update({
            where: {
                id: id
            },
            data: {
                title: title,
                content: content
            }
        });
        return editAnnouncement;
    },

    // Tool Mutation
    AddTool: async (_parents, args: { toolInput: ToolInput }, context) => {
        const { name, partName, category, position, description, photoLink, usage, tutorialLink, remain } = args.toolInput;
        const newTool = await prisma.tool.create({
            data: {
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
    },

    // DisposableMaterial Mutation
    AddDisposableMaterial: async (_parents, args: { disposableMaterialInput: DisposableMaterialInput }, context) => {
        const { name, partName, category, position, description, photoLink, usage, tutorialLink, fee, remain } = args.disposableMaterialInput;
        const newDisposableMaterial = await prisma.disposableMaterial.create({
            data: {
                name: name,
                partName: partName,
                category: category,
                position: position,
                description: description,
                photoLink: photoLink,
                usage: usage,
                tutorialLink: tutorialLink,
                fee: fee,
                remain: remain
            }
        });
        return newDisposableMaterial;
    },

    // Machine Mutation
    AddMachine: async (_parents, args: { machineInput: MachineInput }, content) => {
        const { name, partName, category, position, description, photoLink, usage, tutorialLink } = args.machineInput;
        const newMachine = await prisma.machine.create({
            data: {
                name: name,
                partName: partName,
                category: category,
                position: position,
                description: description,
                photoLink: photoLink,
                usage: usage,
                tutorialLink: tutorialLink
            }
        });
        // console.log(newMachine);
        return newMachine;
    },

    // Material Mutation
    AddMaterial: async(_parents, args: {materialInput: MaterialInput}, context) => {
        const { name, partName, category, valuable, position, description, photoLink, usage, tutorialLink, fee, remain } = args.materialInput;
        const newMaterial = await prisma.material.create({
            data: {
                name: name,
                partName: partName,
                category: category,
                valuable: valuable,
                position: position,
                description: description,
                photoLink: photoLink,
                usage: usage,
                tutorialLink: tutorialLink,
                fee: fee,
                remain: remain
            }
        });
        return newMaterial;
    }
}

export { Mutation }