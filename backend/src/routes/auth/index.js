import { PrismaClient } from "@prisma/client"
import dotenv from "dotenv"
import bcrypt from "bcrypt"
dotenv.config()

const prisma = new PrismaClient()               //realiza inflght, ou seja, inicia quando necessario 

export const register = async (req, res) => {
  try {
    const {username, password, email} = req.body; 

    if(!username || !password || !email) {
      return res
      .status(400)
      .json({message: "fields required"})
    }

    const existinUser = await prisma.user.findUnique({
      where: {
        username,
      }
    })

    if (existinUser) {
      return res.status(400).json({message: "user already exists!"})
    }

    //Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    //create new user
    const newUser = await prisma.user.create({
      data: {
        username,
        email, 
        password: hashedPassword, 
      }
    })

    res.status(201).json({
      message: "User registered successfully!", 
      user: {
        id: newUser.id,
        username: newUser.username, 
        email: newUser.email, 
      }
    })
  } catch (error) {
    console.error("Registration error: ", error)
    res.status(500).json({message: "Server erros", error: error.message})
  }
}

