export const restaurant = {
  name: "Masakan Masboss",
  shortName: "Masboss",
  descriptor: "Makanan Khas Jawa Tengah",
  intro:
    "Selamat datang di Masakan Masboss.",
  story:
    "Kami memasak dengan rasa ingin tahu dan rasa hormat yang mendalam terhadap Cita Rasa Asli dari tempat-tempat makanan berasal. Rasa Kultural yang khas, kenangan, dan keramahan penduduk lokal.",
  address: "Jl. Ciguruwik Gang Anis No.44,Cinunuk, Kec. Cileunyi,Kabupaten Bandung,Jawa Barat 40624",
  coordinates: { lat: -6.923860275210735, lng: 107.73413661104661 },
  email: "widizoe@gmail.com",
  phone: "+62 8122084366",
  whatsappNumber: "628122084366", // WhatsApp chat number, country code + digits only.
  hours: [
    { days: "Senin – Kamis", time: "08:00 am – 08:00 pm" },
    { days: "Jumat", time: "01:00 pm – 08:00 pm" },
    { days: "Sabtu – Minggu", time: "08:00 am – Habis" },
  ],
  menu: [
    {
      number: "01",
      name: "Garang Asam",
      detail: "Daging ayam kampung · santan · belimbing wuluh · cabai keriting merah · cabe keriting hijau · tomat hijau, tomat merah dan bumbu rempah lainnya",
      preOrderLinks: [
        {
          label: "PO Garang Asem Ayam Kampung",
          message: "Halo Masakan Masboss, saya ingin pre-order Garang asem ayam kampung.",
        },
        {
          label: "PO Garang Asem Ayam Negeri",
          message: "Halo Masakan Masboss, saya ingin pre-order garang asam ayam negeri.",
        },
      ],
    },
    {
      number: "02",
      name: "Rica-Rica",
      detail: "Daging Entog · Cabe keriting · cabe rawit · cabe merah dan bumbu rempah yang berlimpah.",
      preOrderLinks: [
        {
          label: "PO Rica-Rica Entog",
          message: "Halo Masakan Masboss, saya ingin pre-order Rica-Rica Entog.",
        },
        {
          label: "PO Rica-Rica Bebek",
          message: "Halo Masakan Masboss, saya ingin pre-order Rica-Rica Bebek.",
        },
        {
          label: "PO Rica-Rica Ayam Kampung",
          message: "Halo Masakan Masboss, saya ingin pre-order Rica-Rica Ayam Kampung.",
        },
        {
          label: "PO Rica-Rica Udang Galah",
          message: "Halo Masakan Masboss, saya ingin pre-order Rica-Rica Udang Galah.",
        },
      ],
    },
    {
      number: "03",
      name: "Soto Jawa",
      detail: "Ayam kampung · santan · daun salam · serai · bawang merah · bawang putih · jahe · kunyit · kemiri dan bumbu rempah lainnya",
      /*preOrderLinks: [
        {
          label: "PO Soto Jawa",
          message: "Halo Masakan Masboss, saya ingin pre-order Soto Jawa.",
        },
      ],*/
    },
    /*{
      number: "04",
      name: "Lake trout al carbón",
      detail: "Wood-fired trout · green mole · grilled spring onion",
    },
    {
      number: "05",
      name: "Short rib barbacoa",
      detail: "Slow-braised beef · ancho · pickled onion · warm tortillas",
    },
    {
      number: "06",
      name: "Cacao & sweet corn",
      detail: "Dark chocolate · sweet corn cake · cinnamon crema",
    },*/
  ],
  faqs: [
    {
      question: "Apakah bisa Dine-in?",
      answer:
        "Ya, kami menyediakan layanan dine-in untuk para pelanggan.",
    },
    {
      question: "Apakah bisa Pre Order?",
      answer:
        "Ya, kami menyediakan layanan pre order untuk para pelanggan.",
    },
    {
      question: "berapa lama proses setelah pre order?",
      answer:
        "Proses pre order biasanya memakan waktu sekitar 30 menit hingga 1 jam tergantung pada jumlah pesanan dan ketersediaan bahan.",
    },
    {
      question: "Apakah ada tempat parkir?",
      answer:
        "Tempat parkir jalan tersedia di lingkungan. Jika bisa hindari menggunakan kendaraan mobil.",
    },
    {
      question: "apakah ada refund jika pesanan tidak sesuai?",
      answer:
        "Untuk refund, kami akan meninjau kasus per kasus. Untuk Pemesanan kami usahakan membuat se-detail mungkin sesuai request.",
    },
  ],
};

export function buildWhatsAppOrderUrl(message: string) {
  return `https://wa.me/${restaurant.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const googleMapsUrl =
  "https://maps.app.goo.gl/QuAA2mSD3ToHgwEj6";

export const googleMapsEmbedUrl =
  "https://www.google.com/maps?q=-6.923860275210735,107.73413661104661&output=embed";
