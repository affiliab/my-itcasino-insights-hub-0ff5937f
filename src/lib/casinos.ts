import luckyvibeLogo from "@/assets/logos/luckyvibe.asset.json";
import betrepublicLogo from "@/assets/logos/betrepublic.asset.json";
import rollxoLogo from "@/assets/logos/rollxo.asset.json";
import winnitaLogo from "@/assets/logos/winnita.asset.json";
import betnjetLogo from "@/assets/logos/betnjet.asset.json";
import nitrobetLogo from "@/assets/logos/nitrobet.asset.json";
import richroyalLogo from "@/assets/logos/richroyal.asset.json";
import royalseaLogo from "@/assets/logos/royalsea.asset.json";
import stonevegasLogo from "@/assets/logos/stonevegas.asset.json";
import wintinoLogo from "@/assets/logos/wintino.asset.json";

// Assets are served by Lovable infra at /__l5e/*, which is unreachable
// from custom domains hosted outside Lovable. Prefix with the stable
// project host so images work everywhere.
const ASSET_HOST = "https://project--2eff4829-51eb-4922-9185-b3ee7a267b5b.lovable.app";
const abs = (u: string) => (u.startsWith("http") ? u : `${ASSET_HOST}${u}`);

export interface Casino {
  id: string;
  name: string;
  rating: number;
  bonus: string;
  bonus2?: string;
  color: string;
  license: string;
  minDeposit: string;
  payout: string;
  live: boolean;
  crypto: boolean;
  url: string;
  logo?: string;
  payments?: string[];
}

export const CASINOS: Casino[] = [
  { id: "luckyvibe", name: "LuckyVibe", rating: 5.0, bonus: "Bonus fino a 5000 $/€ + 300 giri gratuiti", bonus2: "Fino a 1100 $/€ + 170 FS al primo deposito", color: "#a78bfa", license: "Curaçao eGaming", minDeposit: "10 €", payout: "1-24 h", live: true, crypto: true, url: "https://roosters-partner.com/aapze1n02l", logo: abs(luckyvibeLogo.url) },
  { id: "betrepublic", name: "Betrepublic", rating: 4.9, bonus: "Raddoppia la prima puntata - fino a 250 €", bonus2: "Bonus 100% sul deposito iniziale", color: "#111111", license: "Curaçao eGaming", minDeposit: "20 €", payout: "1-48 h", live: true, crypto: false, url: "https://btrpc.kngpulse.com/?mid=238257_2092015", logo: abs(betrepublicLogo.url) },
  { id: "rollxo", name: "RollXO", rating: 4.9, bonus: "125% fino a 1.000 € + 200 giri gratuiti", color: "#1a1830", license: "Curaçao eGaming", minDeposit: "20 €", payout: "24-72 h", live: true, crypto: true, url: "https://rollxo.media/n1pfbliypy", logo: abs(rollxoLogo.url) },
  { id: "wintino", name: "Wintino", rating: 4.9, bonus: "150% fino a 1.000 € + 300 giri gratuiti", color: "#1a1a1a", license: "Curaçao eGaming", minDeposit: "20 €", payout: "24 h", live: true, crypto: true, url: "https://wtno.pslera.com/?mid=377856_2192537", logo: abs(wintinoLogo.url) },
  { id: "betnjet", name: "Betnjet", rating: 4.9, bonus: "400% fino a 1.000 € + 250 giri gratuiti", color: "#0f1420", license: "Curaçao eGaming", minDeposit: "10 €", payout: "1-72 h", live: true, crypto: true, url: "https://gtrfk.com/jgme5sykp", logo: abs(betnjetLogo.url) },
  { id: "stonevegas", name: "StoneVegas", rating: 4.9, bonus: "Bonus di benvenuto 500 € + 200 giri gratuiti", color: "#3a2416", license: "Curaçao eGaming", minDeposit: "20 €", payout: "24-48 h", live: true, crypto: true, url: "https://stnvgs.pleotra.com/?mid=334563_2191545", logo: abs(stonevegasLogo.url) },
  { id: "richroyal", name: "Rich Royal", rating: 4.9, bonus: "275 € fino a 7.500 + 225 FS + Bonus Granchio", bonus2: "700 € + 50 giri gratis sui primi depositi", color: "#1b3a5f", license: "Curaçao eGaming", minDeposit: "10 €", payout: "1-24 h", live: true, crypto: true, url: "https://rchrl.fynkelto.com/?mid=285174_2145320", logo: abs(richroyalLogo.url) },
  { id: "royalsea", name: "RoyalSea", rating: 5.0, bonus: "+120% al deposito + 100 giri gratuiti + 200 cristalli", color: "#ffffff", license: "Curaçao eGaming", minDeposit: "20 €", payout: "24 h", live: true, crypto: true, url: "https://click2dep.g2afse.com/click?pid=494&offer_id=1940", logo: abs(royalseaLogo.url) },
  { id: "nitrobet", name: "Nitrobet", rating: 5.0, bonus: "500% + 350 giri gratuiti - pacchetto Nitro Power", color: "#1e3a2a", license: "Anjouan Gaming", minDeposit: "10 €", payout: "1-24 h", live: true, crypto: true, url: "https://record.nospartners.com/__BBFWysCs1VqkvbhkiKqDGNd7ZgqdRLk/1/?pg=1", logo: abs(nitrobetLogo.url) },
  { id: "winnita", name: "Winnita", rating: 5.0, bonus: "Fino a 3.000 € + 450 FS - casinò + sport", bonus2: "+150% sul deposito da 10 € + 150 FS", color: "#ffffff", license: "Curaçao eGaming", minDeposit: "10 €", payout: "1-48 h", live: true, crypto: true, url: "https://moy.auraodin.com/redirect.aspx?lpid=1095&bid=1484&pid=128909", logo: abs(winnitaLogo.url) },
];

export const CASINO_MAP: Record<string, Casino> = Object.fromEntries(CASINOS.map(c => [c.id, c]));