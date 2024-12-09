import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getUserById(id: string | undefined){
    try{
        const user = await prisma.user.findUnique({ 
            where: { id },
            
            select: { username: true, fullname: true, email: true, id: true, isAdmin: true, isVerified: true, avatar: true }
        }); 
        return user;
    }
    catch(err){
        throw Error(`Server Error:\n${err}`);
    }

}

export async function getUserByEmail(email: string){
    const user = await prisma.user.findUnique({ 
        where: { email },
        
        select: { username: true, fullname: true, email: true, id: true, isAdmin: true, isVerified: true, avatar: true }
    }); 

    return user;
}

export async function getUserHashedPassword( email: string | null = null){
    let user = null;
    if(email){
        user = await prisma.user.findUnique({
            where: { email },

            select: { password: true }
        })
    }
    else{
        console.log("Either passdown email or id of user");
    }

    return user?.password;
}