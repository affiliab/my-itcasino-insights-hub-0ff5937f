import luckyvibeLogo from "@/assets/logos/luckyvibe.asset.json";
import betrepublicLogo from "@/assets/logos/betrepublic.asset.json";
import rollxoLogo from "@/assets/logos/rollxo.asset.json";
import winnitaLogo from "@/assets/logos/winnita.asset.json";
import betnjetLogo from "@/assets/logos/betnjet.asset.json";

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
}

export const CASINOS: Casino[] = [
  { id: "luckyvibe", name: "LuckyVibe", rating: 5.0, bonus: "Bonus fino a 5000 $/€ + 300 giri gratuiti", bonus2: "Fino a 1100 $/€ + 170 FS al primo deposito", color: "#a78bfa", license: "Curaçao eGaming", minDeposit: "10 €", payout: "1-24 h", live: true, crypto: true, url: "https://roosters-partner.com/aapze1n02l", logo: luckyvibeLogo.url },
  { id: "betrepublic", name: "Betrepublic", rating: 4.9, bonus: "Raddoppia la prima puntata - fino a 250 €", bonus2: "Bonus 100% sul deposito iniziale", color: "#111111", license: "Curaçao eGaming", minDeposit: "20 €", payout: "1-48 h", live: true, crypto: false, url: "https://btrpc.kngpulse.com/?mid=238257_2092015", logo: betrepublicLogo.url },
  { id: "rollxo", name: "RollXO", rating: 4.9, bonus: "125% fino a 1.000 € + 200 giri gratuiti", color: "#1a1830", license: "Curaçao eGaming", minDeposit: "20 €", payout: "24-72 h", live: true, crypto: true, url: "https://rollxo.media/n1pfbliypy", logo: rollxoLogo.url },
  { id: "wintino", name: "Wintino", rating: 4.9, bonus: "150% fino a 1.000 € + 300 giri gratuiti", color: "#22d3ee", license: "Curaçao eGaming", minDeposit: "20 €", payout: "24 h", live: true, crypto: true, url: "https://wtno.pslera.com/?mid=377856_2192537" },
  { id: "betnjet", name: "Betnjet", rating: 4.9, bonus: "400% fino a 1.000 € + 250 giri gratuiti", color: "#0f1420", license: "Curaçao eGaming", minDeposit: "10 €", payout: "1-72 h", live: true, crypto: true, url: "https://gtrfk.com/jgme5sykp", logo: betnjetLogo.url },
  { id: "stonevegas", name: "StoneVegas", rating: 4.9, bonus: "Bonus di benvenuto 500 € + 200 giri gratuiti", color: "#fbbf24", license: "Curaçao eGaming", minDeposit: "20 €", payout: "24-48 h", live: true, crypto: true, url: "https://stnvgs.pleotra.com/?mid=334563_2191545" },
  { id: "richroyal", name: "Rich Royal", rating: 4.9, bonus: "275 € fino a 7.500 + 225 FS + Bonus Granchio", bonus2: "700 € + 50 giri gratis sui primi depositi", color: "#f87171", license: "Curaçao eGaming", minDeposit: "10 €", payout: "1-24 h", live: true, crypto: true, url: "https://rchrl.fynkelto.com/?mid=285174_2145320" },
  { id: "royalsea", name: "RoyalSea", rating: 5.0, bonus: "+120% al deposito + 100 giri gratuiti + 200 cristalli", color: "#38bdf8", license: "Curaçao eGaming", minDeposit: "20 €", payout: "24 h", live: true, crypto: true, url: "https://click2dep.g2afse.com/click?pid=494&offer_id=1940" },
  { id: "nitrobet", name: "Nitrobet", rating: 5.0, bonus: "500% + 350 giri gratuiti - pacchetto Nitro Power", color: "#fb923c", license: "Anjouan Gaming", minDeposit: "10 €", payout: "1-24 h", live: true, crypto: true, url: "https://record.nospartners.com/__BBFWysCs1VqkvbhkiKqDGNd7ZgqdRLk/1/?pg=1" },
  { id: "winnita", name: "Winnita", rating: 5.0, bonus: "Fino a 3.000 € + 450 FS - casinò + sport", bonus2: "+150% sul deposito da 10 € + 150 FS", color: "#ffffff", license: "Curaçao eGaming", minDeposit: "10 €", payout: "1-48 h", live: true, crypto: true, url: "https://moy.auraodin.com/redirect.aspx?lpid=1095&bid=1484&pid=128909", logo: winnitaLogo.url },
];

export const CASINO_MAP: Record<string, Casino> = Object.fromEntries(CASINOS.map(c => [c.id, c]));