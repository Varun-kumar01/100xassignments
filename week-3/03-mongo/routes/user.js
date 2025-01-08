const { Router } = require("express");
const router = Router();
const { User, Course } = require("../db/index")
const userMiddleware = require("../middleware/user");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.headers.username;
    const password = req.headers.password;
    await User.create({
        username,
        password
    })
    res.json({
        msg: "User created successfully"
    })
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const courses = await Course.find({});
    res.json({
        courses
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const currentUser = await User.findOne({
        username: req.headers.username,
        password: req.headers.password
    })
    await User.updateOne({
        _id: currentUser._id
    },
        {
            "$push":{purchased: courseId}
        }
    )
    res.json({
        msg: " course purchased succesfully"
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const currentUser = await User.findOne({
        username: req.headers.username,
        password: req.headers.password
    })
    const purchasedCourses = currentUser.purchased;
    res.json({
        purchasedCourses
    })
});

module.exports = router