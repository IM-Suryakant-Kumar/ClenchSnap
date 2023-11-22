"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = require("../controllers/user");
const router = (0, express_1.Router)();
router.route("/me").get(user_1.getLoggedInUser).patch(user_1.updateUser);
exports.default = router;
//# sourceMappingURL=user.js.map