import React from 'react';
import SHOP_DATA from './shop.data.js'
//embedding collection preview to shop component
import CollectionPreview from '../../components/collection-preview/collection-preview.component'

//class component as we need to deal with data/state
class ShopPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            collections:SHOP_DATA
        }
    }
  
    render(){
        const {collections} = this.state;
        return (<div className="shop-page">
                {
                    collections.map(({id, ...otherCollectionProps}) => (
                        <CollectionPreview key={id} {...otherCollectionProps}/>
                    ))
                }
            </div>
            )
    }
}

export default ShopPage;