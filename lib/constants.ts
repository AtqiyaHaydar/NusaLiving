import Berita from "@/public/services/Berita.svg"
import Kesehatan from "@/public/services/Kesehatan.svg"
import Lingkungan from "@/public/services/Lingkungan.svg"
import Pendidikan from "@/public/services/Pendidikan.svg"
import Transportasi from "@/public/services/Pendidikan.svg"

export const navItems = [
  {
    label: "Berita",
    href: "/berita",
    image: Berita,
    description: "Dapatkan berita terbaru dan informasi terkini tentang berbagai topik dari berbagai sumber terpercaya."
  },
  {
    label: "Transportasi",
    href: "/transportasi",
    image: Transportasi,
    description: "Akses informasi dan layanan terkait transportasi publik, termasuk pelacakan real-time, jadwal, dan pembelian tiket."
  },
  {
    label: "Lingkungan",
    href: "/lingkungan",
    image: Lingkungan,
    description: "Temukan informasi tentang pengelolaan lingkungan, pelaporan sampah, dan edukasi kebersihan untuk menjaga lingkungan sekitar."
  },
  {
    label: "Kesehatan",
    href: "/kesehatan",
    image: Kesehatan,
    description: "Manfaatkan fitur konsultasi kesehatan online, pelacakan kesehatan pribadi, dan notifikasi pemeriksaan kesehatan rutin."
  },
  {
    label: "Pendidikan",
    href: "/pendidikan",
    image: Pendidikan,
    description: "Akses kursus online, informasi tentang sekolah, dan pendaftaran untuk program pendidikan untuk meningkatkan keterampilan dan pengetahuan."
  },
]
