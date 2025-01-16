import iphone15_00 from "../assets/products/iphone-15-00.webp";
import iphone15_01 from "../assets/products/iphone-15-01.webp";
import iphone15_02 from "../assets/products/iphone-15-02.webp";
import iphone16_00 from "../assets/products/iphone-16-00.webp";
import iphone16_01 from "../assets/products/iphone-16-01.webp";
import iphone16_02 from "../assets/products/iphone-16-02.webp";
import blade15_00 from "../assets/products/balde-15-00.webp";
import blade15_01 from "../assets/products/balde-15-01.webp";
import blade15_02 from "../assets/products/balde-15-02.webp";
import blade18_00 from "../assets/products/balde-18-00.webp";
import blade18_01 from "../assets/products/balde-18-01.webp";
import blade18_02 from "../assets/products/balde-18-02.webp";
import xps_00 from "../assets/products/xps-13-9315-00.webp";
import xps_01 from "../assets/products/xps-13-9315-01.webp";
import xps_02 from "../assets/products/xps-13-9315-02.webp";
import hpelitebook1030_00 from "../assets/products/elitebook-1030-00.webp";
import hpelitebook1030_01 from "../assets/products/elitebook-1030-01.webp";
import hpelitebook1030_02 from "../assets/products/elitebook-1030-02.webp";
import hpelitebook1040_00 from "../assets/products/elitebook-1040-00.webp";
import hpelitebook1040_01 from "../assets/products/elitebook-1040-01.webp";
import hpelitebook1040_02 from "../assets/products/elitebook-1040-02.webp";
import vr_00 from "../assets/products/vr-00.webp";
import vr_01 from "../assets/products/vr-01.webp";
import vr_02 from "../assets/products/vr-02.webp";

