var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var RegDialog = /** @class */ (function (_super) {
    __extends(RegDialog, _super);
    function RegDialog() {
        var _this = _super.call(this) || this;
        _this.pos(Laya.stage.width / 2, Laya.stage.height / 2);
        return _this;
    }
    return RegDialog;
}(ui.RegTipsUI));
//# sourceMappingURL=RegDialog.js.map