import React, { useState } from "react";

const products = [
  {
    id: 1,
    name: "Mạc Tửu Hạ Thổ",
    price: 250000,
    volume: "500ml",
    alcohol: "20% ±2%",
    desc: "Rượu truyền thống được ủ men lá và hạ thổ, vị êm, sạch, hậu ngọt sâu.",
    image: "https://images.unsplash.com/photo-1568213816046-0ee1c42bd559?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 2,
    name: "Rượu Mơ Thóc",
    price: 180000,
    volume: "500ml",
    alcohol: "18% ±2%",
    desc: "Hương mơ dịu nhẹ hòa quyện vị rượu nếp truyền thống, dễ uống và thanh hậu.",
    image: "https://images.unsplash.com/photo-1615887023544-5a33f3e607b5?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 3,
    name: "Mạc Tửu Năm 2026",
    price: 320000,
    volume: "750ml",
    alcohol: "20% ±2%",
    desc: "Phiên bản quà biếu sang trọng, phù hợp dịp lễ tết, hội nghị và tiếp khách.",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=900&q=80"
  }
];

const features = [
  { icon: "🌿", title: "Men lá truyền thống", text: "Gạo tẻ, men lá, quy trình ủ thủ công." },
  { icon: "✅", title: "Nguồn gốc rõ ràng", text: "Sản phẩm của Hợp tác xã Bằng Mạc." },
  { icon: "🎁", title: "Quà biếu sang trọng", text: "Phù hợp lễ tết, hội nghị và tiếp khách." }
];

function formatPrice(value) {
  return value.toLocaleString("vi-VN") + "đ";
}

