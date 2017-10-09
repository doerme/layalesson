// 程序入口
class GameMain{
    constructor()
    {
        Laya.init(600,400);
        Laya.stage.scaleMode = Laya.Stage.SCALE_SHOWALL;
        Laya.stage.screenMode = Laya.Stage.SCREEN_NONE;
        var uiResArray = [
            {
                url: "res/atlas/comp.json", type:Laya.Loader.ATLAS
            },
        ]
        Laya.loader.load(uiResArray, Laya.Handler.create(this, this.OnLoaded))

    }
    OnLoaded(): void{
        Laya.stage.addChild(new LoginView());
    }
}
new GameMain();