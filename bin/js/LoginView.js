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
var LoginView = /** @class */ (function (_super) {
    __extends(LoginView, _super);
    function LoginView() {
        var _this = _super.call(this) || this;
        _this.bt_login.on(Laya.Event.CLICK, null, function () {
            if (_this.regDlg) {
                _this.regDlg.removeSelf();
                _this.regDlg.destroy();
            }
            _this.regDlg = new RegDialog();
            Laya.stage.addChild(_this.regDlg);
        });
        return _this;
    }
    return LoginView;
}(ui.LoginUI));
//# sourceMappingURL=LoginView.js.map