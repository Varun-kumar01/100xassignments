const { Router } = require("express");
const router = Router();
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db/index");


// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.headers.username;
    const password = req.headers.password;
    await Admin.create({
        username:username,
        password:password
    })
    res.json({
        msg:"Admin created succesfully"
    })
});

router.post('/courses', adminMiddleware,async (req, res) => {
    // Implement course creation logic
    // const username = req.headers.username;
    // const password = req.headers.password;
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink;
    await Course.create({
        title,
        description,
        price,
        imageLink
    })
    const courseId = await Course.findOne({
        title:title
    })
    res.json({
        msg:`Course created succesfully with course ID ${courseId._id}`
    })

});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const courses = await Course.find({});
    res.json({
        courses
    })
    
});

module.exports = router;