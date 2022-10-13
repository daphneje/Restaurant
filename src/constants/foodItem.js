import images from './imageItem'

const foodItemList = [
    {
        id: '1',
        title: "Breakfast Steak",
        description:"200g grass fed sirloin, topped with fried egg, smoked back bacon, fries, pineapple coleslaw, grilled tomato and Argentinian chimichurri sauce. Served with grilled garlic ciabatta and a fresh orange juice, lemon iced tea, lime juice, coffee or tea.",
        unitPrice:15.90,
        image: images.bsteak,
        category: 'Breakfast',
        subCategory: 'Chef Pick'
    },
    {
        id: '2',
        title: "The Works",
        description:"Two fried or scrambled free range eggs, smoked back bacon, sauteed mushrooms, chipolata sausages, grilled tomato and pineapple coleslaw. Served with grilled garlic ciabatta and a fresh orange juice, lemon iced tea, lime juice, coffee or tea.",
        unitPrice:12.90,
        image: images.tworks,
        category: 'Breakfast',
        subCategory: 'Popular'
       

    },
    {
        id: '3',
        title: "Steak & Prawn",
        description:"160g Australian chilled grass fed sirloin, paired with butterfly prawns, served with black pepper sauce and mustard cream sauce. Yummy!",
        unitPrice:14.20,
        image: images.steakprawn,
        category: 'Grill',
        subCategory: 'Popular'

    },
    
    {
        id: '4',
        title: "New York Pork Chop",
        description:"The center cut loin chops, paired with chipolata sausage and comes with Yakiniku sauce. A Japanese twist!",
        unitPrice:13.50,
        image: images.nyporkchop,
        category: 'Popular'
    },
    
    // {
    //     title: "Sticky Baked Chicken Wings",
    //     description:"Chicken Wings baked in the oven (instead of deep-frying) in a spicy glaze with gochujang, the Korean red pepper paste.",
    //     unitPrice:7.50,
    //     image: 0,
    //     category: 'Appetizers',
        
    // },
    // {
    //     title: "Texas-Style Beef Brisket",
    //     description:"A friend had success with this recipe, so I tried it. When my husband told me how much he loved it, I knew I’d be making it often.—Vivian Warner, Elkhart, Kansas",
    //     unitPrice:10.50,
    //     image: 0,
    //     category: 'Economical'
    // }
    
    {
        id: '5',
        title: "Fresh Tomato Soup with Parsley and Truffle Oil",
        description:"We make our soup everyday using hand cut vegetables and house made stock. Served with freshly baked garlic ciabatta.",
        unitPrice:4.50,
        image: images.tomatosoup,
        category: 'Hearty Soup'
    },
    {
        id: '6',
        title: "Fresh Mushroom Soup with Cream and Truffle Oil",
        description:"We make our soup everyday using hand cut vegetables and house made stock. Served with freshly baked garlic ciabatta.",
        unitPrice:4.50,
        image: images.tomatosoup,
        category: 'Hearty Soup'
    },
    {
        id: '7',
        title: "Lobster Linguine",
        description:"Lobster meat, smoked bacon, shiitake mushrooms. Olive oil, garlic, chili flakes, black olives, capers, white wine, lemon juice, cherry tomatoes, parmesan and topped with arugula leaves. Yummy!",
        unitPrice:14.90,
        image: images.lobster,
        category: 'Pasta'
    },
    {
        id: '8',
        title: "Steak & Prawn",
        description:"160g Australian chilled grass fed sirloin, paired with butterfly prawns, served with black pepper sauce and mustard cream sauce. Yummy!",
        unitPrice:14.20,
        image: images.steakprawn,
        category: 'Chef Pick',
    },
    {
        id: '9',
        title: "New York Pork Chop",
        description:"The center cut loin chops, paired with chipolata sausage and comes with Yakiniku sauce. A Japanese twist!",
        unitPrice:13.50,
        image: images.nyporkchop,
        category: 'Grill',
        subCategory: 'Appetizers'
         
    },

]

export default foodItemList;