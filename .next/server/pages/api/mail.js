"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/mail";
exports.ids = ["pages/api/mail"];
exports.modules = {

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ "(api)/./pages/api/mail.js":
/*!***************************!*\
  !*** ./pages/api/mail.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst nodemailer = __webpack_require__(/*! nodemailer */ \"nodemailer\");\nconst transporter = nodemailer.createTransport({\n    host: \"smtp.gmail.com\",\n    port: 465,\n    secure: true,\n    auth: {\n        user: \"erikmosich@gmail.com\",\n        pass: \"ngdeqgmyrdxqvamk\"\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((req, res)=>{\n    const body = JSON.parse(req.body);\n    console.log(body);\n    transporter.sendMail({\n        from: '\"Portfolio \\uD83D\\uDC7B\" <foo@example.com>',\n        to: \"erikmosich@gmail.com\",\n        subject: \"Contacto brooo ✔\",\n        text: `Nombre: ${body.name} - Email: ${body.email} - Mensaje: ${body.mensaje}`\n    });\n    res.status(200).json({\n        status: \"Ok\"\n    });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbWFpbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsVUFBVSxHQUFHQyxtQkFBTyxDQUFDLDhCQUFZLENBQUM7QUFFeEMsTUFBTUMsV0FBVyxHQUFHRixVQUFVLENBQUNHLGVBQWUsQ0FBQztJQUMzQ0MsSUFBSSxFQUFFLGdCQUFnQjtJQUN0QkMsSUFBSSxFQUFFLEdBQUc7SUFDVEMsTUFBTSxFQUFFLElBQUk7SUFDWkMsSUFBSSxFQUFFO1FBQ0pDLElBQUksRUFBRSxzQkFBc0I7UUFDNUJDLElBQUksRUFBRSxrQkFBa0I7S0FDekI7Q0FDRixDQUFDO0FBRUQsaUVBQWUsQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEdBQUs7SUFDNUIsTUFBTUMsSUFBSSxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0osR0FBRyxDQUFDRSxJQUFJLENBQUM7SUFDakNHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSixJQUFJLENBQUM7SUFDYlYsV0FBVyxDQUFDZSxRQUFRLENBQUM7UUFDckJDLElBQUksRUFBRSw0Q0FBaUM7UUFDdkNDLEVBQUUsRUFBRSxzQkFBc0I7UUFDMUJDLE9BQU8sRUFBRSxrQkFBa0I7UUFDM0JDLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRVQsSUFBSSxDQUFDVSxJQUFJLENBQUMsVUFBVSxFQUFFVixJQUFJLENBQUNXLEtBQUssQ0FBQyxZQUFZLEVBQUVYLElBQUksQ0FBQ1ksT0FBTyxDQUFDLENBQUM7S0FFL0UsQ0FBQyxDQUFDO0lBR0xiLEdBQUcsQ0FBQ2MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7UUFBRUQsTUFBTSxFQUFFLElBQUk7S0FBRSxDQUFDO0FBQzFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8tbmV4dC8uL3BhZ2VzL2FwaS9tYWlsLmpzPzdkMTQiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgbm9kZW1haWxlciA9IHJlcXVpcmUoXCJub2RlbWFpbGVyXCIpO1xuXG5jb25zdCB0cmFuc3BvcnRlciA9IG5vZGVtYWlsZXIuY3JlYXRlVHJhbnNwb3J0KHtcbiAgICBob3N0OiBcInNtdHAuZ21haWwuY29tXCIsXG4gICAgcG9ydDogNDY1LFxuICAgIHNlY3VyZTogdHJ1ZSwgLy8gdHJ1ZSBmb3IgNDY1LCBmYWxzZSBmb3Igb3RoZXIgcG9ydHNcbiAgICBhdXRoOiB7XG4gICAgICB1c2VyOiAnZXJpa21vc2ljaEBnbWFpbC5jb20nLCAvLyBnZW5lcmF0ZWQgZXRoZXJlYWwgdXNlclxuICAgICAgcGFzczogJ25nZGVxZ215cmR4cXZhbWsnLCAvLyBnZW5lcmF0ZWQgZXRoZXJlYWwgcGFzc3dvcmRcbiAgICB9LFxuICB9KTtcblxuICAgZXhwb3J0IGRlZmF1bHQgKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc3QgYm9keSA9IEpTT04ucGFyc2UocmVxLmJvZHkpO1xuICAgIGNvbnNvbGUubG9nKGJvZHkpXG4gICAgICAgIHRyYW5zcG9ydGVyLnNlbmRNYWlsKHtcbiAgICAgICAgZnJvbTogJ1wiUG9ydGZvbGlvIPCfkbtcIiA8Zm9vQGV4YW1wbGUuY29tPicsIC8vIHNlbmRlciBhZGRyZXNzXG4gICAgICAgIHRvOiBcImVyaWttb3NpY2hAZ21haWwuY29tXCIsIC8vIGxpc3Qgb2YgcmVjZWl2ZXJzXG4gICAgICAgIHN1YmplY3Q6IFwiQ29udGFjdG8gYnJvb28g4pyUXCIsIC8vIFN1YmplY3QgbGluZVxuICAgICAgICB0ZXh0OiBgTm9tYnJlOiAke2JvZHkubmFtZX0gLSBFbWFpbDogJHtib2R5LmVtYWlsfSAtIE1lbnNhamU6ICR7Ym9keS5tZW5zYWplfWAsIC8vIHBsYWluIHRleHQgYm9keVxuICAgICAgICAvKiBodG1sOiA8cD57Ym9keX08L3A+LCAgKi8vLyBodG1sIGJvZHlcbiAgICAgIH0pO1xuXG5cbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHN0YXR1czogJ09rJyB9KVxufVxuXG4iXSwibmFtZXMiOlsibm9kZW1haWxlciIsInJlcXVpcmUiLCJ0cmFuc3BvcnRlciIsImNyZWF0ZVRyYW5zcG9ydCIsImhvc3QiLCJwb3J0Iiwic2VjdXJlIiwiYXV0aCIsInVzZXIiLCJwYXNzIiwicmVxIiwicmVzIiwiYm9keSIsIkpTT04iLCJwYXJzZSIsImNvbnNvbGUiLCJsb2ciLCJzZW5kTWFpbCIsImZyb20iLCJ0byIsInN1YmplY3QiLCJ0ZXh0IiwibmFtZSIsImVtYWlsIiwibWVuc2FqZSIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/mail.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/mail.js"));
module.exports = __webpack_exports__;

})();