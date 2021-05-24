
    window.onload = function(){
    function cart(){
        this.abtn = document.querySelectorAll('input');
        this.ogood_num = document.querySelector('#goods_num');
        this.opricetal = document.querySelector('#pricetal');
        this.totalprice=document.querySelector('#totalprice');
        this.totalnum = 0;
    };
    //計算小計
    cart.prototype.getsubtotal = function(goodsnum,unitprice){
        return parseInt(goodsnum) * parseFloat(unitprice) ;
    };
    // 計算商品總計
    cart.prototype.gettotal = function(){
        var asubtotal = document.querySelectorAll('#subtal');
        var res = 0;
        for(var i=0,len=asubtotal.length;i<len;i++){
            res += parseFloat(asubtotal[i].innerHTML);
        };   
        return res;
    };
    // 最大價格排序
    cart.prototype.compareMaxunit = function(){
        var anum = document.querySelectorAll('#num');
        var aunit = document.querySelectorAll('#unit');
        var temp = 0;
        for(var i=0,len=anum.length;i<len;i++){
            if(anum[i].innerHTML!=0){
                if(temp<parseFloat(aunit[i].innerHTML)){
                    temp = parseFloat(aunit[i].innerHTML);
                }
            }
        };
        return temp;
    };
        // 點==會小計、數量、商品數量變動
    cart.prototype.minus = function(obtn){
        var onum = obtn.parentNode.querySelector('#num');
        var n = parseInt(onum.innerHTML);
        if(parseInt(onum.innerHTML)<5){
            onum.innerHTML = ++n ;
            this.totalnum++;
            var oUnit = obtn.parentNode.parentNode.parentNode.querySelector('#unit');
            var osubtotal = obtn.parentNode.parentNode.parentNode.querySelector('#subtal');
            osubtotal.innerHTML = this.getsubtotal(onum.innerHTML,oUnit.innerHTML);
            this.ogood_num.innerHTML = this.totalnum;
            this.opricetal.innerHTML = this.gettotal();
            this.totalprice.innerHTML = this.gettotal();
        }
    };
    // 點++會小計、數量、商品數量變動
     cart.prototype.plus = function(obtn){
        var onum = obtn.parentNode.querySelector('#num');
        if(parseInt(onum.innerHTML)>0){
            var n = parseInt(onum.innerHTML);
            onum.innerHTML = --n ;
            this.totalnum--;
            var oUnit = obtn.parentNode.parentNode.parentNode.querySelector('#unit');
            var osubtotal = obtn.parentNode.parentNode.parentNode.querySelector('#subtal');
            osubtotal.innerHTML = this.getsubtotal(onum.innerHTML,oUnit.innerHTML);
            this.ogood_num.innerHTML = this.totalnum;
            this.opricetal.innerHTML = this.gettotal();
            this.totalprice.innerHTML = this.gettotal();
        }  
    };
    // 已購買的商品數量『購物車商品數量』
    cart.prototype.getNumbertal = function(){
         var anum = document.querySelectorAll('#num');
         var res_num = 0;
         for(var i =0;i<anum.length;i++){
             res_num += parseInt( anum[i].innerHTML ) ;
         }
         return res_num ;
    }
    // 按刪除鈕
    cart.prototype.del = function(obtn){
        var odel = obtn.parentNode.parentNode;
        var oparent = odel.parentNode;
        oparent.removeChild(odel);
        this.ogood_num.innerHTML = this.getNumbertal();
        this.opricetal.innerHTML = this.gettotal();
        this.totalprice.innerHTML = this.gettotal();
        this.xuhaosort();
    }
    // 購物車衝新整理
    cart.prototype.xuhaosort = function(){
        var axuhao = document.querySelectorAll('.xuhao');
        for(var i=0,len=axuhao.length;i<len;i++){
            axuhao[i].innerHTML = i+1;
        }
    }
    //按＋、－按下去的時候是在正確的商品上加減
    cart.prototype.bind = function(){
        var that = this ;
        for(var i=0;i<this.abtn.length;i++){
            if(i%2 !=0){
                this.abtn[i].onclick = function(){
                    that.plus(this);
                }
            }else{
                 this.abtn[i].onclick = function(){
                    that.minus(this);
                }
            }
        };
        var delbtn = document.querySelectorAll('#del');
        for(var i=0;i<delbtn.length;i++){
            delbtn[i].onclick = function(){
                that.del(this);
            }
        }
    };
    var oCart = new cart();
    oCart.bind();
}
    

