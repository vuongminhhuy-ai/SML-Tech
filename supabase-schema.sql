-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Content table for editable text content
CREATE TABLE content (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  section VARCHAR(50) NOT NULL,
  key VARCHAR(100) NOT NULL,
  value_vi TEXT,
  value_en TEXT,
  image_url VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(section, key)
);

-- Testimonials table
CREATE TABLE testimonials (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name VARCHAR(100),
  title VARCHAR(100),
  company VARCHAR(100),
  quote_vi TEXT,
  quote_en TEXT,
  avatar_url VARCHAR(255),
  results JSONB,
  is_featured BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Contact form submissions
CREATE TABLE contacts (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  company VARCHAR(100),
  email VARCHAR(100),
  message TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Create storage bucket for images
INSERT INTO storage.buckets (id, name, public) 
VALUES ('images', 'images', true);

-- Row Level Security Policies
ALTER TABLE content ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Public can read content
CREATE POLICY "Public can view content" ON content
  FOR SELECT USING (true);

-- Public can read testimonials
CREATE POLICY "Public can view testimonials" ON testimonials
  FOR SELECT USING (true);

-- Public can insert contacts
CREATE POLICY "Public can insert contacts" ON contacts
  FOR INSERT WITH CHECK (true);

-- Authenticated users can manage content (for admin)
CREATE POLICY "Authenticated can manage content" ON content
  FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated can manage testimonials" ON testimonials
  FOR ALL USING (auth.role() = 'authenticated');

-- Insert initial content
INSERT INTO content (section, key, value_vi, value_en) VALUES
('hero', 'title', 'Giảm Lãng Phí 5-8% Với Hệ Thống Đo Khổ Thông Minh', 'Reduce Waste by 5-8% With Smart Width Measurement System'),
('hero', 'subtitle', 'Tiết kiệm 500 triệu - 2 tỷ đồng/năm cho nhà máy nhựa của bạn', 'Save VND 500 million - 2 billion per year for your plastic factory'),
('hero', 'description', 'SML TECH cung cấp hệ thống đo khổ màng tự động với công nghệ IoT/ERP, giúp nhà máy nhựa Việt Nam giảm lãng phí nguyên liệu và nâng cao chất lượng sản phẩm.', 'SML TECH provides automated film width measurement system with IoT/ERP integration, helping Vietnamese plastic manufacturers reduce material waste and improve product quality.'),
('value1', 'title', 'Đo Chính Xác ±0.5mm', 'Accurate Measurement ±0.5mm'),
('value2', 'title', 'IoT/ERP Tích Hợp', 'IoT/ERP Integration'),
('value3', 'title', 'Hỗ Trợ Tại VN < 4h', 'Vietnam Support < 4 Hours'),
('cta', 'title', 'Sẵn Sàng Tối Ưu Sản Xuất?', 'Ready to Optimize Production?'),
('cta', 'subtitle', 'Đăng ký ngay để nhận tư vấn miễn phí từ chuyên gia', 'Register now for free consultation from experts');

-- Insert sample testimonial
INSERT INTO testimonials (name, title, company, quote_vi, quote_en, results, is_featured) VALUES
('Ông Nguyễn Văn A', 'Giám Đốc Kỹ Thuật', 'Công ty ABC', 
 'Trước đây chúng tôi đo bằng thước, rất mất thời gian và không chính xác. Giờ có SML TECH, chúng tôi biết chính xác từng giây, còn có dữ liệu để tối ưu quy trình nữa. Đầu tư 70 triệu, thu hồi được trong 7 tháng.',
 'Previously we measured with rulers, very time-consuming and inaccurate. Now with SML TECH, we know precisely every second, plus have data to optimize processes. 70 million investment, recovered in 7 months.',
 '{"waste_reduction": "6.8% → 2.1%", "monthly_saving": "85 triệu/tháng", "roi_months": "7.2 tháng"}',
 true);
