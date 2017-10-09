// 程序入口
var GameMain = /** @class */ (function () {
    function GameMain() {
        Laya.init(600, 400);
        Laya.stage.scaleMode = Laya.Stage.SCALE_SHOWALL;
        Laya.stage.screenMode = Laya.Stage.SCREEN_NONE;
        var uiResArray = [
            {
                url: "res/atlas/comp.json", type: Laya.Loader.ATLAS
            },
        ];
        Laya.loader.load(uiResArray, Laya.Handler.create(this, this.OnLoaded));
    }
    GameMain.prototype.OnLoaded = function () {
        Laya.stage.addChild(new LoginView());
    };
    return GameMain;
}());
new GameMain();
//# sourceMappingURL=LayaSample.js.map