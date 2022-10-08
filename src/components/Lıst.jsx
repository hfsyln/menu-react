const List = ({item}) => {
const{name,title,price,url,category} = item;

return (
    <div className="totall">
        <div className='card'>
            <div className='image'>
                <img src={url} alt="" />
            </div>
            <div className='content'>
                <div className='baş'>
                    <h5>{name}</h5>
                    <span>${price}</span>
                </div>
               
                <div>
                    <p className='category'>{category}</p>
                    <p>{title}</p>
                </div>
            </div>
        </div>
    </div>
)

}

export default List;