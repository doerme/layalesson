
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class LoginUI extends View {
		public bt_reg:Laya.Button;
		public bt_login:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":600,"height":400},"child":[{"type":"Image","props":{"y":0,"x":0,"width":600,"skin":"comp/bg.png","sizeGrid":"28,6,5,5","height":400}},{"type":"Image","props":{"y":56,"x":29,"width":191,"skin":"comp/image.png","height":318}},{"type":"Label","props":{"y":69,"x":319,"text":"hello 谭芸彩","fontSize":36,"color":"#e22a27"}},{"type":"TextInput","props":{"y":135,"x":323,"width":200,"text":"TextInput","skin":"comp/textinput.png","height":34}},{"type":"Label","props":{"y":142,"x":255,"text":"姓名","fontSize":20}},{"type":"TextInput","props":{"y":185,"x":323,"width":200,"text":"TextInput","skin":"comp/textinput.png","height":34}},{"type":"Label","props":{"y":192,"x":255,"text":"密码","fontSize":20}},{"type":"CheckBox","props":{"y":258,"x":265,"skin":"comp/checkbox.png","label":"记住密码"}},{"type":"CheckBox","props":{"y":258,"x":368,"skin":"comp/checkbox.png","label":"记住密码"}},{"type":"Button","props":{"y":311,"x":266,"width":123,"var":"bt_reg","skin":"comp/button.png","label":"注册","height":38}},{"type":"Button","props":{"y":311,"x":402,"width":123,"var":"bt_login","skin":"comp/button.png","label":"登录","height":38}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.LoginUI.uiView);
        }
    }
}

module ui {
    export class LoginTipsUI extends Dialog {

        public static  uiView:any ={"type":"Dialog","props":{"width":300,"height":200},"child":[{"type":"Image","props":{"y":0,"x":0,"width":300,"skin":"comp/bg.png","sizeGrid":"28,6,5,5","height":200}},{"type":"Label","props":{"y":73,"x":72,"width":156,"text":"登录成功","height":20,"color":"#140201","align":"center","fontSize":20}},{"type":"Button","props":{"y":3,"x":266,"skin":"comp/btn_close.png"}},{"type":"Button","props":{"y":151,"x":112,"skin":"comp/button.png","label":"确定"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.LoginTipsUI.uiView);
        }
    }
}

module ui {
    export class RegTipsUI extends Dialog {

        public static  uiView:any ={"type":"Dialog","props":{"width":300,"height":200},"child":[{"type":"Image","props":{"y":0,"x":0,"width":300,"skin":"comp/bg.png","sizeGrid":"28,6,5,5","height":200}},{"type":"Label","props":{"y":73,"x":72,"width":156,"text":"注册功能暂未开放","height":20,"color":"#140201","align":"center","fontSize":20}},{"type":"Button","props":{"y":3,"x":266,"skin":"comp/btn_close.png"}},{"type":"Button","props":{"y":151,"x":112,"skin":"comp/button.png","label":"确定"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.RegTipsUI.uiView);
        }
    }
}
