const getUsers = async (req, res) => {
     try{
            const users = await User.find(); 
            if(!users) {
                return res.status(404).json({
                    message: 'Users not found'
                });
            }
            res.status(200).json({
                message: 'Users found successfully',
                data: users
            });
        }catch(error){
            res.status(500).json({
                message: error.message
            });
        }
}

const createUser = async (req, res) => {
    try{
            console.log(req.body);
            const user = await User.create(req.body);
            res.status(201).json({
                message: 'User created successfully', 
                data: user});
        }catch(error){
            res.status(500).json({message: error.message});
        }
}

const getUser = async (req, res) => {
    try{
            const user = await User.findById(req.params.id);   
            if(!user) {
                return res.status(404).json({
                    message: 'User is not in data base'
                });
            }
            res.status(200).json({
                message: 'User found successfully',
                data: user
            });
        }catch(error){
            res.status(500).json({
                message: error.message
            });
        }
    }

const updateUser = async (req, res) => {
    try{
            const user = await User.findByIdAndUpdate(req.params.id,
                req.body, {
                    new: true,
                    runValidators: true
                });
            if(!updatedUser) {
                return res.status(404).json({
                    message: 'User is not in data base'
                });
            }
            res.status(200).json({
                message: 'User updated successfully',
                data: updatedUser
            });
        }catch(error){
            res.status(500).json({
                message: error.message
            });
        }
    }

const deleteUser = async (req, res) => {
    try{
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if(!deletedUser) {
            return res.status(404).json({
                message: 'User is not in data base'
            });
        }
        res.status(200).json({
            message: 'User deleted successfully',
            data: deletedUser
        });
    }
    catch(error){
        res.status(500).json({
            message: error.message
        });
    }
}


module.exports = {
    getUsers,
    createUser,
    getUser,
    updateUser,
    deleteUser
}