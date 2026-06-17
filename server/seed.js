import mongoose from 'mongoose';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import Product from './models/Product.js';
import Admin from './models/Admin.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure uploads directory exists
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Source images directory (from the frontend assets)
const assetsDir = path.join(__dirname, '..', 'src', 'assets');

// Copy image from assets to uploads, return the new filename
function copyImage(assetFilename) {
  const srcPath = path.join(assetsDir, assetFilename);
  if (fs.existsSync(srcPath)) {
    const destFilename = assetFilename;
    const destPath = path.join(uploadsDir, destFilename);
    fs.copyFileSync(srcPath, destPath);
    return `/uploads/${destFilename}`;
  }
  console.warn(`  ⚠️  Image not found: ${assetFilename}`);
  return '';
}

const defaultLongDescription = (name) =>
  `To use ${name}, first clean the surface using detergent, wire brush, or sandpaper, and wash it thoroughly. Remove any fungus or loose particles. Fill any holes, dents, or cracks with Kalika Wall Putty, sand with emery paper, and wipe clean. Apply two coats of Kalika Wall Putty with a 4-6 hour interval, sanding and wiping clean between coats. Next, apply two coats of Kalika Interior Cement Primer with a 4-6 hour gap between coats. For the topcoat, apply the first coat, allow 6-8 hours of drying, and then apply the second coat, letting it dry overnight. For dark shades, apply a third coat for better results. Note: Keep the container tightly closed to prevent drying. Keep away from children and food. In case of eye contact, rinse immediately with water and seek medical attention. Allow the surface to set for a week before cleaning.`;

const defaultPackSizes = ['20 Ltr', '10 Ltr', '4 Ltr', '1 Ltr'];

const seedProducts = [
  {
    name: 'Interior Premium Emulsion',
    category: 'interior',
    price: 950,
    description: 'Rich, smooth finish for elegant interiors with excellent washability and durability.',
    imageFile: 'InteriorPremiumEmulsion.jpeg',
  },
  {
    name: 'High Gloss Interior Emulsion',
    category: 'interior',
    price: 1100,
    description: 'Ultra-gloss finish providing a radiant shine and superior stain resistance for interior walls.',
    imageFile: 'HighGlossInteriorEmulsion.jpeg',
  },
  {
    name: 'Acrylic Washable Distemper',
    category: 'interior',
    price: 600,
    description: 'Cost-effective, washable distemper offering a matte finish for beautiful interior spaces.',
    imageFile: 'AcrylicWashableDistemper.jpeg',
  },
  {
    name: 'Interior Cement Primer',
    category: 'interior',
    price: 450,
    description: 'High-quality water-based primer for perfect adhesion and coverage on interior surfaces.',
    imageFile: 'InteriorCementPrimer.jpeg',
  },
  {
    name: 'Ultra Plus Exterior Emulsion',
    category: 'exterior',
    price: 1850,
    description: 'Advanced exterior emulsion with superior anti-algae and dust resistance for extreme weather.',
    imageFile: 'ultraPlusExteriorEmulsion.jpeg',
  },
  {
    name: 'Ultra Exterior Emulsion',
    category: 'exterior',
    price: 1550,
    description: 'High-performance exterior paint designed to protect walls against fading and harsh conditions.',
    imageFile: 'ultraExteriorEmulsion.jpeg',
  },
  {
    name: 'Exterior Emulsion',
    category: 'exterior',
    price: 1200,
    description: 'Durable and weather-resistant exterior paint keeping your home beautiful for years.',
    imageFile: 'exteriorEmulsion.jpeg',
  },
  {
    name: 'Exterior Cement Primer',
    category: 'exterior',
    price: 550,
    description: 'Robust primer offering excellent opacity and protection against alkali attacks on exterior masonry.',
    imageFile: 'exteriorCementPrimer.jpeg',
  },
  {
    name: 'High Gloss Enamel',
    category: 'specialty',
    price: 1350,
    description: 'Premium enamel providing a mirror-like gloss for wood, metal, and masonry surfaces.',
    imageFile: 'HighGlossEnamel.jpeg',
  },
  {
    name: 'Damp Proof',
    category: 'specialty',
    price: 1650,
    description: 'Heavy-duty waterproofing solution offering superior protection against dampness and seepage.',
    imageFile: 'dampProof.jpeg',
  },
];

async function seed() {
  try {
    console.log('🌱 Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected!\n');

    // --- Seed Admin ---
    console.log('👤 Seeding admin user...');
    await Admin.deleteMany({});
    await Admin.create({
      username: 'admin',
      password: 'kalika2024',
    });
    console.log('   ✅ Admin created (username: admin, password: kalika2024)\n');

    // --- Seed Products ---
    console.log('📦 Seeding products...');
    await Product.deleteMany({});

    console.log('   📸 Copying product images to uploads/...');
    const productsToInsert = seedProducts.map((p) => {
      const imagePath = copyImage(p.imageFile);
      return {
        name: p.name,
        category: p.category,
        price: p.price,
        description: p.description,
        longDescription: defaultLongDescription(p.name),
        packSizes: defaultPackSizes,
        image: imagePath,
      };
    });

    await Product.insertMany(productsToInsert);
    console.log(`   ✅ ${productsToInsert.length} products seeded!\n`);

    console.log('🎉 Seed complete!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Seed error:', error);
    process.exit(1);
  }
}

seed();
