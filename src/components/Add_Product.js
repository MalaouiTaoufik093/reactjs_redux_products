import React from 'react'

const Add_Product = () => {
    return (
        <div>
            <form>
                <div className="form-group">
<h2>Ajouter le produit</h2>
                    <input type="text" className="form-control" id="produit" aria-describedby="produit" />
                </div>
                <button type="submit" className="btn btn-success btn-block">Ajouter</button>
            </form>
        </div>
    )
}
export default Add_Product;