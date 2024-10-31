# TODO zadanie

Implementácia jednoduchej webovej aplikácie „ToDo“ so zoznamom úloh pomocou React, buď JavaScript alebo TypeScript podľa výberu programátora, HTML a CSS. Zadanie bude odovzdané formou verejného github repozitára, spôsob spustenia aplikácie bude zdokumentované.

## Povinné funkcionality

- Zoznam úloh zobrazuje všetky pridané úlohy.
- Úlohá môže máť stav „To do“, „In progress“ a „Done“. Domovská stránka je rozdelená do 3 stĺpcov podľa stavu úlohy.
- Používateľ môže pridávať nové úlohy. Kliknutím na tlačidlo "Pridať úlohu" sa otvorí jednoduchý formulár na pridanie novej úlohy. Formulár by mal mať jednoduchú validáciu, ako napríklad zabrániť pridaniu prázdnej úlohy.
- Každá úloha má tlačidlo “Start”, po kliknutí na tlačidlo prejde do stavu „In progress“, text na tlačidle sa zmení na „Dokončiť“. Ďalším kliknutím na tlačidlo prejde úloha do stavu „Hotovo“, tlačidlo sa opäť zmení na „Odznova“.
- Každá úloha má navyše tlačidlo na odstránenie úlohy.

## Pridané funkcionality

- **_Možnosť presúvania úlohy miesto klikania_**
  - Zjednodušenie správy úloh cez „drag-and-drop“ funkciu.
- **_Každá úloha môže mať štítok (škola/práca/osobné)_**
  - Označenie úloh štítkami pre lepšie triedenie a filtrovanie.
- **_Pridanie priority k úlohám (nízka, stredná, vysoká)_**
  - Označenie dôležitosti úloh na určenie poradia plnenia a spríjemnenia UX.
- **_Možnosť archívovať úlohu_**
  - Uloženie odstránených úloh, ktoré bude možno restornúť alebo odstrániť nadobro
- **_Edit úlohy_**
  - Umožnenie editu úlohy, či už prioritu/label/title alebo popisok.
- **_Detail úlohy_**
  - Zobrazenie podrobností o úlohe vrátane popisu.
- **_Vyhľadávanie a sortovanie_**
  - Ľahšia manipulácia s úlohami.

## Použitie

1. Spustite `npm install` na nainštalovanie dependecies
2. Otvorte 2 termináli:
   - Na prvom, spustite `npm run server` pre spustenie json servera.
   - Na druhom, spustite `npm run dev` pre spustenie aplikácie.
