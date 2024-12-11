import { IconCash, IconClockRecord, IconMoneybag } from "@tabler/icons-react";
import {
  Key,
  DollarSign,
  Box,
  Clipboard,
  Home,
  Table2Icon,
  BaggageClaim,
  WrenchIcon,
  ShoppingCart,
  BarcodeIcon,
} from "lucide-react";

// Menu items.
export const items = {
  user: {
    name: "कृष्ण मोहन",
    email: "krishanmohank974@gmail.com",
    avatar: "/profile.jpeg",
  },
  titles: {
    department: "विभाग",
    stations: "स्टेशन्स",
    admin: "प्रशासन",
    gps: "जीपी स्टोर",
  },
  department: [
    {
      title: "आईडी बनाएं",
      url: "#",
      icon: Key,
    },
    {
      title: "बजट भविष्यवाणियाँ",
      url: "#",
      icon: DollarSign,
    },
    {
      title: "स्वयं इन्वेंटरी",
      url: "#",
      icon: Box,
    },
    {
      title: "जीपीएस का रिकॉर्ड",
      url: "#",
      icon: Clipboard,
    },
    {
      title: "बजट आवंटन",
      url: "#",
      icon: IconMoneybag,
    },
  ],
  stations: [
    {
      title: "संसाधन रिकॉर्ड",
      url: "#",
      icon: Box,
    },
    {
      title: "मरम्मत और प्रतिस्थापन",
      url: "#",
      icon: Clipboard,
    },
    {
      title: "संसाधन अनुरोध",
      url: "#",
      icon: DollarSign,
    },
    {
      title: "इंटर-स्टेशन रिकॉर्ड",
      url: "#",
      icon: IconClockRecord,
    },
  ],
  admin: [
    {
      title: "मुख्य पृष्ठ",
      url: "#",
      icon: Home,
    },
    {
      title: "क्रेडेंशियल्स जनरेशन",
      url: "#",
      icon: Key,
    },
    {
      title: "टिकट",
      url: "#",
      icon: Clipboard,
    },
  ],
  gps: [
    {
      title: "आइटम जोड़ें",
      url: "#",
      icon: BarcodeIcon,
    },
    {
      title: "बजट भविष्यवाणी",
      url: "#",
      icon: IconCash,
    },
    {
      title: "स्टेशन रिकॉर्ड",
      url: "#",
      icon: Table2Icon,
    },
    {
      title: "आइटम वितरण",
      url: "#",
      icon: BaggageClaim,
    },
    {
      title: "मरम्मत और प्रतिस्थापन",
      url: "#",
      icon: WrenchIcon,
    },
    {
      title: "स्वयं इन्वेंटरी",
      url: "#",
      icon: Box,
    },
    {
      title: "खरीद सूची",
      url: "#",
      icon: ShoppingCart,
    },
  ],
};
