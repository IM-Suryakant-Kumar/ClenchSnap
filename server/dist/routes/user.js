"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = require("../controllers/user");
const middleware_1 = require("../middleware");
const router = (0, express_1.Router)();
router
    .route("/me")
    .get(middleware_1.authenticateUser, user_1.getLoggedInUser)
    .patch(middleware_1.authenticateUser, user_1.updateUser);
exports.default = router;
//# sourceMappingURL=user.js.map