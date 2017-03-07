class Invoice{

    constructor(){        
        this._number = 0;
        this._lines = [];
        this._date = new Date();

    }

    get lines(){
        return this._lines;
    }

    addLine(value){        
        this._lines.push(value);
    }

    totalPrice(){
        var sum =0;
        this._lines.forEach(function(v){
            sum += v.quantity * v.price;
        });
        return sum;
    }

    get number(){
        return this._number;
    }

    set number(value){
         this._number = value;
    }

}

var f = new Invoice();
f.number = 1;
f.addLine({ text: "test1", price: 100, quantity : 2});
f.addLine({ text: "test2", price: 25, quantity : 200});

console.log(f.totalPrice(), f);