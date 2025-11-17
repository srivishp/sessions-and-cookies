exports.getLogin = (req, res, next) => {
  //* Reading the cookie value
  //   let isLoggedIn = false;
  //   let cookieString = req.get("Cookie");
  //   if (cookieString) {
  //     let cookieArray = cookieString.split(";");
  //     cookieArray.forEach((cookie) => {
  //       if (cookie.includes("loggedIn")) {
  //         isLoggedIn = cookie.split("=")[1] == "true";
  //       }
  //     });
  //   }
  res.render("auth/login", {
    path: "/login",
    pageTitle: "Login",
    // For load of every page we need the user to be logged in
    // So, we check for the login status on all render() calls
    isAuthenticated: false,
  });
};

exports.postLogin = (req, res, next) => {
  console.log(req.session);
  req.session.isLoggedIn = true;

  // By default isLoggedIn will be false. Only on click of login button it will be true
  //req.isLoggedIn = true;
  //# Setting a cookie
  res.setHeader("Set-Cookie", "loggedIn= true; Max-Age=10");
  res.redirect("/");
};
