"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var navList = document.querySelector(".nav-list"), navitem = navList.querySelectorAll("a");
Array.prototype.map.call(navitem, function (item) {
    navList.addEventListener("click", function (e) {
        item.contains(e.target)
            ? item.classList.add("active-item")
            : item.classList.remove("active-item");
    });
});
var npm_package_one_1 = __importDefault(require("@letsgrowtogetherwithahsan/npm-package-one"));
npm_package_one_1.default("So much spaces!");
//=> "Somuchspace!"
npm_package_one_1.default(1337);
