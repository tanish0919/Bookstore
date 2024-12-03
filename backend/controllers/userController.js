import User from "../models/userModel.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hash = bcrypt.hashSync(password, 8);

    // Check if the user already exists
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create a new user
    const newUser = new User({
      name,
      email,
      password: hash,
    });

    // Save the user in the database
    await newUser.save();

    // Respond with success message
    res.status(200).json({ message: "User created successfully!" });
  } catch (error) {
    console.log("Error:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};


export const login = async (req,res)=>{
    try {
        const {email,password} = req.body;
        const user = User.findOne({email});    
        const isMatch =await bcrypt.compare(password, user.password);
        
        if(!user || !isMatch){
            return res.status(400).json({message: "Email not registered!"});
        }
        
        res.status(200).json({message: "User logged in!"});

    

    } catch (error) {
        console.log("Error", error.message);
        res.status(500).json({message: "Internal server error!"});
    }
}
