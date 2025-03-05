import Navbar from "./navbar";


function Policy() {
  return (
    <div>
    <Navbar />
    <div style={{ padding: "20px", maxWidth: "800px", margin: "auto", fontFamily: "Arial, sans-serif" }}>
      <h2 className="text-3xl text-center font-bold"><span className="text-pink-500">Inno Collection </span>Clothing Policy</h2>

      <h3>1. Introduction</h3>
      <p>At Inno Collection, we are committed to providing high-quality, stylish, and innovative clothing that meets the needs of our customers. This policy outlines our standards regarding product quality, customer satisfaction, returns, sustainability, and ethical production.</p>

      <h3>2. Product Quality & Standards</h3>
      <ul>
        <li>Every item in our collection undergoes rigorous quality control to ensure durability, comfort, and style.</li>
        <li>Materials used are carefully selected for their quality, sustainability, and adherence to industry standards.</li>
        <li>We strive to maintain a consistent sizing chart to help customers make informed purchase decisions.</li>
      </ul>

      <h3>3. Customer Satisfaction & Returns</h3>
      <ul>
        <li>Customers can return or exchange products within 14 days of receipt, provided items are in their original condition with tags attached.</li>
        <li>Refunds will be processed within 7-10 business days upon receipt and inspection of the returned items.</li>
        <li>Custom or personalized items are non-returnable unless there is a defect or error on our part.</li>
      </ul>

      <h3>4. Ethical & Sustainable Practices</h3>
      <ul>
        <li>Inno Collection is committed to ethical manufacturing, ensuring fair wages and safe working conditions for all workers.</li>
        <li>We prioritize sustainable practices by using eco-friendly materials, reducing waste, and minimizing our carbon footprint.</li>
        <li>Our packaging is designed to be recyclable and environmentally friendly.</li>
      </ul>

      <h3>5. Limited Edition & Pre-Order Items</h3>
      <ul>
        <li>Limited edition collections are available in small quantities and will not be restocked once sold out.</li>
        <li>Pre-order items will have specified delivery timelines, and customers will be notified of any delays.</li>
      </ul>

      <h3>6. Payment & Security</h3>
      <ul>
        <li>We accept various payment methods, including credit/debit cards and digital payment platforms.</li>
        <li>All transactions are secure, and customer data is protected in compliance with industry security standards.</li>
      </ul>

      <h3>7. Contact & Support</h3>
      <ul>
        <li>For inquiries, support, or feedback, customers can reach us via email or through our official social media channels.</li>
        <li>Our customer service team is available Monday to Friday, from 9 AM to 6 PM.</li>
      </ul>

      <p>This policy is subject to updates to align with evolving industry standards and customer needs. Thank you for choosing Inno Collection!</p>
    </div>
    </div>
  );
}

export default Policy;

