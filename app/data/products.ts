export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    video?: string;
    altText?: string;
}

export const products: Product[] = [
    {
        id: "cn-signature",
        name: "CN-Signature",
        description: "The Flagship Scent",
        price: 45000,
        image: "/media/products/cn-signature.jpg",
        video: "/media/products/cn-signature.mp4",
        altText: "Minimalist perfume bottle with amber liquid"
    },
    {
        id: "cn-musk",
        name: "CN-Musk",
        description: "Deep & Alluring",
        price: 42000,
        image: "/media/products/cn-musk.jpg",
        video: "/media/products/cn-musk.mp4",
        altText: "Dark aesthetic perfume bottle on a stone surface"
    },
    {
        id: "bloom-bella",
        name: "Bloom Bella",
        description: "Floral Feminine Essence",
        price: 35000,
        image: "/media/products/bloom-bella.jpg",
        video: "/media/products/bloom-bella.mp4",
        altText: "Elegant tall perfume bottle among silk fabrics"
    },
    {
        id: "agrano-leather",
        name: "Agrano Leather",
        description: "Rich & Textured",
        price: 38000,
        image: "/media/products/agrano-leather.jpg",
        video: "/media/products/agrano-leather.mp4",
        altText: "Leather textured perfume bottle"
    },
    {
        id: "legendary",
        name: "Legendary",
        description: "Classic Heritage Aroma",
        price: 48000,
        image: "/media/products/legendary.jpg",
        video: "/media/products/legendary.mp4",
        altText: "Classic crystal perfume bottle"
    }
];
