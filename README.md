# Tokopedia Play Clone
Final project for Generasi Gigih 3.0

by:
Merryska Christy Mait (GG3FSUP0124)

* Backend part: https://github.com/merryskac/finalTerm

* Hosted url: https://final-fe-git-main-wheytosharepalu-gmailcom.vercel.app/

* Description
  This web application is an ecommerce where sellers can sale the product and consumers can buy the product. Seller sells products through video. The products can be seen on the left side or the bottom of the page depends on your screen. User also able to leave comments in the comment section. To use the app, please login first, or if you don't have any account yet, you can do register in the register page, and you can login with your account to the app.

* Features:
a. User can open, at least two page
    i. Home ✅
    ii. Video Detail Page✅
b. User can see video list with thumbnail from YouTube in home page✅
c. User can click each video and go to video detail page✅
d. User can see list products, embed YouTube, list comment, and form submit comment✅
e. User just need input name and comment when submit comment in form✅
f. User can see their comment in list comment section after success submit comment✅
    (note: since I add login system, user don't have to input username manually)

### Additional Features
  1. Login to account
  2. Register
  3. Logout

* Bonus part
a. add user profile picture and username on the top right corner of the page *(only add the username, not the picture)
b. Search feature (user able to search by video title) ✅

* Technical Requirements
a. API: Follow API Minimum section and restful standard ✅
b. Database: Create DB to support list API needed (use MongoDB)✅
c. React Hooks: create custom hooks at least two✅
    (
      I made 2 custom hooks:
      i. useFetch()-> use for get data from api
      ii. usePost()-> use for post data using API
    )
d. Use React Router as router navigation between page✅
    (available in src->router->Routers)

* Database schema
* Channel Schema
```
  {
    _id: ObjectId(),
    title: String,
    thumbnail_img: String,
    created_at: Date.now,
    ended_at: Date.now,
  }
```
* Comment Schema
```
  {
    _id: ObjectId(),
    username: String,
    comment: String,
    videoID: String,
    timestamp: Date.now
  }
```
* Product Schema
```
  {
    _id: ObjectId(),
    link_product: String,
    title: String,
    price: String,
    videoID: String
  }
```

**I'd like to tell some story behind this app
so, I actually made the authentication system using JWT. But, unfortunately, there are a lot of rules and policy to make it happen (I didn't know before), especially when the app is hosted (so the authentication is running in my localhost). For the example, I just know that we can't pass cookie from different domain (read: https://stackoverflow.com/questions/6761415/how-to-set-a-cookie-for-another-domain). I want to do trial with other method, but I'm running out of time. Also, I'm affraid it makes my code get more error which need some time to be fixed.

By making this app, I learn a lot about react. I just learn it by doing it. Also the Gigih's modules, mentors material, and all friends (especially fellow FS4 and all FS-Track discord nightowls) really helped me in the making of this project.





