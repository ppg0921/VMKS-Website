interface AnnouncementInput {
    title: string,
    content: string
}

interface ToolInput {
    name: string,
    partName: string,
    category: string,
    position: string,
    description: string,
    photoLink: string,
    usage: number,
    tutorialLink: string,
    remain: number
}

interface DisposableMaterialInput {
    name: string,
    partName: string | null,
    category: string,
    position: string,
    description: string,
    photoLink: string,
    usage: number,
    tutorialLink: string,
    fee: number | null,
    remain: boolean
}

interface MaterialInput {
    name: string,
    partName: string|null,
    category: string,
    valuable: boolean,
    position: string,
    description: string,
    photoLink: string,
    usage: number,
    tutorialLink: string,
    fee: number,
    remain: number
}

interface MachineInput {
    name: string,
    partName: string,
    category: string,
    position: string,
    description: string,
    photoLink: string,
    usage: number,
    tutorialLink: string
}

export { AnnouncementInput, ToolInput, DisposableMaterialInput, MachineInput, MaterialInput }
