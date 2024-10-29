export type browseDataType = {
    name: string,
    gender: "men" | "women" | "kids",
    collection: "summer",
    year: number,
    category: string[],
    instock: boolean,
    price: number,
    imgURL: string,
    colors: string[],
    size: string[]
}

export const browseData: browseDataType[] = [
    {
        name: "Men Jeans 1",
        gender: "men",
        collection: "summer",
        year: 2024,
        category: ["jeans"],
        instock: true,
        price: 25,
        imgURL: "./assets/men_jeans_1.jpg",
        colors: ["#0000FF", "#00FF00", "#000000"],
        size: ["M", "L", "XL"]
    },{
        name: "Men Jeans 2",
        gender: "men",
        collection: "summer",
        year: 2024,
        category: ["jeans"],
        instock: true,
        price: 25,
        imgURL: "./assets/men_jeans_2.jpg",
        colors: ["#0000FF", "#00FF00", "#000000"],
        size: ["L", "XL", "XXL"]
    },{
        name: "Men Jeans 3",
        gender: "men",
        collection: "summer",
        year: 2024,
        category: ["jeans"],
        instock: false,
        price: 25,
        imgURL: "./assets/men_jeans_3.jpg",
        colors: ["#0000FF", "#00FF00", "#000000"],
        size: ["M", "L", "XL", "XXL"]
    },{
        name: "Men Jeans Jacket",
        gender: "men",
        collection: "summer",
        year: 2024,
        category: ["jeans", "jacket"],
        instock: true,
        price: 40,
        imgURL: "./assets/men_jeans_jacket_1.jpg",
        colors: ["#0000FF", "#00FF00", "#000000"],
        size: ["M", "L", "XL", "XXL"]
    },{
        name: "Men Tshirt 1",
        gender: "men",
        collection: "summer",
        year: 2023,
        category: ["tshirt"],
        instock: false,
        price: 23,
        imgURL: "./assets/men_tshirt_1.jpg",
        colors: ["#FFFFFF", "#000000"],
        size: ["M", "L", "XL"]
    },{
        name: "Men Tshirt 2",
        gender: "men",
        collection: "summer",
        year: 2024,
        category: ["tshirt"],
        instock: true,
        price: 20,
        imgURL: "./assets/men_jeans_2.jpg",
        colors: ["#FFFFFF", "#000000"],
        size: ["M", "L", "XL"]
    },{
        name: "Women Blouse 1",
        gender: "women",
        collection: "summer",
        year: 2024,
        category: ["blouse"],
        instock: false,
        price: 65,
        imgURL: "./assets/women_blouse_1.jpg",
        colors: ["#FFFFFF", "#000000", "#0000FF"],
        size: ["S", "M", "L"]
    },{
        name: "Women Pants 1",
        gender: "women",
        collection: "summer",
        year: 2024,
        category: ["pant"],
        instock: true,
        price: 25,
        imgURL: "./assets/women_pants_1.jpg",
        colors: ["#0000FF", "#00FF00", "#FF0000"],
        size: ["M", "L", "XL"]
    },{
        name: "Men Jacket 1",
        gender: "men",
        collection: "summer",
        year: 2024,
        category: ["jacket"],
        instock: true,
        price: 25.99,
        imgURL: "./assets/men_jacket_1.jpg",
        colors: ["#808080", "#000000"],
        size: ["M", "L", "XL"]
    },{
        name: "Women Shirt 1",
        gender: "women",
        collection: "summer",
        year: 2024,
        category: ["shirt"],
        instock: true,
        price: 25,
        imgURL: "./assets/women_shirt_1.jpg",
        colors: ["#0000FF", "#00FF00", "#FFFF00"],
        size: ["S", "M", "L"]
    },
]