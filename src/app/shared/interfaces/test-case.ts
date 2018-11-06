export interface TestCase {
    noderef: number,
    rowVersion: Date,
    description: string,
    name: string,
    type: number,
    status: number,
    createDate: Date,
    businessFunction: string,
    numVirutalUsers: number,
    dataPoolInfo: string,
    breakCondition: string,
    raiseEventOnEnd: string,
    executionMode: number,
    testFolderId: number
}
