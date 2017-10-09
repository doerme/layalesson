class LoginView extends ui.LoginUI{
    regDlg : RegDialog;
    constructor() {
        super();
        this.bt_login.on(Laya.Event.CLICK, null, ()=>{
            if(this.regDlg){
                this.regDlg.removeSelf();
                this.regDlg.destroy();
            }
            this.regDlg = new RegDialog();
            Laya.stage.addChild(this.regDlg);
        });
    }
}