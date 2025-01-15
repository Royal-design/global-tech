import iphone16pro_00 from "../assets/products/iphone-16-pro-00.png";
import iphone16pro_01 from "../assets/products/iphone-16-01.png";
import iphone16pro_02 from "../assets/products/iphone-16-02.png";
import infinixhot40i_00 from "../assets/products/infinix-hot40i-00.png";
import infinixhot40i_01 from "../assets/products/infinix-hot40i-01.webp";
import infinixhot40i_02 from "../assets/products/infinix-hot40i-02.webp";
import infinixhot50i_00 from "../assets/products/infinix-hot50i-00.webp";
import infinixhot50i_01 from "../assets/products/infinix-hot50i-01.png";
import infinixhot50i_02 from "../assets/products/infinix-hot50i-02.webp";
import hotplate_00 from "../assets/products/hotplate_single_a-00.png";
import hotplate_01 from "../assets/products/hotplate_single_a-01.png";
import hotplate_02 from "../assets/products/hotplate_single_a-02.png";
import hotplatedouble_00 from "../assets/products/hotplate_double_a-00.png";
import hotplatedouble_01 from "../assets/products/hotplate_double_a-01.png";
import hotplatedouble_02 from "../assets/products/hotplate_double_a-02.png";
import samsungcrystal_00 from "../assets/products/samsung_crystal-00.png";
import samsungcrystal_01 from "../assets/products/samsung_crystal-01.webp";
import samsungcrystal_02 from "../assets/products/samsung_crystal-02.webp";
import lgwoofer_00 from "../assets/products/lg_woofer_a-00.png";
import lgwoofer_01 from "../assets/products/lg_woofer_a-01.webp";
import lgwoofer_02 from "../assets/products/lg_woofer_a-02.webp";
import zyrex_00 from "../assets/products/zyrex-00.png";
import zyrex_01 from "../assets/products/zyrex-01.png";
import zyrex_02 from "../assets/products/zyrex-02.png";

