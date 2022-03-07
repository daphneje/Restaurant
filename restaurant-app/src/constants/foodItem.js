import images from './imageItem'

const foodItem = [
    {
        title: "Breakfast Steak",
        description:"200g grass fed sirloin, topped with fried egg, smoked back bacon, fries, pineapple coleslaw, grilled tomato and Argentinian chimichurri sauce. Served with grilled garlic ciabatta and a fresh orange juice, lemon iced tea, lime juice, coffee or tea.",
        unitPrice:15.90,
        image: images.bsteak,
        category: 'Breakfast'
    },
    {
        title: "The Works",
        description:"Two fried or scrambled free range eggs, smoked back bacon, sauteed mushrooms, chipolata sausages, grilled tomato and pineapple coleslaw. Served with grilled garlic ciabatta and a fresh orange juice, lemon iced tea, lime juice, coffee or tea.",
        unitPrice:12.90,
        image: images.tworks,
        category: 'Breakfast'
    },
    {
        title: "Steak & Prawn",
        description:"160g Australian chilled grass fed sirloin, paired with butterfly prawns, served with black pepper sauce and mustard cream sauce. Yummy!",
        unitPrice:14.20,
        image: images.steakprawn,
        category: 'Grill'
    },
    {
        title: "New York Pork Chop",
        description:"The center cut loin chops, paired with chipolata sausage and comes with Yakiniku sauce. A Japanese twist!",
        unitPrice:13.50,
        image: images.nyporkchop,
        category: 'Grill'
    },

]

export {foodItem};