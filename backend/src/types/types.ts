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

interface ToolUsageUpdateInput {
    usage: number,
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

interface MaterialUsageUpdateInput {
    usage: number,
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


interface UserMaterialInput{
    name: string,
    partName: string,
    borrowerId: number,
    borrowNum: number,
    status: string
}

interface ThreeDPInput{
    name: string,
    category: string,
    position: string,
    description: string,
    photoLink: string,
    usage: number,
    tutorialLink: string,
}

interface UserInput {
    name: string,
    studentID: string,
    password: string,
    photoLink: string,
    threeDPId: number,            
    laserCutAvailable: boolean,    
}

export { AnnouncementInput, ToolInput, UserMaterialInput, ThreeDPInput, UserInput, ToolUsageUpdateInput, DisposableMaterialInput, MachineInput, MaterialInput, MaterialUsageUpdateInput }
