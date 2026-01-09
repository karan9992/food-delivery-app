import MenuCard from './MenuCard'
import noodleImg from '../assets/noodle.png'
import riceImg from '../assets/rice.png'
import cakeImg from '../assets/cake.png'
import chilliImg from '../assets/chilli.png'
const Menu = () => {
    
    const menuItems = [
        {
            id: 1,
            name: "Chicken Hakka Noodles",
            price: 250,
            description: "Delicious marinated paneer grilled to perfection.",
            imgSrc: noodleImg
        },
        {
            id: 2,
            name: "Paneer Pot Rice",
            price: 360,
            description: "Delicious marinated paneer grilled to perfection.",
            imgSrc: riceImg
        },
        {
            id: 3,
            name: "Sweet Chilli Potato",
            price: 190,
            description: "Delicious marinated paneer grilled to perfection.",
            imgSrc: chilliImg
        },
        {
            id: 4,
            name: "Chocolate Mousse",
            price: 599,
            description: "Delicious marinated paneer grilled to perfection.",
            imgSrc: cakeImg
        }
    ];

    return (
        <section className='w-full bg-off-yellow '>
        <div className='flex flex-col items-center font-inter p-4 md:p-10 md:px-24 container mx-auto ' >
            <h1 className='text-3xl md:text-[40px] font-merriweather font-bold text-center'>Our Menu</h1>
            <h2 className='text-xl md:text-2xl font-light text-center'>Our best selling dish only for you</h2>

            
            <div className='m-4 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8'>
                {menuItems.map((item, index) => (
                    <div 
                        key={item.id} 
                       
                        className={index >= 2 ? 'hidden md:block' : 'block'}
                    >
                        <MenuCard
                            name={item.name}
                            price={item.price}
                            description={item.description}
                            imgSrc={item.imgSrc}
                        />
                    </div>
                ))}
            </div>

            <button className='border-red border p-2 px-6 m-4 rounded text-red hover:bg-red hover:text-white transition-colors'>
                View All Menu &gt;&gt;
            </button>
        </div>
        </section>
    )
}

export default Menu