export const products = [
  {
    name: "iPhone 16 Pro 256GB",
    id: "sku0001",
    image: iphone16pro_00,
    images: [iphone16pro_01, iphone16pro_02],
    oldPrice: "3,250,000",
    newPrice: "3,150,000",
    category: "Phone and Accessories",
    brand: "Apple",
    description:
      "The iPhone 16 Pro is the pinnacle of smartphone innovation. Equipped with the latest A18 Bionic chip, it offers lightning-fast performance and efficiency. Its 6.7-inch Super Retina XDR display delivers vivid colors and true-to-life visuals, making it perfect for gaming, streaming, and professional work. The triple-camera system, including a 48MP main sensor, captures stunning photos and videos even in low-light conditions. With 256GB of storage, you’ll have ample space for apps, photos, and videos. Built with aerospace-grade aluminum, it combines elegance and durability, while the Ceramic Shield ensures added protection.",
    additionalInfo: {
      batteryLife: "Up to 22 hours of video playback",
      connectivity: "5G, Wi-Fi 6E, Ultra-Wideband",
      os: "iOS 18",
      features: ["Face ID", "MagSafe compatibility", "Dynamic Island"],
      colorOptions: ["Silver", "Graphite", "Gold", "Sierra Blue"]
    },
    tags: ["iPhone", "Apple", "Smartphone", "256GB", "High-End"],
    reviews: [
      {
        name: "John Doe",
        date: "2025-01-01",
        rating: 5,
        picture: "https://randomuser.me/api/portraits/men/1.jpg",
        comment:
          "Absolutely amazing phone! The camera quality is out of this world, and the battery life is fantastic."
      },
      {
        name: "Jane Smith",
        date: "2025-01-05",
        rating: 4,
        picture: "https://randomuser.me/api/portraits/women/2.jpg",
        comment:
          "A great phone, though the price is a bit steep. Performance is unmatched, though."
      }
    ]
  },
  {
    name: "Infinix Hot 40i (8GB+256GB)",
    id: "sku0002",
    image: infinixhot40i_00,
    images: [infinixhot40i_01, infinixhot40i_02],
    oldPrice: "185,000",
    newPrice: "180,000",
    category: "Phone and Accessories",
    brand: "Infinix",
    description:
      "The Infinix Hot 40i redefines budget-friendly smartphones with its impressive performance and stylish design. Powered by a high-performance octa-core processor and 8GB RAM, it delivers smooth multitasking and gaming experiences. Its 6.6-inch HD+ display ensures vibrant visuals, while the dual rear cameras (50MP + 2MP) capture high-quality images and videos. With 256GB of internal storage, expandable via microSD, you’ll never run out of space for your files. Its long-lasting 5000mAh battery keeps you powered throughout the day.",
    additionalInfo: {
      batteryLife: "5000mAh with fast charging",
      connectivity: "4G LTE, Wi-Fi, Bluetooth 5.0",
      os: "Android 13",
      features: ["Fingerprint sensor", "Face unlock"],
      colorOptions: ["Black", "Green", "Purple"]
    },
    tags: ["Infinix", "Budget Smartphone", "8GB RAM", "256GB Storage"],
    reviews: [
      {
        name: "Alice Brown",
        date: "2025-01-06",
        rating: 4,
        picture: "https://randomuser.me/api/portraits/women/4.jpg",
        comment:
          "A great phone for the price. It handles all my apps with ease and the camera is surprisingly good."
      },
      {
        name: "Tom Hardy",
        date: "2025-01-08",
        rating: 5,
        picture: "https://randomuser.me/api/portraits/men/3.jpg",
        comment:
          "Best value for money. The battery life and storage capacity are excellent."
      }
    ]
  },
  {
    name: "Infinix Hot 50i (8GB+256GB)",
    id: "sku0003",
    image: infinixhot50i_00,
    images: [infinixhot50i_01, infinixhot50i_02],
    oldPrice: "156,000",
    newPrice: "150,000",
    category: "Phone and Accessories",
    brand: "Infinix",
    description:
      "The Infinix Hot 50i offers a perfect balance between performance and affordability. Featuring a sleek design and a 6.5-inch HD+ display, this phone provides an immersive viewing experience. Its 8GB RAM and octa-core processor ensure smooth performance, while the 256GB storage offers ample space for all your needs. The dual rear camera setup and AI-enhanced features make it easy to capture stunning photos and videos. Its 5000mAh battery ensures uninterrupted usage for extended periods.",
    additionalInfo: {
      batteryLife: "5000mAh with fast charging",
      connectivity: "4G LTE, Wi-Fi, Bluetooth 5.0",
      os: "Android 13",
      features: ["Fingerprint sensor", "Face unlock"],
      colorOptions: ["Blue", "Gray", "Silver"]
    },
    tags: ["Infinix", "Affordable Smartphone", "8GB RAM", "Large Storage"],
    reviews: [
      {
        name: "Sarah Wilson",
        date: "2025-01-09",
        rating: 4,
        picture: "https://randomuser.me/api/portraits/women/5.jpg",
        comment:
          "An excellent phone for everyday use. The performance is great, and the battery lasts all day."
      },
      {
        name: "Mark Spencer",
        date: "2025-01-11",
        rating: 3,
        picture: "https://randomuser.me/api/portraits/men/4.jpg",
        comment:
          "Good for its price, but I wish the camera quality was slightly better."
      }
    ]
  },
  {
    name: "Electric Hotplate (Single)",
    id: "sku0004",
    image: hotplate_00,
    images: [hotplate_01, hotplate_02],
    oldPrice: "12,000",
    newPrice: "10,000",
    category: "Kitchen Appliances",
    brand: "LG",
    description:
      "The LG Electric Hotplate (Single) is a compact and efficient solution for all your cooking needs. Designed with a durable stainless steel body and non-slip feet, it offers stability and longevity. The single hotplate heats up quickly, making it perfect for boiling, frying, and simmering. Its adjustable temperature control lets you cook with precision, ensuring perfectly cooked meals every time.",
    additionalInfo: {
      power: "1000W",
      dimensions: "8 x 8 x 3 inches",
      safetyFeatures: ["Overheat protection", "Cool-touch knobs"],
      warranty: "1 year",
      colorOptions: ["White", "Black"]
    },
    tags: ["Hotplate", "LG", "Kitchen Appliances", "Compact"],
    reviews: [
      {
        name: "Emily Davis",
        date: "2025-01-03",
        rating: 5,
        picture: "https://randomuser.me/api/portraits/women/6.jpg",
        comment:
          "This hotplate is perfect for my small kitchen. It heats up quickly and is very easy to clean."
      },
      {
        name: "Michael Brown",
        date: "2025-01-06",
        rating: 4,
        picture: "https://randomuser.me/api/portraits/men/5.jpg",
        comment:
          "Good product for the price. Works well, but I wish it had a slightly longer power cord."
      }
    ]
  },
  {
    name: "Electric Hotplate (Double)",
    id: "sku0005",
    image: hotplatedouble_00,
    images: [hotplatedouble_01, hotplatedouble_02],
    oldPrice: "25,000",
    newPrice: "20,000",
    category: "Kitchen Appliances",
    brand: "LG",
    description:
      "The LG Electric Hotplate (Double) is designed for multitasking in the kitchen. With two powerful burners, you can cook multiple dishes simultaneously. Its sleek stainless steel body ensures durability, while the adjustable temperature controls provide precise cooking. Ideal for busy households or small spaces, it delivers consistent performance and quick heating.",
    additionalInfo: {
      power: "2000W (1000W per burner)",
      dimensions: "18 x 8 x 3 inches",
      safetyFeatures: ["Auto shut-off", "Anti-slip base"],
      warranty: "1 year",
      colorOptions: ["Silver", "Black"]
    },
    tags: ["Double Hotplate", "LG", "Kitchen Appliances", "Efficient"],
    reviews: [
      {
        name: "Sophia Carter",
        date: "2025-01-04",
        rating: 5,
        picture: "https://randomuser.me/api/portraits/women/7.jpg",
        comment:
          "Love this double hotplate! It’s a lifesaver for cooking multiple dishes at once."
      },
      {
        name: "James Wilson",
        date: "2025-01-07",
        rating: 4,
        picture: "https://randomuser.me/api/portraits/men/6.jpg",
        comment:
          "Great performance, but it takes a bit longer to cool down after use."
      }
    ]
  },
  {
    name: "Samsung Crystal UHD 55inch",
    id: "sku0006",
    image: samsungcrystal_00,
    images: [samsungcrystal_01, samsungcrystal_02],
    oldPrice: "1,400,000",
    newPrice: "1,200,000",
    category: "Home Appliances",
    brand: "Samsung",
    description:
      "Transform your entertainment experience with the Samsung Crystal UHD 55-inch Smart TV. Featuring a stunning 4K resolution, it delivers vibrant colors and sharp details for an immersive viewing experience. Powered by the Crystal Processor 4K, it ensures smooth and seamless performance. The sleek, minimalist design complements any space, while the Smart Hub offers easy access to your favorite streaming apps.",
    additionalInfo: {
      resolution: "3840 x 2160 (4K UHD)",
      connectivity: ["Wi-Fi", "Bluetooth", "HDMI x 3", "USB x 2"],
      os: "Tizen",
      features: ["HDR10+", "Game Mode", "Voice Assistant Support"],
      dimensions: "48.4 x 28 x 2.4 inches (without stand)"
    },
    tags: ["Samsung", "4K TV", "Smart TV", "Home Entertainment"],
    reviews: [
      {
        name: "Oliver Green",
        date: "2025-01-02",
        rating: 5,
        picture: "https://randomuser.me/api/portraits/women/8.jpg",
        comment:
          "Absolutely fantastic TV! The picture quality is stunning, and the sound is excellent."
      },
      {
        name: "Emma White",
        date: "2025-01-05",
        rating: 4,
        picture: "https://randomuser.me/api/portraits/men/7.jpg",
        comment:
          "Great value for a 4K TV. The interface is a bit slow at times, but overall it’s worth it."
      }
    ]
  },
  {
    name: "XBoom Home Theater",
    id: "sku0007",
    image: lgwoofer_00,
    images: [lgwoofer_01, lgwoofer_02],
    oldPrice: "98,000",
    newPrice: "94,000",
    category: "Home Appliances",
    brand: "LG",
    description:
      "The LG XBoom Home Theater system brings cinematic sound to your home. With powerful bass and crystal-clear audio, it’s perfect for movies, music, and gaming. Equipped with multiple connectivity options, including Bluetooth and USB, it offers versatile entertainment. The sleek design and compact speakers make it a stylish addition to any room.",
    additionalInfo: {
      outputPower: "500W",
      connectivity: ["Bluetooth", "HDMI", "USB", "Optical Input"],
      features: ["Surround Sound", "Bass Blast", "Remote Control"],
      dimensions: "Subwoofer: 12 x 14 x 15 inches, Speakers: 8 x 10 x 8 inches"
    },
    tags: ["LG", "Home Theater", "Sound System", "XBoom"],
    reviews: [
      {
        name: "Liam Hall",
        date: "2025-01-03",
        rating: 5,
        picture: "https://randomuser.me/api/portraits/women/9.jpg",
        comment:
          "Amazing sound quality! The bass is deep, and the surround sound is immersive."
      },
      {
        name: "Ava Taylor",
        date: "2025-01-06",
        rating: 4,
        picture: "https://randomuser.me/api/portraits/men/8.jpg",
        comment:
          "Great sound system for the price, though setting it up took some time."
      }
    ]
  },
  {
    name: "Zyrex Sky Dual Core",
    id: "sku0008",
    image: zyrex_00,
    images: [zyrex_01, zyrex_02],
    oldPrice: "3,700,000",
    newPrice: "3,350,000",
    category: "PC and Laptop",
    brand: "Zyrex",
    description:
      "The Zyrex Sky Dual Core laptop is built for productivity and portability. Featuring a lightweight design and a 14-inch Full HD display, it’s perfect for students and professionals. Powered by a Dual-Core processor and 8GB RAM, it handles everyday tasks with ease. With a 256GB SSD, it offers fast boot times and ample storage. The long-lasting battery ensures you stay productive on the go.",
    additionalInfo: {
      processor: "Intel Dual Core",
      storage: "256GB SSD",
      ram: "8GB",
      connectivity: ["Wi-Fi", "Bluetooth", "USB 3.0", "HDMI"],
      os: "Windows 11"
    },
    tags: ["Laptop", "Zyrex", "Portable", "Student-Friendly"],
    reviews: [
      {
        name: "Jack Miller",
        date: "2025-01-04",
        rating: 4,
        picture: "https://randomuser.me/api/portraits/men/9.jpg",
        comment:
          "Great laptop for basic tasks. Lightweight and easy to carry around."
      },
      {
        name: "Sophia Adams",
        date: "2025-01-07",
        rating: 3,
        picture: "https://randomuser.me/api/portraits/women/10.jpg",
        comment:
          "Good for the price, but the performance can lag with heavy applications."
      }
    ]
  }
];
