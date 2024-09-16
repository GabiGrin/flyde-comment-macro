"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MacroEditor = void 0;
const react_1 = __importStar(require("react"));
const core_1 = require("@blueprintjs/core");
const MacroEditor = ({ value, onChange, }) => {
    const [content, setContent] = (0, react_1.useState)(value.content);
    (0, react_1.useEffect)(() => {
        onChange({ content });
    }, [content, onChange]);
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("textarea", { value: content, onChange: (e) => setContent(e.target.value), placeholder: "Enter your comment here (HTML supported)", rows: 10, style: { width: "100%", padding: "8px 6px" } }),
        react_1.default.createElement(core_1.Callout, { intent: "primary", icon: null }, "HTML formatting is supported")));
};
exports.MacroEditor = MacroEditor;
exports.default = exports.MacroEditor;