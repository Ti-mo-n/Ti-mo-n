var express = require("express");
var app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
//imports the db connection
const { db } = require("./db");

//imports the authentication middleware
const { requireAuth } = require("./authmiddleware");

//imports the check user middleware
const { checkUser } = require("./authmiddleware");

//used for routing
app.use(cors(
    {
        origin: ["https://appback-iota.vercel.app/"],
        methods: ["POST", "GET"],
        credentials: true
    }
));
//used for allowing cookie parser
app.use(cookieParser());
// lets server accept json as a body
app.use(express.json());
//getting the static files in the public to be applied on the project
app.use(express.static("./public"));


//setting the check user middle ware on all routes
app.get("*", checkUser);

// setting up middleware to set up the signup route
const signupRouter = require("./routes/signup");
app.use("/signup", signupRouter);

// setting up middleware to set up the booking route
const bookingRouter = require("./routes/booking");
app.use("/booking", bookingRouter);

// setting up middleware to set up the logging in route
const loginRouter = require("./routes/login");
app.use("/login", loginRouter);

// setting up middleware to set up the search in route
const searchRouter = require("./routes/search");
app.use("/search", searchRouter);

// setting up middleware to set up the posting new hostel listings in route and getting all hostel listing
const hostelRouter = require("./routes/hostellisting");
app.use("/hostellisting", hostelRouter);

// setting up middleware for requesting,patching,del a single hostel listing
const singleHostelRouter = require("./routes/singlehostellisting");
app.use("/hostellisting", requireAuth, singleHostelRouter);

// setting up middleware for admin to see hostel custodians
const viewRouter = require("./routes/view");
app.use("/view", requireAuth, viewRouter);

//setting up middleware for users to change their accounts
const updateRouter = require("./routes/update");
app.use("/update", requireAuth, updateRouter);

//setting up middleware for users to logout
const logOutRouter = require("./routes/logout");
app.use("/logout", requireAuth, logOutRouter);

//setting up middleware to add and get reviews
const reviewRouter = require("./routes/review");
app.use("/review", reviewRouter);

app.listen(3000);
console.log("u listening to port 3000");
