class ProductManage {
    constructor(name) {
        this.name = name;
        this.products = [];
        this.data = [
            ["Iphone",1000,"Black","Apple"],
            ["Iphone1",2000,"Black","Apple2"],
            ["Iphone2",3000,"Black","Apple3"]
        ];
    }

    init(){
        for (let i = 0; i < this.data.length; i++) {
            let product = new Product(this.data[i][0],this.data[i][1],this.data[i][2],this.data[i][3]);
            console.log(product);
            this.addProduct(product);
        }
    }

    addProduct(product){
        this.products.push(product);
    }
    editProduct(product,name,price,color,desc){
        product.edit(name,price,color,desc);
    }
    deleteProduct(index){
        this.products.splice(index,1);
    }
    getHtml(){
        let table = `<table border="0px solid black" cellspacing="0" class="table table-striped">
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Color</th>
                            <th>Description</th>
                        </tr>`;
        for (let i = 0; i < this.products.length; i++) {
            table += "<tr>"+this.products[i].getHtml() + this.getAction(i)+'</tr>';
        }
        table+=`</table>`;
        return table;
    }

    getAction(index){
        let action = `<td><button class="btn btn-warning" onclick="edit(${index})">Edit</button></td>
                        <td><button class="btn btn-danger" onclick="del(${index})">Delete</button></td>`;
        return action;
    }

    getProductByIndex(index){
        return this.products[index];
    }
}
