type UserProp = {
    _id : number,
    fname: string | null,
    lname: string | null,
    contact:number | null,
    email:string | null,
    address:{
        atype:string | null,
        details:string | null,
    }
}

type UserList = {
    users: UserProp[]
}

type UpdateProp = {
    users: UserProp,
    id: number
}

export type {UserList, UserProp, UpdateProp}