export default function App() {
  const [cart, setCart] = useState([]);
  const [mobileOpen, setMobileOpen] = useState(false);
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-[#fbf1df] text-[#2b1711]">
      <header className="sticky top-0 z-50 bg-[#fbf1df]/95 border-b border-[#d8b984] shadow-sm">
        <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#5b1f14] text-[#f8dfaa] flex items-center justify-center font-bold text-lg">BM</div>
            <div>
              <div className="font-bold text-xl">Mạc Tửu</div>
              <div className="text-xs tracking-[0.22em] uppercase text-[#8a5a35]">Bằng Mạc · Lạng Sơn</div>
            </div>
          </div>

          <nav className="hidden md:flex gap-8 text-sm font-semibold">
            <a href="#home" className="hover:text-[#8a2f1d]">Trang chủ</a>
            <a href="#products" className="hover:text-[#8a2f1d]">Sản phẩm</a>
            <a href="#story" className="hover:text-[#8a2f1d]">Câu chuyện</a>
            <a href="#contact" className="hover:text-[#8a2f1d]">Liên hệ</a>
          </nav>

          <div className="hidden md:block bg-white rounded-full px-4 py-2 text-sm shadow-sm">🛒 {cart.length} sản phẩm</div>

          <button type="button" className="md:hidden text-2xl" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Mở menu">
            {mobileOpen ? "×" : "☰"}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden px-5 pb-4 flex flex-col gap-3 font-semibold">
            <a href="#home">Trang chủ</a>
            <a href="#products">Sản phẩm</a>
            <a href="#story">Câu chuyện</a>
            <a href="#contact">Liên hệ</a>
          </div>
        )}
      </header>

      <section id="home">
        <div className="max-w-7xl mx-auto px-5 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-block mb-5 px-4 py-2 rounded-full bg-white border border-[#d8b984] text-[#7a351e] font-semibold text-sm">
              Rượu truyền thống Bằng Mạc
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              Mạc Tửu
              <span className="block text-[#8a2f1d]">Hương vị truyền thống</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-[#5d4035] max-w-xl">
              Được ủ men theo bí quyết gia truyền, chưng cất chậm qua nhiều công đoạn, Mạc Tửu mang vị êm, sạch, sâu — càng uống càng thấm, càng say càng tỉnh táo.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#products" className="rounded-full bg-[#5b1f14] text-white px-7 py-3 font-bold shadow-lg hover:bg-[#7a2b1b]">Xem sản phẩm</a>
              <a href="#contact" className="rounded-full border border-[#5b1f14] text-[#5b1f14] px-7 py-3 font-bold hover:bg-white">Liên hệ đặt hàng</a>
            </div>
          </div>

          <div className="bg-white/70 rounded-[2rem] p-5 shadow-2xl border border-white">
            <img src="https://images.unsplash.com/photo-1568213816046-0ee1c42bd559?auto=format&fit=crop&w=1200&q=80" alt="Chai rượu Mạc Tửu" className="w-full h-[520px] object-cover rounded-[1.5rem]" />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 py-12 grid md:grid-cols-3 gap-5">
        {features.map((item) => (
          <div key={item.title} className="bg-white rounded-3xl p-6 shadow-sm">
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="mt-2 text-[#6b4a3f]">{item.text}</p>
          </div>
        ))}
      </section>

      <section id="products" className="max-w-7xl mx-auto px-5 py-16">
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <p className="uppercase tracking-[0.25em] text-[#8a5a35] font-bold">Sản phẩm nổi bật</p>
            <h2 className="mt-2 text-4xl font-extrabold">Chọn vị rượu dành cho bạn</h2>
          </div>
          <div className="bg-white rounded-3xl p-5 shadow-sm">
            <p className="text-sm text-[#6b4a3f]">Tạm tính giỏ hàng</p>
            <p className="text-2xl font-bold text-[#8a2f1d]">{formatPrice(total)}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-7">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-[2rem] overflow-hidden shadow-md hover:-translate-y-1 transition">
              <img src={product.image} alt={product.name} className="w-full h-72 object-cover" />
              <div className="p-6">
                <div className="mb-3 text-[#c9964d]">★★★★★</div>
                <h3 className="text-2xl font-bold">{product.name}</h3>
                <p className="mt-2 text-sm text-[#6b4a3f]">{product.desc}</p>
                <div className="mt-4 flex gap-3 text-sm text-[#6b4a3f]">
                  <span className="bg-[#fbf1df] rounded-full px-3 py-1">{product.volume}</span>
                  <span className="bg-[#fbf1df] rounded-full px-3 py-1">{product.alcohol}</span>
                </div>
                <div className="mt-6 flex items-center justify-between gap-3">
                  <p className="text-2xl font-extrabold text-[#8a2f1d]">{formatPrice(product.price)}</p>
                  <button type="button" onClick={() => setCart((currentCart) => [...currentCart, product])} className="rounded-full bg-[#5b1f14] text-white px-5 py-3 text-sm font-bold hover:bg-[#7a2b1b]">
                    Thêm vào giỏ
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="story" className="bg-[#2b1711] text-[#fff3d8] px-5 py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="uppercase tracking-[0.25em] text-[#d9ad66] font-bold">Câu chuyện sản phẩm</p>
            <h2 className="mt-3 text-4xl font-extrabold">Từ núi rừng xứ Lạng đến chén rượu đậm tình</h2>
            <p className="mt-6 leading-8 text-[#f5dfb8]">Bằng Mạc hiện lên như một miền đất lặng lẽ giữa núi rừng Lạng Sơn, nơi nhịp sống trôi chậm theo mùa vụ. Tại nơi đây, những mẻ rượu trong veo được ủ men theo bí quyết gia truyền, chưng cất chậm để giữ lại hương lúa, vị ngọt hậu và cảm giác ấm sâu.</p>
            <p className="mt-4 leading-8 text-[#f5dfb8]">Mạc Tửu không chỉ là một thức uống, mà còn là bản sắc, sự hiếu khách và niềm tự hào của người dân Bằng Mạc.</p>
          </div>

          <div className="rounded-[2rem] bg-white/10 p-8">
            <h3 className="text-2xl font-bold text-[#d9ad66]">Thông tin sản phẩm</h3>
            <div className="mt-6 space-y-4 text-[#f5dfb8]">
              <p><strong>Thành phần:</strong> Gạo tẻ, men lá</p>
              <p><strong>Nồng độ:</strong> 20% ±2%</p>
              <p><strong>Sản xuất:</strong> Hợp tác xã Bằng Mạc</p>
              <p><strong>Địa chỉ:</strong> Thôn Nam Nội, xã Bằng Mạc, tỉnh Lạng Sơn</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="max-w-7xl mx-auto px-5 py-20">
        <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-lg">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <p className="uppercase tracking-[0.25em] text-[#8a5a35] font-bold">Liên hệ đặt hàng</p>
              <h2 className="mt-2 text-4xl font-extrabold">Đặt Mạc Tửu ngay hôm nay</h2>
              <p className="mt-4 text-[#6b4a3f]">Nhận tư vấn sản phẩm, báo giá số lượng lớn và thiết kế hộp quà theo yêu cầu.</p>
              <div className="mt-8 space-y-4">
                <p>📞 0348.205.181 – 0382.813.330</p>
                <p>💬 Facebook: HTX Bằng Mạc</p>
                <p>📍 Thôn Nam Nội, xã Bằng Mạc, tỉnh Lạng Sơn</p>
              </div>
            </div>

            <form className="rounded-3xl bg-[#fbf1df] p-6">
              <input className="mb-4 w-full rounded-2xl border border-[#d8b984] bg-white px-4 py-3 outline-none" placeholder="Họ và tên" />
              <input className="mb-4 w-full rounded-2xl border border-[#d8b984] bg-white px-4 py-3 outline-none" placeholder="Số điện thoại" />
              <select className="mb-4 w-full rounded-2xl border border-[#d8b984] bg-white px-4 py-3 outline-none" defaultValue="">
                <option value="" disabled>Chọn sản phẩm</option>
                <option value="ha-tho">Mạc Tửu Hạ Thổ</option>
                <option value="mo-thoc">Rượu Mơ Thóc</option>
                <option value="2026">Mạc Tửu Năm 2026</option>
              </select>
              <textarea className="mb-4 h-28 w-full rounded-2xl border border-[#d8b984] bg-white px-4 py-3 outline-none" placeholder="Nội dung cần tư vấn" />
              <button type="button" className="w-full rounded-full bg-[#5b1f14] text-white px-6 py-3 font-bold hover:bg-[#7a2b1b]">Gửi thông tin đặt hàng</button>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-[#2b1711] px-5 py-8 text-center text-sm text-[#f5dfb8]">
        © 2026 Mạc Tửu — Sản phẩm của Hợp tác xã Bằng Mạc. Khuyến nghị sử dụng có trách nhiệm, không dành cho người dưới 18 tuổi.
      </footer>
    </div>
  );
}
