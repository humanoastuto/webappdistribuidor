import {Injectable} from '@angular/core'

interface product {
    producto: string,
	pid: string
}


@Injectable()
export class ProductService {
    private product: product

    constructor() {

    }

    setProduct(product: product) {
		this.product = product
    }

    gedPID() {
        return this.product.pid
    }


}