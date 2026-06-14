import imgAcrylicWashableDistemper from '../assets/AcrylicWashableDistemper.jpeg';
import imgHighGlossEnamel from '../assets/HighGlossEnamel.jpeg';
import imgHighGlossInteriorEmulsion from '../assets/HighGlossInteriorEmulsion.jpeg';
import imgInteriorCementPrimer from '../assets/InteriorCementPrimer.jpeg';
import imgInteriorPremiumEmulsion from '../assets/InteriorPremiumEmulsion.jpeg';
import imgDampProof from '../assets/dampProof.jpeg';
import imgExteriorCementPrimer from '../assets/exteriorCementPrimer.jpeg';
import imgExteriorEmulsion from '../assets/exteriorEmulsion.jpeg';
import imgUltraExteriorEmulsion from '../assets/ultraExteriorEmulsion.jpeg';
import imgUltraPlusExteriorEmulsion from '../assets/ultraPlusExteriorEmulsion.jpeg';

const defaultDescription = (name) => `To use ${name}, first clean the surface using detergent, wire brush, or sandpaper, and wash it thoroughly. Remove any fungus or loose particles. Fill any holes, dents, or cracks with Kalika Wall Putty, sand with emery paper, and wipe clean. Apply two coats of Kalika Wall Putty with a 4-6 hour interval, sanding and wiping clean between coats. Next, apply two coats of Kalika Interior Cement Primer with a 4-6 hour gap between coats. For the topcoat, apply the first coat, allow 6-8 hours of drying, and then apply the second coat, letting it dry overnight. For dark shades, apply a third coat for better results. Note: Keep the container tightly closed to prevent drying. Keep away from children and food. In case of eye contact, rinse immediately with water and seek medical attention. Allow the surface to set for a week before cleaning.`;

const defaultPackSizes = ['20 Ltr', '10 Ltr', '4 Ltr', '1 Ltr'];

export const products = [
  {
    id: 1,
    name: 'Interior Premium Emulsion',
    category: 'interior',
    price: 950,
    description: 'Rich, smooth finish for elegant interiors with excellent washability and durability.',
    longDescription: defaultDescription('Interior Premium Emulsion'),
    packSizes: defaultPackSizes,
    image: imgInteriorPremiumEmulsion,
  },
  {
    id: 2,
    name: 'High Gloss Interior Emulsion',
    category: 'interior',
    price: 1100,
    description: 'Ultra-gloss finish providing a radiant shine and superior stain resistance for interior walls.',
    longDescription: defaultDescription('High Gloss Interior Emulsion'),
    packSizes: defaultPackSizes,
    image: imgHighGlossInteriorEmulsion,
  },
  {
    id: 3,
    name: 'Acrylic Washable Distemper',
    category: 'interior',
    price: 600,
    description: 'Cost-effective, washable distemper offering a matte finish for beautiful interior spaces.',
    longDescription: defaultDescription('Acrylic Washable Distemper'),
    packSizes: defaultPackSizes,
    image: imgAcrylicWashableDistemper,
  },
  {
    id: 4,
    name: 'Interior Cement Primer',
    category: 'interior',
    price: 450,
    description: 'High-quality water-based primer for perfect adhesion and coverage on interior surfaces.',
    longDescription: defaultDescription('Interior Cement Primer'),
    packSizes: defaultPackSizes,
    image: imgInteriorCementPrimer,
  },
  {
    id: 5,
    name: 'Ultra Plus Exterior Emulsion',
    category: 'exterior',
    price: 1850,
    description: 'Advanced exterior emulsion with superior anti-algae and dust resistance for extreme weather.',
    longDescription: defaultDescription('Ultra Plus Exterior Emulsion'),
    packSizes: defaultPackSizes,
    image: imgUltraPlusExteriorEmulsion,
  },
  {
    id: 6,
    name: 'Ultra Exterior Emulsion',
    category: 'exterior',
    price: 1550,
    description: 'High-performance exterior paint designed to protect walls against fading and harsh conditions.',
    longDescription: defaultDescription('Ultra Exterior Emulsion'),
    packSizes: defaultPackSizes,
    image: imgUltraExteriorEmulsion,
  },
  {
    id: 7,
    name: 'Exterior Emulsion',
    category: 'exterior',
    price: 1200,
    description: 'Durable and weather-resistant exterior paint keeping your home beautiful for years.',
    longDescription: defaultDescription('Exterior Emulsion'),
    packSizes: defaultPackSizes,
    image: imgExteriorEmulsion,
  },
  {
    id: 8,
    name: 'Exterior Cement Primer',
    category: 'exterior',
    price: 550,
    description: 'Robust primer offering excellent opacity and protection against alkali attacks on exterior masonry.',
    longDescription: defaultDescription('Exterior Cement Primer'),
    packSizes: defaultPackSizes,
    image: imgExteriorCementPrimer,
  },
  {
    id: 9,
    name: 'High Gloss Enamel',
    category: 'specialty',
    price: 1350,
    description: 'Premium enamel providing a mirror-like gloss for wood, metal, and masonry surfaces.',
    longDescription: defaultDescription('High Gloss Enamel'),
    packSizes: defaultPackSizes,
    image: imgHighGlossEnamel,
  },
  {
    id: 10,
    name: 'Damp Proof',
    category: 'specialty',
    price: 1650,
    description: 'Heavy-duty waterproofing solution offering superior protection against dampness and seepage.',
    longDescription: defaultDescription('Damp Proof'),
    packSizes: defaultPackSizes,
    image: imgDampProof,
  },
];