export const products = [
  {
    id: "sku0009",
    rating: 4,
    name: "iPhone 15 256GB",
    image: iphone15_00,
    images: [iphone15_01, iphone15_02],
    oldPrice: "1,250,000",
    newPrice: "1,150,000",
    category: "Phone and Accessories",
    brand: "Apple",
    description:
      "The iPhone 15 256GB offers a sleek design, cutting-edge performance, and advanced camera capabilities. Featuring the A16 Bionic chip, a Super Retina XDR display, and a powerful dual-camera system, this phone is perfect for those seeking elegance and efficiency.",
    additionalInfo: {
      processor: "A16 Bionic",
      display: "6.1-inch Super Retina XDR",
      camera: "48MP + 12MP Ultra Wide",
      batteryLife: "Up to 20 hours video playback",
      colorOptions: ["Black", "Blue", "Pink", "White"]
    },
    tags: ["iPhone 15", "Apple", "Smartphone", "256GB"],
    reviews: [
      {
        name: "Sarah Johnson",
        date: "2025-01-08",
        rating: 5,
        picture: "https://randomuser.me/api/portraits/women/11.jpg",
        comment:
          "A stunning phone with excellent camera quality and seamless performance!"
      },
      {
        name: "David Martinez",
        date: "2025-01-10",
        rating: 4,
        picture: "https://randomuser.me/api/portraits/men/10.jpg",
        comment:
          "Great phone, but I expected better battery life for the price."
      }
    ]
  },
  {
    id: "sku0010",
    rating: 5,
    name: "iPhone 16 256GB",
    image: iphone16_00,
    images: [iphone16_01, iphone16_02],
    oldPrice: "2,250,000",
    newPrice: "2,000,000",
    category: "Phone and Accessories",
    brand: "Apple",
    description:
      "The iPhone 16 256GB takes innovation to new heights with its dynamic display, enhanced battery life, and advanced AI-powered features. The A17 Pro chip ensures lightning-fast performance for gaming, multitasking, and more.",
    additionalInfo: {
      processor: "A17 Pro",
      display: "6.7-inch ProMotion OLED",
      camera: "48MP Triple Camera System",
      batteryLife: "Up to 28 hours video playback",
      colorOptions: ["Gold", "Graphite", "Silver", "Deep Purple"]
    },
    tags: ["iPhone 16", "Apple", "Smartphone", "ProMotion"],
    reviews: [
      {
        name: "Emma Wilson",
        date: "2025-01-07",
        rating: 5,
        picture: "https://randomuser.me/api/portraits/women/12.jpg",
        comment: "Incredible display and smooth performance! Worth every penny."
      },
      {
        name: "John Lee",
        date: "2025-01-11",
        rating: 4,
        picture: "https://randomuser.me/api/portraits/men/11.jpg",
        comment: "Excellent device, but the price is on the higher side."
      }
    ]
  },
  {
    id: "sku0011",
    rating: 4,
    name: "Razer Blade 15 - QHD 240Hz",
    image: blade15_00,
    images: [blade15_01, blade15_02],
    oldPrice: "4,250,000",
    newPrice: "4,100,000",
    category: "PC and Laptop",
    brand: "Razer",
    description:
      "The Razer Blade 15 offers unparalleled gaming performance with its QHD 240Hz display, NVIDIA GeForce RTX 4070 GPU, and Intel Core i7 processor. Designed for gamers, it combines power, portability, and premium build quality.",
    additionalInfo: {
      processor: "Intel Core i7-13700H",
      gpu: "NVIDIA GeForce RTX 4070",
      ram: "16GB",
      storage: "1TB SSD",
      display: "15.6-inch QHD 240Hz"
    },
    tags: ["Gaming Laptop", "Razer", "QHD", "240Hz"],
    reviews: [
      {
        name: "Lucas Green",
        date: "2025-01-05",
        rating: 5,
        picture: "https://randomuser.me/api/portraits/men/17.jpg",
        comment:
          "Best gaming laptop I’ve owned! Runs all my games smoothly at max settings."
      },
      {
        name: "Sophia Carter",
        date: "2025-01-09",
        rating: 4,
        picture: "https://randomuser.me/api/portraits/women/18.jpg",
        comment:
          "Fantastic performance, but it gets a bit warm during long gaming sessions."
      }
    ]
  },
  {
    id: "sku0012",
    rating: 4,
    name: "Razer Blade 18 - 4K 200Hz",
    image: blade18_00,
    images: [blade18_01, blade18_02],
    oldPrice: "8,350,000",
    newPrice: "8,200,000",
    category: "PC and Laptop",
    brand: "Razer",
    description:
      "Experience ultimate gaming with the Razer Blade 18, featuring a 4K 200Hz display, Intel Core i9 processor, and NVIDIA RTX 4090 GPU. This laptop is built for hardcore gamers who demand the best visuals and performance.",
    additionalInfo: {
      processor: "Intel Core i9-13980HX",
      gpu: "NVIDIA GeForce RTX 4090",
      ram: "32GB",
      storage: "2TB SSD",
      display: "18-inch 4K UHD 200Hz"
    },
    tags: ["4K Gaming", "Razer Blade 18", "RTX 4090", "Performance"],
    reviews: [
      {
        name: "Mia Roberts",
        date: "2025-01-08",
        rating: 5,
        picture: "https://randomuser.me/api/portraits/women/13.jpg",
        comment:
          "This is a beast of a gaming laptop! Absolutely love the 4K display and performance."
      },
      {
        name: "Ethan Hall",
        date: "2025-01-11",
        rating: 4,
        picture: "https://randomuser.me/api/portraits/men/12.jpg",
        comment:
          "Amazing laptop, but the price tag is a bit steep for casual gamers."
      }
    ]
  },

  {
    id: "sku0013",
    rating: 4,
    name: "Dell XPS 13 9340",
    image: xps_00,
    images: [xps_01, xps_02],
    oldPrice: "3,350,000",
    newPrice: "3,150,000",
    category: "PC and Laptop",
    brand: "Dell",
    description:
      "The Dell XPS 13 9340 is the epitome of sleekness and performance. With its compact design, stunning InfinityEdge display, and powerful hardware, it’s perfect for professionals and students seeking portability without compromising productivity.",
    additionalInfo: {
      processor: "Intel Core i7-1365U",
      gpu: "Intel Iris Xe Graphics",
      ram: "16GB",
      storage: "1TB SSD",
      display: "13.4-inch FHD+ InfinityEdge"
    },
    tags: ["Dell XPS", "Ultrabook", "Professional Laptop"],
    reviews: [
      {
        name: "Alex Morgan",
        date: "2025-01-06",
        rating: 5,
        picture: "https://randomuser.me/api/portraits/women/14.jpg",
        comment: "A lightweight powerhouse. Perfect for work and travel."
      },
      {
        name: "Natalie Cooper",
        date: "2025-01-10",
        rating: 4,
        picture: "https://randomuser.me/api/portraits/men/13.jpg",
        comment: "Great performance but could use better battery life."
      }
    ]
  },
  {
    id: "sku0014",
    rating: 3,
    name: "HP Elitebook X360 1030",
    image: hpelitebook1030_00,
    images: [hpelitebook1030_01, hpelitebook1030_02],
    oldPrice: "1,200,000",
    newPrice: "1,100,000",
    category: "PC and Laptop",
    brand: "HP",
    description:
      "The HP Elitebook X360 1030 G3 is a versatile 2-in-1 laptop built for business professionals. Its robust design, 360-degree hinge, and vibrant touchscreen display make it a reliable tool for productivity on the go.",
    additionalInfo: {
      processor: "Intel Core i5-8350U",
      gpu: "Intel UHD Graphics 620",
      ram: "8GB",
      storage: "512GB SSD",
      display: "13.3-inch Full HD Touchscreen"
    },
    tags: ["2-in-1 Laptop", "HP EliteBook", "Convertible"],
    reviews: [
      {
        name: "Chris Taylor",
        date: "2025-01-07",
        rating: 5,
        picture: "https://randomuser.me/api/portraits/men/14.jpg",
        comment: "A versatile and durable laptop for professionals."
      },
      {
        name: "Jordan Kim",
        date: "2025-01-12",
        rating: 4,
        picture: "https://randomuser.me/api/portraits/women/15.jpg",
        comment:
          "Great functionality, but the hinge feels a bit stiff initially."
      }
    ]
  },
  {
    id: "sku0015",
    rating: 5,
    name: "HP EliteBook 1040 G10",
    image: hpelitebook1040_00,
    images: [hpelitebook1040_01, hpelitebook1040_02],
    oldPrice: "1,400,000",
    newPrice: "1,430,000",
    category: "PC and Laptop",
    brand: "HP",
    description:
      "The HP EliteBook 1040 G10 offers a blend of elegance and performance. With its lightweight design, advanced security features, and powerful specs, this laptop is ideal for business executives who value productivity and style.",
    additionalInfo: {
      processor: "Intel Core i7-1265U",
      gpu: "Intel Iris Xe Graphics",
      ram: "16GB",
      storage: "1TB SSD",
      display: "14-inch FHD+ Anti-Glare"
    },
    tags: ["HP EliteBook", "Business Laptop", "Premium"],
    reviews: [
      {
        name: "Sophia Wright",
        date: "2025-01-05",
        rating: 5,
        picture: "https://randomuser.me/api/portraits/women/16.jpg",
        comment:
          "A premium laptop with excellent build quality and performance."
      },
      {
        name: "Liam Brown",
        date: "2025-01-09",
        rating: 3,
        picture: "https://randomuser.me/api/portraits/men/15.jpg",
        comment: "Good laptop, but the price increase is a bit confusing."
      }
    ]
  },
  {
    id: "sku0016",
    rating: 4,
    name: "Meta Quest 3 512GB",
    image: vr_00,
    images: [vr_01, vr_02],
    oldPrice: "1,100,000",
    newPrice: "9,950,000",
    category: "VR and Camera",
    brand: "Meta",
    description:
      "The Meta Quest 3 takes virtual reality to the next level with enhanced graphics, intuitive controls, and a vast library of immersive experiences. Its standalone design makes it convenient and easy to use without external hardware.",
    additionalInfo: {
      processor: "Qualcomm Snapdragon XR2 Gen 2",
      storage: "512GB",
      resolution: "4K+ per eye",
      batteryLife: "Up to 3 hours",
      features: ["Hand Tracking", "PC VR Support", "Standalone"]
    },
    tags: ["VR Headset", "Meta Quest 3", "Immersive Gaming"],
    reviews: [
      {
        name: "Oliver Davis",
        date: "2025-01-06",
        rating: 5,
        picture: "https://randomuser.me/api/portraits/men/16.jpg",
        comment: "The most immersive VR headset I’ve ever tried!"
      },
      {
        name: "Emily Harris",
        date: "2025-01-10",
        rating: 4,
        picture: "https://randomuser.me/api/portraits/women/17.jpg",
        comment: "Fantastic performance, but battery life could be better."
      }
    ]
  }
];
